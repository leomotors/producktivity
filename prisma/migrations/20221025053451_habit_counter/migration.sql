/*
  Warnings:

  - You are about to drop the column `current_count` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `require_count` on the `event` table. All the data in the column will be lost.
  - Added the required column `require_count` to the `habit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "event" DROP COLUMN "current_count",
DROP COLUMN "require_count";

-- AlterTable
ALTER TABLE "habit" ADD COLUMN     "current_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "require_count" INTEGER NOT NULL;
