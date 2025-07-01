-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(255) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "is_email_verified" BOOLEAN DEFAULT false,
    "mobile_number" VARCHAR(20),
    "is_mobile_verified" BOOLEAN DEFAULT false,
    "password_hash" TEXT,
    "auth_provider" VARCHAR(50),
    "provider_id" VARCHAR(100),
    "bio" TEXT,
    "profile_image" TEXT,
    "location" VARCHAR(100),
    "social_links" JSONB,
    "role" VARCHAR(20) DEFAULT 'user',
    "is_active" BOOLEAN DEFAULT true,
    "last_login_at" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diary" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "slug" TEXT,
    "content" TEXT NOT NULL,
    "coverImage" TEXT,
    "images" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "location" TEXT NOT NULL,
    "weatherAtTime" JSONB,
    "isPublic" BOOLEAN DEFAULT false,
    "authorId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Diary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_mobile_number_key" ON "users"("mobile_number");

-- CreateIndex
CREATE UNIQUE INDEX "Diary_slug_key" ON "Diary"("slug");

-- CreateIndex
CREATE INDEX "Diary_slug_idx" ON "Diary"("slug");

-- CreateIndex
CREATE INDEX "Diary_authorId_idx" ON "Diary"("authorId");
