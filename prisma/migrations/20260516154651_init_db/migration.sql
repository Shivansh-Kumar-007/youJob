-- CreateEnum
CREATE TYPE "PlanTier" AS ENUM ('FREE', 'PRO');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('CLICKED', 'APPLIED', 'SAVED', 'DISMISSED');

-- CreateEnum
CREATE TYPE "SearchRunType" AS ENUM ('FREE_INITIAL', 'PAID_DEEP');

-- CreateEnum
CREATE TYPE "SearchRunStatus" AS ENUM ('RUNNING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "fullName" VARCHAR(255),
    "planTier" "PlanTier" NOT NULL DEFAULT 'FREE',
    "dailyApplyLimit" INTEGER NOT NULL DEFAULT 5,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "resumeUrl" VARCHAR(500),
    "resumeMimeType" VARCHAR(100),
    "resumeFileSize" INTEGER,
    "resumeContentHash" VARCHAR(128),
    "resumeParsedAt" TIMESTAMP(3),
    "resumeText" TEXT,
    "parsedProfile" JSONB,
    "targetTitle" VARCHAR(255),
    "summary" TEXT,
    "remoteOnly" BOOLEAN NOT NULL DEFAULT false,
    "preferredLocations" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "salaryExpectation" VARCHAR(100),
    "currency" VARCHAR(10),
    "skills" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "keywords" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "company" VARCHAR(255) NOT NULL,
    "companyUrl" TEXT,
    "description" TEXT NOT NULL,
    "requirements" TEXT,
    "location" VARCHAR(255),
    "locationType" VARCHAR(100),
    "salary" VARCHAR(100),
    "currency" VARCHAR(10),
    "jobType" VARCHAR(100),
    "level" VARCHAR(100),
    "sourceUrl" VARCHAR(500) NOT NULL,
    "source" VARCHAR(100) NOT NULL,
    "sourceDomain" VARCHAR(255),
    "discoveryQuery" TEXT,
    "contentHash" VARCHAR(128),
    "confidenceScore" DOUBLE PRECISION,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "keywords" TEXT,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishedAt" TIMESTAMP(3),
    "scrapedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "archivedAt" TIMESTAMP(3),

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'CLICKED',
    "clickedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "appliedAt" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchRun" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "SearchRunType" NOT NULL DEFAULT 'FREE_INITIAL',
    "status" "SearchRunStatus" NOT NULL DEFAULT 'RUNNING',
    "querySet" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "profileSnapshot" JSONB,
    "resultLimit" INTEGER NOT NULL DEFAULT 10,
    "fetchedCount" INTEGER NOT NULL DEFAULT 0,
    "rankedCount" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SearchRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SearchRunResult" (
    "id" TEXT NOT NULL,
    "searchRunId" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "score" DOUBLE PRECISION,
    "reason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SearchRunResult_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_planTier_idx" ON "User"("planTier");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE INDEX "UserProfile_targetTitle_idx" ON "UserProfile"("targetTitle");

-- CreateIndex
CREATE INDEX "UserProfile_resumeParsedAt_idx" ON "UserProfile"("resumeParsedAt");

-- CreateIndex
CREATE INDEX "UserProfile_resumeContentHash_idx" ON "UserProfile"("resumeContentHash");

-- CreateIndex
CREATE UNIQUE INDEX "Job_sourceUrl_key" ON "Job"("sourceUrl");

-- CreateIndex
CREATE INDEX "Job_company_idx" ON "Job"("company");

-- CreateIndex
CREATE INDEX "Job_title_idx" ON "Job"("title");

-- CreateIndex
CREATE INDEX "Job_location_idx" ON "Job"("location");

-- CreateIndex
CREATE INDEX "Job_jobType_idx" ON "Job"("jobType");

-- CreateIndex
CREATE INDEX "Job_level_idx" ON "Job"("level");

-- CreateIndex
CREATE INDEX "Job_source_idx" ON "Job"("source");

-- CreateIndex
CREATE INDEX "Job_sourceDomain_idx" ON "Job"("sourceDomain");

-- CreateIndex
CREATE INDEX "Job_createdAt_idx" ON "Job"("createdAt");

-- CreateIndex
CREATE INDEX "Job_scrapedAt_idx" ON "Job"("scrapedAt");

-- CreateIndex
CREATE INDEX "Job_lastSeenAt_idx" ON "Job"("lastSeenAt");

-- CreateIndex
CREATE INDEX "Job_archivedAt_idx" ON "Job"("archivedAt");

-- CreateIndex
CREATE INDEX "JobApplication_userId_clickedAt_idx" ON "JobApplication"("userId", "clickedAt");

-- CreateIndex
CREATE INDEX "JobApplication_jobId_idx" ON "JobApplication"("jobId");

-- CreateIndex
CREATE UNIQUE INDEX "JobApplication_userId_jobId_key" ON "JobApplication"("userId", "jobId");

-- CreateIndex
CREATE INDEX "SearchRun_userId_createdAt_idx" ON "SearchRun"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "SearchRun_status_idx" ON "SearchRun"("status");

-- CreateIndex
CREATE INDEX "SearchRunResult_jobId_idx" ON "SearchRunResult"("jobId");

-- CreateIndex
CREATE UNIQUE INDEX "SearchRunResult_searchRunId_jobId_key" ON "SearchRunResult"("searchRunId", "jobId");

-- CreateIndex
CREATE UNIQUE INDEX "SearchRunResult_searchRunId_rank_key" ON "SearchRunResult"("searchRunId", "rank");

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SearchRun" ADD CONSTRAINT "SearchRun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SearchRunResult" ADD CONSTRAINT "SearchRunResult_searchRunId_fkey" FOREIGN KEY ("searchRunId") REFERENCES "SearchRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SearchRunResult" ADD CONSTRAINT "SearchRunResult_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;
