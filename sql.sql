CREATE TABLE `users` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `nickname` varchar(63) UNIQUE NOT NULL,
  `name` varchar(127),
  `surname` varchar(127),
  `email` varchar(255) UNIQUE NOT NULL,
  `role` enum('user', 'moderator', 'admin') DEFAULT 'user' NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NOW() NOT NULL,
  `avatar` varchar(255),
  `about` text,
  `city` varchar(127),
  `birthday` date,
  `status` enum('active', 'deleted', 'blocked') DEFAULT 'active' NOT NULL,
  `is_confirmed` tinyint(1) DEFAULT 0 NOT NULL,
  `salt` char(20) NOT NULL,
  `rating` float,
  PRIMARY KEY (`id`)
);

CREATE TABLE `subscriptions` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `from_id` int UNSIGNED NOT NULL,
  `to_id` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `subscriptions_from_id_users_id_foreign` FOREIGN KEY (`from_id`) REFERENCES `users` (`id`),
  CONSTRAINT `subscriptions_to_id_users_id_foreign` FOREIGN KEY (`to_id`) REFERENCES `users` (`id`)
);

CREATE TABLE `status_law_types` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `type` varchar(63),
  `picture` varchar(255),
  PRIMARY KEY (`id`)
);

CREATE TABLE `status_laws` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `type_id` int UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `status_laws_type_id_status_law_types_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `status_law_types` (`id`),
  CONSTRAINT `status_laws_user_id_users_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

CREATE TABLE `goods` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `name` varchar(127) NOT NULL,
  -- `condition` varchar(127),
  `price` decimal(15,2),
  `description` text,
  -- `tags` json,
  `photos` json,
  `user_id` int UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT NOW() NOT NULL,
  `views` int,
  `status` enum('active', 'deleted', 'blocked', 'sold') DEFAULT 'active' NOT NULL,
  `latitude` float,
  `longitude` float,
  -- `sex` boolean,
  PRIMARY KEY(`id`),
  CONSTRAINT `goods_user_id_users_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);

CREATE TABLE `ratings` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `from_id` int UNSIGNED NOT NULL,
  `to_id` int UNSIGNED NOT NULL,
  `rating` int NOT NULL,
  `under_id` int UNSIGNED NOT NULL,
  `text` text,
  `created_at` datetime DEFAULT NOW() NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `ratings_from_id_users_id_foreign` FOREIGN KEY (`from_id`) REFERENCES `users` (`id`),
  CONSTRAINT `ratings_to_id_users_id_foreign` FOREIGN KEY (`to_id`) REFERENCES `users` (`id`),
  CONSTRAINT `ratings_under_id_goods_id_foreign` FOREIGN KEY (`under_id`) REFERENCES `goods` (`id`)
);

CREATE TABLE `category_types` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `type` varchar(63),
  PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `type_id` int UNSIGNED NOT NULL,
  `goods_id` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `categories_type_id_category_types_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `category_types` (`id`),
  CONSTRAINT `categories_goods_id_goods_id_foreign` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`)
);

--CREATE TABLE `color_types` (
--  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
--  `type` varchar(63),
--  `color` varchar(255),
--  PRIMARY KEY (`id`)
--);

--CREATE TABLE `colors` (
--  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
--  `type_id` int UNSIGNED NOT NULL,
--  `goods_id` int UNSIGNED NOT NULL,
--  PRIMARY KEY (`id`),
--  CONSTRAINT `colors_type_id_color_types_id_foreign` FOREIGN KEY (`type_id`) REFERENCES `color_types` (`id`),
--  CONSTRAINT `colors_goods_id_goods_id_foreign` FOREIGN KEY (`goods_id`) REFERENCES `goods` (`id`)
--);

CREATE TABLE `conversations` (
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL,
  `from_id` int UNSIGNED NOT NULL,
  `to_id` int UNSIGNED NOT NULL,
  `messages` json,
  PRIMARY KEY (`id`),
  CONSTRAINT `conversations_from_id_users_id_foreign` FOREIGN KEY (`from_id`) REFERENCES `users` (`id`),
  CONSTRAINT `conversations_to_id_users_id_foreign` FOREIGN KEY (`to_id`) REFERENCES `users` (`id`)
);

CREATE USER 'fartsa'@'localhost' IDENTIFIED BY 'S$PD5TsU@ke8JEhT~J9M';
GRANT SELECT,UPDATE,INSERT,DELETE ON fartsa . * TO 'fartsa'@'localhost';









ALTER TABLE goods DROP FOREIGN KEY goods_user_id_users_id_foreign;
ALTER TABLE goods DROP COLUMN user_id;