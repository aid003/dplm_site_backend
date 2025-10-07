-- Add projectFile column
ALTER TABLE "Project" ADD COLUMN IF NOT EXISTS "projectFile" TEXT;

-- Make ownerId nullable to allow creating projects without auth for now
ALTER TABLE "Project" ALTER COLUMN "ownerId" DROP NOT NULL;

-- Replace enum ProjectStatus to only have ACTIVE, ARCHIVED, DELETED
DO $$
BEGIN
  -- create new enum type
  CREATE TYPE "ProjectStatus_new" AS ENUM ('ACTIVE', 'ARCHIVED', 'DELETED');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END$$;

ALTER TABLE "Project"
  ALTER COLUMN "status" DROP DEFAULT,
  ALTER COLUMN "status" TYPE "ProjectStatus_new"
  USING (
    CASE
      WHEN "status"::text IN ('ACTIVE','ARCHIVED','DELETED') THEN "status"::text::"ProjectStatus_new"
      ELSE 'ACTIVE'::"ProjectStatus_new"
    END
  ),
  ALTER COLUMN "status" SET DEFAULT 'ACTIVE';

-- drop old type and rename new
DO $$
DECLARE
  has_old boolean;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM pg_type WHERE typname = 'ProjectStatus'
  ) INTO has_old;
  IF has_old THEN
    -- need to drop old type; but we already changed column to new type
    DROP TYPE "ProjectStatus";
  END IF;
END$$;

ALTER TYPE "ProjectStatus_new" RENAME TO "ProjectStatus";


