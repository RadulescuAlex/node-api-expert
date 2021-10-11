-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gazdă: 127.0.0.1
-- Timp de generare: oct. 11, 2021 la 06:15 PM
-- Versiune server: 10.4.20-MariaDB
-- Versiune PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Bază de date: `expert_info`
--

-- --------------------------------------------------------

--
-- Structură tabel pentru tabel `words`
--

CREATE TABLE IF NOT EXISTS `words` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `domain` text NOT NULL,
  `word` text NOT NULL,
  `explication` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Eliminarea datelor din tabel `words`
--

INSERT INTO `words` (`id`, `domain`, `word`, `explication`) VALUES
(1, 'drept', 'Drept subiectiv', 'Facultate sau prerogativa recunoscuta de lege persoanei, subiect activ al raportului juridic, de a pretinde subiectului (sau subiectelor) pasive sa savarseasca o anumita actiune sau sa se abtina de la savarsirea unei actiuni, putand recurge, la nevoie, la forta de constrangere a statului pentru asigurarea infaptuirii conduitei pretinse');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
