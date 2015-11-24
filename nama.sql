-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 23 Nov 2015 pada 15.58
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
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbkomunikasi`
--

INSERT INTO `tbkomunikasi` (`id_kom`, `tipe`, `id_materi`, `id_anggota`, `judul`, `waktu`, `isi`, `status`, `balasan`) VALUES
(9, 2, 10, 2, '', 1447228558, 'fredrik ', 0, ''),
(11, 2, 5, 2, '', 1447229983, 'jkfdlsjf\r\n', 0, ''),
(19, 2, 7, 6, '', 1447230998, 'syaaaalallalalala', 0, ''),
(20, 2, 7, 6, '', 1447231003, 'dudduuddududu', 0, ''),
(21, 2, 9, 2, '', 1447476850, 'dksjfkldsf\r\n', 0, ''),
(22, 2, 9, 2, '', 1447476859, 'kjdksfjkd', 0, ''),
(23, 2, 9, 2, '', 1447476939, '<blockquote>\r\n			Membalasa komentar 0<p>dksjfkldsf\r\n</p></blockquote>', 0, ''),
(28, 2, 6, 2, '', 1447477744, 'gaperta anaknya bandit\r\n', 0, ''),
(29, 2, 6, 2, '', 1447477803, 'gaperta anaknya bandit\r\n', 0, ''),
(30, 2, 6, 2, '', 1447477823, 'gaperta anaknya bandit\r\n', 0, ''),
(35, 2, 5, 4, '', 1447481945, '<blockquote>\r\n			Membalas komentar 0<p>jkfdlsjf\r\n</p></blockquote>\r\n_syalalalal_\r\n', 0, ''),
(36, 2, 5, 4, '', 1447482007, '<blockquote>\r\n			Membalas komentar 0<p>jkfdlsjf\r\n</p></blockquote>\r\n_syalalalal_\r\n', 0, ''),
(37, 2, 5, 4, '', 1447482074, '<blockquote>\r\n			Membalas komentar 0<p>jkfdlsjf\r\n</p></blockquote>\r\ngakmau', 0, ''),
(41, 1, 0, 4, '', 1447489514, ';lkdf', 0, ''),
(42, 1, 0, 4, '', 1447489515, '', 0, ''),
(43, 1, 0, 4, '', 1447489519, '', 0, ''),
(44, 1, 0, 4, '', 1447489612, 'turnip', 0, ''),
(45, 1, 0, 4, '', 1447489623, '', 0, ''),
(46, 0, 33, 4, '', 1447491035, 'balahldhfjdshfjhdsjaf', 0, ''),
(47, 0, 33, 4, '', 1447491043, '<blockquote>\r\n			Membalas komentar <p>miduk sejenis plankton</p></blockquote>	\r\njdklfkl', 0, ''),
(48, 0, 33, 4, '', 1447491088, 'bukan, dia sejenis amuba', 0, ''),
(49, 0, 40, 4, 'APA MASALAHNYA', 1447491591, 'GAK TAU APA SALAHNYA', 0, ''),
(50, 0, 40, 4, '', 1447491882, '<blockquote>\r\n			Membalas komentar fredrik turnips<p>coba aja</p></blockquote>\r\nmiduk miduk', 0, ''),
(51, 0, 33, 1, 'vkjekj', 1447599759, 'kkdfj', 0, ''),
(53, 2, 10, 0, '', 1447651486, 'ada tutorialnya gak ?', 0, ''),
(54, 2, 6, 0, '', 1447651631, 'lalala', 0, ''),
(55, 2, 6, 0, '', 1447651695, 'lalala', 0, ''),
(56, 2, 6, 0, '', 1447651812, 'coba aja', 0, ''),
(57, 2, 6, 0, '', 1447651825, 'wldk', 0, ''),
(60, 2, 6, 0, '', 1447651989, 'syalalal', 0, ''),
(61, 2, 6, 1, '', 1447660902, 'pening', 0, ''),
(62, 2, 0, 0, '', 1447663144, ':(', 0, ''),
(64, 2, 6, 1, '', 1447663284, 'Happy', 0, ''),
(66, 0, 34, 1, '', 1447663385, 'kenapa ?', 0, ''),
(70, 1, 0, 1, '', 1447664822, 'jkljdaskfjkd', 0, ''),
(71, 0, 0, 1, 'salalh', 1447664829, 'lkjsdfj', 0, ''),
(72, 0, 0, 1, '', 1447664832, '', 0, ''),
(75, 0, 34, 1, '', 1447666229, '<blockquote>\r\n			Membalas komentar fredrik turnips<p>miduk sejenis plankton</p></blockquote>kefjsdj', 0, ''),
(76, 1, 0, 1, 'miduk', 1447666702, 'kdsjfkjdfjkdsjf', 2, ''),
(77, 0, 0, 1, 'aneh', 1447666716, 'nggak ngerti', 0, ''),
(78, 0, 0, 1, 'aneh', 1447666716, 'nggak ngerti', 0, ''),
(79, 0, 40, 1, 'haduh', 1447666821, 'flkdjsfk', 0, ''),
(80, 0, 40, 1, 'ffff', 1447666834, 'kdjfkdsfk', 0, ''),
(81, 0, 40, 1, 'kdkdk', 1447666843, 'ffffffffffffff', 0, ''),
(82, 0, 76, 1, 'maykel', 1447666937, 'maykel', 0, ''),
(83, 2, 6, 0, '', 1447681607, 'kenapa ?', 0, ''),
(84, 2, 5, 4, '', 1447681936, 'a[as', 0, ''),
(85, 1, 0, 4, 'pening', 1447682258, 'kajsdfkjdfkjkf', 0, ''),
(86, 2, 12, 4, '', 1447684129, '', 0, ''),
(90, 1, 0, 0, 'judf', 1447693175, 'kdjf', 0, ''),
(91, 0, 85, 0, 'baru', 1447726361, 'kdjfk', 0, ''),
(92, 1, 0, 0, 'salah aja..', 1448265977, 'idjfdksf', 0, ''),
(93, 1, 0, 0, 'apa saja pengaruhnya >', 1448266037, 'aldkfsddf', 0, ''),
(94, 0, 76, 0, '', 1448266342, 'jkewj', 0, ''),
(95, 0, 76, 0, 'dsfadsg', 1448266452, 'asfga', 0, ''),
(96, 0, 76, 0, 'dsfadsg', 1448266543, 'asfga', 0, ''),
(97, 0, 76, 0, 'kjfasd', 1448266585, 'aslkdfgjka', 0, '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbmateri`
--

