-- AlterTable
ALTER TABLE `Rent` ADD COLUMN `from` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `to` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);