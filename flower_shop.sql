-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 09, 2024 at 09:52 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flower_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `id_post` bigint UNSIGNED NOT NULL,
  `count` int NOT NULL DEFAULT '1',
  `summ` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint UNSIGNED NOT NULL,
  `id_user` bigint UNSIGNED NOT NULL,
  `order_price` int NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `InStock` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `quantity` bigint UNSIGNED NOT NULL DEFAULT '1',
  `category_id` bigint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `price`, `description`, `image`, `InStock`, `created_at`, `updated_at`, `quantity`, `category_id`) VALUES
(1, 'Алое', '90', 'Растение с толстыми сочными листьями, которое часто используется в медицинских и косметических целях.', './assets/img/товар 3 (2).png', 1, NULL, NULL, 1, NULL),
(2, 'Кактус', '90', 'Растение, которое растет в засушливых местностях и характеризуются наличием колючек вместо листьев.', './assets/img/товар 4 (2).png', 1, NULL, NULL, 1, NULL),
(3, 'Синие пионы', '90', 'Синие пионы являются воплощением мистики, с их нежными и яркими лепестками, наполняющими воздух чудесным ароматом', './assets/img/товар 8 (1).png', 1, NULL, NULL, 1, NULL),
(4, 'Горшок суккулент', '90', 'Этот горшочек с растением, характеризуется наличием специальных тканей для запаса воды.', './assets/img/товар 7.png', 1, NULL, NULL, 1, NULL),
(5, 'Декор весны', '90', 'Декоративные цветы могут использоваться для украшения интерьера, создания букетов, оформления свадеб и других торжественных мероприятий.', './assets/img/image 6.png', 1, NULL, NULL, 1, NULL),
(6, 'Декор лета', '90', 'Декоративные цветы могут использоваться для украшения интерьера, создания букетов, оформления свадеб и других торжественных мероприятий.', './assets/img/image 7.png', 1, NULL, NULL, 1, NULL),
(7, 'Декор зимы', '90', './assets/img/image 7.png', '', 1, NULL, NULL, 1, NULL),
(8, 'Жёлтые Пионы', '90', 'Красивые цветы с золотисто- или медно-желтыми цветками диаметром 5-10 см.', './assets/img/image 3.png', 1, NULL, NULL, 1, NULL),
(9, 'Фиолетовые Пионы', '90', 'Фиолетовые пионы символизируют молодость, женственность и защиту от негативной энергии.', './assets/img/image 4.png', 1, NULL, NULL, 1, NULL),
(10, 'Тюльпаны', '90', 'Изящные цветы, символизирующие процветание и наступление весны. Они доступны во множестве разнообразных цветов и оттенков.', './assets/img/image 4.png', 1, NULL, NULL, 1, NULL),
(11, 'Розы', '90', 'Один из самых популярных цветов в мире, который символизирует любовь, красоту и страсть.', './assets/img/1656064121_30-mykaleidoscope-ru-p-bolshoi-buket-rozovikh-roz-krasivo-foto-32 1.png', 1, NULL, NULL, 1, NULL),
(12, 'Декор осени', '90', 'Декоративные цветы могут использоваться для украшения интерьера, создания букетов, оформления свадеб и других торжественных мероприятий.', './assets/img/image 9.png', 1, NULL, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products_orders`
--

CREATE TABLE `products_orders` (
  `id` bigint UNSIGNED NOT NULL,
  `id_order` bigint UNSIGNED NOT NULL,
  `id_product` bigint UNSIGNED NOT NULL,
  `count` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'kirik34564@mail.ru', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