CREATE TABLE IF NOT EXISTS `tbmateri` (
  `id` int(11) NOT NULL,
  `judul` varchar(20) NOT NULL,
  `materi` varchar(20) NOT NULL,
  `video` varchar(50) NOT NULL,
  `waktu` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbmateri`
--

INSERT INTO `tbmateri` (`id`, `judul`, `materi`, `video`, `waktu`) VALUES
(1, 'BAB 1', 'BAB I.docx', '', 0),
(2, '', '', 'Raditya Dika ~ Joget Shuffel - YouTube.flv', 0),
(3, 'JURNAL MIKROKOMPUTER', 'Diktat Mikrokomputer', '', 0),
(4, 'virus', '', 'port-powerpoint-template.pot', 0),
(5, 'coba', '11737039.pdf', '', 1447131479),
(6, 'materi', '09E02904.pdf', '', 1447133968),
(7, 'lalalalala', 'bsmodsim09.pdf', '', 1447134220),
(8, 'lalalalala', 'bsmodsim09.pdf', '', 1447134269),
(9, 'lalalalala', 'bsmodsim09.pdf', '', 1447134588),
(10, 'lalalalala', 'bsmodsim09.pdf', '', 1447134711),
(11, 'lalalalala', 'bsmodsim09.pdf', '', 1447134749),
(12, 'lalalalala', 'bsmodsim09.pdf', '', 1447135870),
(13, 'logo', '', 'Logo-IBBI.png', 1447474251),
(14, 'antrian', 'ro2-3ea11-kel-3-antr', '', 1447474280),
(15, 'juddul', '', 'PRESENTASI JUNI TL.ppt', 1447654312),
(16, 'judul2', '', 'TEMPLATE PRESENTASI SITE MEDAN yukhi.ppt', 1447654548);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbpengguna`
--

CREATE TABLE IF NOT EXISTS `tbpengguna` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  `status` enum('user','Admin') NOT NULL,
  `nama_lengkap` varchar(30) NOT NULL,
  `e_mail` varchar(30) NOT NULL,
  `alamat` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tbpengguna`
--

INSERT INTO `tbpengguna` (`id`, `username`, `password`, `status`, `nama_lengkap`, `e_mail`, `alamat`) VALUES
(1, 'Admin', 'Admin', 'Admin', '0', '0', '0'),
(2, 'user', 'user', 'user', '0', '0', '0'),
(4, 'fredrik', 'pedik', 'user', 'fredrik turnips', 'pedik_tunip@gmail.com', 'medan, gaperta'),
(5, 'harry_1', 'harry', 'user', 'harry hidayat', 'harry_hidayat1@gmail.com', 'sei mencirim'),
(6, 'fatwa_lina', 'fatwawa', 'user', 'fatwa maulina', 'fatwa_maulina@gmail.com', 'medan'),
(7, 'nina_2', 'nina2', 'user', 'nina tamam', 'nina_tamam2@gmail.com', 'binjai'),
(8, 'julia_3', 'julia3', 'user', 'julia angela', 'julia_mariana3@gmail.com', 'jakarta'),
(9, 'robet_5', 'robet5', 'user', 'robet pulungan', 'robet_5@yahoo.com', 'pekan baru'),
(10, 'berry_6', 'berry6', 'user', 'beery lubis', 'berry_lubis6@yahoo.com', 'riau'),
(11, 'nazirul', 'nazirul7', 'user', 'ahmad richman', 'ahmad_nazirul@gmail.com', 'medan amaliun'),
(12, 'chriss_8', 'chriss8', 'user', 'chrisstanto', 'chriss_8@gmail.com', 'medan, gaperta'),
(13, 'chanx', '123', 'user', 'ahmadnazirul', 'chanx@live.com', 'haskaj'),
(14, 'devi', 'ddvi6', 'user', 'Devi siregar', 'devi.tri98@yahoo.com', 'Medan, binjai'),
(15, 'chriss_tanto', 'chris', 'user', 'chrisstanto', 'Chris_tanto44@ymail', 'gaperta'),
(16, 'devi_2', '123', 'user', 'devi', 'devi.tri98@gmail.com', 'medan'),
(17, 'fad ', 'user', 'user', '', 'user', ''),
(18, 'vie', '123', 'user', 'devi', 'kdjkfj', 'medan'),
(19, 'WINDA_D', 'WINDA', 'user', 'WINDA ALYAH', 'WINDA_LALA@GMAIL.COM', 'ACEH'),
(20, 'DSFAD', '123', 'user', 'DSKJFKDJ', 'KDJFK', 'JKDKJDKF'),
(21, 'linda', '123', 'user', 'kdjf', 'nbbnm@gfgfgh.com', 'medan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbkomunikasi`
--
ALTER TABLE `tbkomunikasi`
  ADD PRIMARY KEY (`id_kom`);

--
-- Indexes for table `tbmateri`
--
ALTER TABLE `tbmateri`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbpengguna`
--
ALTER TABLE `tbpengguna`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbkomunikasi`
--
ALTER TABLE `tbkomunikasi`
  MODIFY `id_kom` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=98;
--
-- AUTO_INCREMENT for table `tbmateri`
--
ALTER TABLE `tbmateri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `tbpengguna`
--
ALTER TABLE `tbpengguna`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
