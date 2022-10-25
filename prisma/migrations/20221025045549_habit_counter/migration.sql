/*
  Warnings:

  - Added the required column `require_count` to the `event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" ADD COLUMN     "current_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "require_count" INTEGER NOT NULL;
