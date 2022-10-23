-- CreateTable
CREATE TABLE "case" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "due_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "case_id" TEXT NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "habit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "case_id" TEXT NOT NULL,

    CONSTRAINT "habit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "due_date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "case_id" TEXT NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filter" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "caseId" TEXT NOT NULL,
    "filterDefinitionId" TEXT NOT NULL,

    CONSTRAINT "filter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "filterDefinition" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "filterDefinition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notofication" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_visited" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "notofication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "case_id_key" ON "case"("id");

-- CreateIndex
CREATE UNIQUE INDEX "case_user_id_key" ON "case"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "task_id_key" ON "task"("id");

-- CreateIndex
CREATE UNIQUE INDEX "task_case_id_key" ON "task"("case_id");

-- CreateIndex
CREATE UNIQUE INDEX "habit_id_key" ON "habit"("id");

-- CreateIndex
CREATE UNIQUE INDEX "habit_case_id_key" ON "habit"("case_id");

-- CreateIndex
CREATE UNIQUE INDEX "event_id_key" ON "event"("id");

-- CreateIndex
CREATE UNIQUE INDEX "event_case_id_key" ON "event"("case_id");

-- CreateIndex
CREATE UNIQUE INDEX "filter_id_key" ON "filter"("id");

-- CreateIndex
CREATE UNIQUE INDEX "filterDefinition_id_key" ON "filterDefinition"("id");

-- CreateIndex
CREATE UNIQUE INDEX "notofication_id_key" ON "notofication"("id");

-- AddForeignKey
ALTER TABLE "case" ADD CONSTRAINT "case_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_case_id_fkey" FOREIGN KEY ("case_id") REFERENCES "case"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit" ADD CONSTRAINT "habit_case_id_fkey" FOREIGN KEY ("case_id") REFERENCES "case"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event" ADD CONSTRAINT "event_case_id_fkey" FOREIGN KEY ("case_id") REFERENCES "case"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "filter" ADD CONSTRAINT "filter_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "case"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "filter" ADD CONSTRAINT "filter_filterDefinitionId_fkey" FOREIGN KEY ("filterDefinitionId") REFERENCES "filterDefinition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notofication" ADD CONSTRAINT "notofication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
