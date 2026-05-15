-- CreateTable Job
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
    "sourceUrl" TEXT NOT NULL,
    "source" VARCHAR(100) NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "keywords" TEXT,
    "publishedAt" TIMESTAMP(3),
    "scrapedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable JobSource
CREATE TABLE "JobSource" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "apiKey" TEXT,
    "headers" TEXT,
    "queryParams" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastFetchedAt" TIMESTAMP(3),
    "nextFetchAt" TIMESTAMP(3),
    "fetchInterval" INTEGER NOT NULL DEFAULT 3600,
    "maxRetries" INTEGER NOT NULL DEFAULT 3,
    "totalJobsFetched" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobSource_pkey" PRIMARY KEY ("id")
);

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
CREATE INDEX "Job_createdAt_idx" ON "Job"("createdAt");

-- CreateIndex
CREATE INDEX "Job_scrapedAt_idx" ON "Job"("scrapedAt");

-- CreateIndex
CREATE UNIQUE INDEX "JobSource_name_key" ON "JobSource"("name");

-- CreateIndex
CREATE INDEX "JobSource_isActive_idx" ON "JobSource"("isActive");

-- CreateIndex
CREATE INDEX "JobSource_lastFetchedAt_idx" ON "JobSource"("lastFetchedAt");
