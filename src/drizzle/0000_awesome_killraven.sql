-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `characters` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`species` int NOT NULL,
	`gender` int NOT NULL,
	`class` varchar(255) NOT NULL,
	CONSTRAINT `characters_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `genders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `genders_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `species` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	CONSTRAINT `species_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `idx_species` ON `characters` (`species`);--> statement-breakpoint
CREATE INDEX `idx_gender` ON `characters` (`gender`);
*/