/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Strategy` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Strategy_name_key" ON "Strategy"("name");
