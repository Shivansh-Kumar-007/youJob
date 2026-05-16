import mammoth from "mammoth";
import { PDFParse } from "pdf-parse";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateObject } from "ai";
import prisma from "@/lib/prisma";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";
import { parsedResumeProfileSchema } from "@/app/actions/auth/auth.schema";

const geminiProvider = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function getExtension(path: string): string {
  const lowerPath = path.toLowerCase();
  if (lowerPath.endsWith(".pdf")) return "pdf";
  if (lowerPath.endsWith(".docx")) return "docx";
  if (lowerPath.endsWith(".doc")) return "doc";
  return "";
}

async function extractResumeText(
  fileBuffer: Buffer,
  extension: string,
): Promise<string> {
  if (extension === "pdf") {
    PDFParse.setWorker("");
    const parser = new PDFParse({ data: fileBuffer });
    try {
      const result = await parser.getText();
      return result.text || "";
    } finally {
      await parser.destroy();
    }
  }

  if (extension === "docx" || extension === "doc") {
    const result = await mammoth.extractRawText({ buffer: fileBuffer });
    return result.value || "";
  }

  return fileBuffer.toString("utf-8");
}

export async function ingestResumeForUser(options: {
  userId: string;
  resumePath: string;
  bucket: string;
}) {
  const { userId, resumePath, bucket } = options;
  const existingProfile = await prisma.userProfile.findUnique({
    where: { userId },
    select: { resumeUrl: true, resumeText: true, parsedProfile: true },
  });

  if (
    existingProfile?.resumeUrl === resumePath &&
    existingProfile.resumeText &&
    existingProfile.parsedProfile
  ) {
    return;
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin.storage.from(bucket).download(resumePath);

  if (error || !data) {
    throw new Error(error?.message || "Failed to download resume from storage");
  }

  const fileBuffer = Buffer.from(await data.arrayBuffer());
  const extension = getExtension(resumePath);
  const resumeText = (await extractResumeText(fileBuffer, extension))
    .replace(/\u0000/g, " ")
    .trim()
    .slice(0, 120000);

  if (!resumeText) {
    throw new Error("Could not extract text from uploaded resume");
  }

  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Missing GEMINI_API_KEY");
  }

  const profileResult = await generateObject({
    model: geminiProvider(
      process.env.AI_RANKING_MODEL || "gemini-2.5-flash",
    ),
    schema: parsedResumeProfileSchema,
    prompt: [
      "Extract a structured candidate profile from this CV/resume text.",
      "Return concise fields only, no markdown.",
      "",
      resumeText.slice(0, 30000),
    ].join("\n"),
  });

  const parsed = profileResult.object;
  const keywords = [...new Set(parsed.keywords.map((keyword) => keyword.trim()))]
    .filter(Boolean)
    .slice(0, 120)
    .join(", ");
  const skills = [...new Set(parsed.skills.map((skill) => skill.trim()))].filter(
    Boolean,
  );

  await prisma.userProfile.upsert({
    where: { userId },
    update: {
      resumeUrl: resumePath,
      resumeText,
      parsedProfile: parsed,
      targetTitle: parsed.targetTitle || null,
      summary: parsed.summary || null,
      skills,
      preferredLocations: parsed.preferredLocations,
      remoteOnly: parsed.remoteOnly ?? false,
      keywords: keywords || null,
    },
    create: {
      userId,
      resumeUrl: resumePath,
      resumeText,
      parsedProfile: parsed,
      targetTitle: parsed.targetTitle || null,
      summary: parsed.summary || null,
      skills,
      preferredLocations: parsed.preferredLocations,
      remoteOnly: parsed.remoteOnly ?? false,
      keywords: keywords || null,
    },
  });
}
