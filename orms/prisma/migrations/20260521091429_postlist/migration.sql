-- CreateTable
CREATE TABLE "POST" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "POST_pkey" PRIMARY KEY ("id")
);
