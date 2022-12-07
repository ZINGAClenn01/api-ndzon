-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mercredi. 9 novembre. 2022 à 21:55
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ndzon`
--
CREATE DATABASE ndzon;

USE ndzon

CREATE USER 'clenn'@'localhost' IDENTIFIED BY 'admin';

SELECT User, Host FROM mysql.user;

-- --------------------------------------------------------

--
-- Structure de la table `quartier`
--

CREATE TABLE `quartiers` (
  `id_quartier` int(11) NOT NULL,
  `quartier` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `quartiers`
  ADD PRIMARY KEY (`id_quartier`),
  ADD UNIQUE KEY `quartier` (`quartier`);

ALTER TABLE `quartiers`
  MODIFY `id_quartier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Déchargement des données de la table `quartiers`
--

INSERT INTO `quartiers` (`id_quartier`, `quartier`) VALUES
(2, 'Ntchengue'),
(3, 'Lycée'),
(1, 'Banco'),
(4, 'Forasol');


-- --------------------------------------------------------


--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id_categorie` int(11) NOT NULL,
  `categorie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_categorie`),
  ADD UNIQUE KEY `categorie` (`categorie`);

ALTER TABLE `categories`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Déchargement des données de la table `*categories`
--

INSERT INTO `categories` (`id_categorie`, `categorie`) VALUES
(2, 'Villa'),
(3, 'Chambre'),
(1, 'Duplexe'),
(4, 'Appartement');




CREATE TABLE `proprietaires` (
  `id_proprietaire` int(11) NOT NULL,
  `proprietaire` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER 
TABLE `proprietaires`
  ADD PRIMARY KEY (`id_proprietaire`),
  ADD UNIQUE KEY `proprietaire` (`proprietaire`);

ALTER TABLE `proprietaires`
  MODIFY `id_proprietaire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Déchargement des données de la table `*categories`
--



--
-- Structure de la table `maisons`
--


CREATE TABLE `maisons` (
  `id_maison` int(11) NOT NULL,
  `id_categorie` int(9) NOT NULL,
  `id_quartier` int(9) NOT NULL
  `id_proprietaire` int(9) NOT NULL

  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `maisons`
  ADD PRIMARY KEY (`id_maison`),
  ADD KEY `id_categorie` (`id_categorie`),
  ADD KEY `id_quartier` (`id_quartier`);
  ADD KEY `id_proprietaire` (`id_proprietaire`);

ALTER TABLE `maisons`
  MODIFY `id_maison` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `maisons`
  ADD CONSTRAINT `maisons_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categories` (`id_categorie`) ON DELETE CASCADE ON UPDATE CASCADE;
  ADD CONSTRAINT `maisons_ibfk_2` FOREIGN KEY (`id_quartier`) REFERENCES `quartiers` (`id_quartier`) ON DELETE CASCADE ON UPDATE CASCADE;
  ADD CONSTRAINT `maisons_ibfk_3` FOREIGN KEY (`id_proprietaire`) REFERENCES `proprietaires` (`id_proprietaire`) ON DELETE CASCADE ON UPDATE CASCADE;
-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

