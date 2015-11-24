-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 24 Nov 2015 pada 13.54
-- Versi Server: 5.6.26
-- PHP Version: 5.5.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nama`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbkomunikasi`
--

CREATE TABLE IF NOT EXISTS `tbkomunikasi` (
  `id_kom` int(11) NOT NULL,
  `tipe` int(1) NOT NULL COMMENT '0=reply, 1=forum, 2=komentar_materi',
  `id_materi` int(11) NOT NULL,
  `id_anggota` int(11) NOT NULL,
  `judul` varchar(64) NOT NULL,
  `waktu` int(11) NOT NULL,
  `isi` text NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0' COMMENT '0=terbuka, 1=tertutup, 2=Dihapus',
  `balasan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbkomunikasi`
--
ALTER TABLE `tbkomunikasi`
  ADD PRIMARY KEY (`id_kom`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbkomunikasi`
--
ALTER TABLE `tbkomunikasi`
  MODIFY `id_kom` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
