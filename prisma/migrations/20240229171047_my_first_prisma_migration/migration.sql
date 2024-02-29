-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "background" TEXT NOT NULL DEFAULT 'yellow'
);
INSERT INTO "new_Tasks" ("date", "id", "title") SELECT "date", "id", "title" FROM "Tasks";
DROP TABLE "Tasks";
ALTER TABLE "new_Tasks" RENAME TO "Tasks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
