-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL DEFAULT (UUID()),
    `nome` VARCHAR(256) NOT NULL,
    `email` VARCHAR(256) NOT NULL,
    `senha` VARCHAR(16) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
