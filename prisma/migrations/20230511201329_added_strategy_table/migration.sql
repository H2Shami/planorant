-- CreateTable
CREATE TABLE "Character" (
    "name" TEXT NOT NULL,
    "duelist" BOOLEAN NOT NULL DEFAULT false,
    "controller" BOOLEAN NOT NULL DEFAULT false,
    "initiator" BOOLEAN NOT NULL DEFAULT false,
    "sentinel" BOOLEAN NOT NULL DEFAULT false,
    "path" TEXT NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Map" (
    "name" TEXT NOT NULL,
    "inRotation" BOOLEAN NOT NULL DEFAULT false,
    "path" TEXT NOT NULL,

    CONSTRAINT "Map_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Strategy" (
    "name" TEXT NOT NULL,
    "duelist" BOOLEAN NOT NULL DEFAULT false,
    "controller" BOOLEAN NOT NULL DEFAULT false,
    "initiator" BOOLEAN NOT NULL DEFAULT false,
    "sentinel" BOOLEAN NOT NULL DEFAULT false,
    "map" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "Strategy_pkey" PRIMARY KEY ("name","duelist","controller","initiator","sentinel","map")
);

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Character_path_key" ON "Character"("path");

-- CreateIndex
CREATE UNIQUE INDEX "Map_name_key" ON "Map"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Map_path_key" ON "Map"("path");

-- CreateIndex
CREATE UNIQUE INDEX "Strategy_path_key" ON "Strategy"("path");
