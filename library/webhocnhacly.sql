-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 24, 2024 lúc 04:06 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `webhocnhacly`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khoahoc`
--

CREATE TABLE `khoahoc` (
  `ma` int(11) NOT NULL,
  `loai` varchar(20) NOT NULL,
  `capdo` varchar(20) NOT NULL,
  `cauhoi` varchar(200) NOT NULL,
  `dapan` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `khoahoc`
--

INSERT INTO `khoahoc` (`ma`, `loai`, `capdo`, `cauhoi`, `dapan`) VALUES
(89, 'chord', 'basic', '../library/image/khoahoc/chord/basic/1.png', '1'),
(90, 'chord', 'basic', '../library/image/khoahoc/chord/basic/2.png', '2'),
(91, 'chord', 'basic', '../library/image/khoahoc/chord/basic/3.png', '2'),
(92, 'chord', 'basic', '../library/image/khoahoc/chord/basic/4.png', '1'),
(93, 'chord', 'basic', '../library/image/khoahoc/chord/basic/5.png', '1'),
(94, 'chord', 'basic', '../library/image/khoahoc/chord/basic/6.png', '2'),
(95, 'chord', 'basic', '../library/image/khoahoc/chord/basic/7.png', '1'),
(96, 'note', 'medium', '../library/image/khoahoc/note/medium/1.png', '7'),
(97, 'note', 'medium', '../library/image/khoahoc/note/medium/2.png', '4'),
(98, 'note', 'medium', '../library/image/khoahoc/note/medium/3.png', '3'),
(99, 'note', 'medium', '../library/image/khoahoc/note/medium/4.png', '6'),
(100, 'note', 'medium', '../library/image/khoahoc/note/medium/5.png', '2'),
(101, 'note', 'medium', '../library/image/khoahoc/note/medium/6.png', '5'),
(102, 'note', 'medium', '../library/image/khoahoc/note/medium/7.png', '1'),
(103, 'note', 'medium', '../library/image/khoahoc/note/medium/1.png', '7'),
(104, 'note', 'medium', '../library/image/khoahoc/note/medium/2.png', '4'),
(105, 'note', 'medium', '../library/image/khoahoc/note/medium/3.png', '3'),
(106, 'note', 'medium', '../library/image/khoahoc/note/medium/4.png', '6'),
(107, 'note', 'medium', '../library/image/khoahoc/note/medium/5.png', '2'),
(108, 'note', 'medium', '../library/image/khoahoc/note/medium/6.png', '5'),
(109, 'note', 'medium', '../library/image/khoahoc/note/medium/7.png', '1'),
(110, 'note', 'medium', '../library/image/khoahoc/note/medium/9.png', '7'),
(111, 'note', 'medium', '../library/image/khoahoc/note/medium/10.png', '6'),
(112, 'note', 'basic', '../library/image/khoahoc/note/basic/1.png', '1'),
(113, 'note', 'basic', '../library/image/khoahoc/note/basic/2.png', '3'),
(114, 'note', 'basic', '../library/image/khoahoc/note/basic/3.png', '6'),
(115, 'note', 'basic', '../library/image/khoahoc/note/basic/4.png', '2'),
(116, 'note', 'basic', '../library/image/khoahoc/note/basic/5.png', '7'),
(117, 'note', 'basic', '../library/image/khoahoc/note/basic/6.png', '4'),
(118, 'note', 'basic', '../library/image/khoahoc/note/basic/7.png', '5'),
(121, '1', '1', '1', '1'),
(122, '1', '1', '1', '1'),
(123, '123', '1', '123', '12'),
(124, '2', '1', '3', '2'),
(125, 'z', 'z', 'z', 'z'),
(126, 'z', 'z', 'z', 'z'),
(127, 'z', 'z1', 'z', 'z'),
(134, 'h', 'h', 'h', 'h'),
(135, 'h', 'h', 'h', 'h'),
(136, 'h', 'h', 'h', 'h'),
(137, 'asd', 'ggg', 'gg', 'ggg'),
(138, 'asd', 'ggg', 'gg', 'ggg'),
(139, 'asd', 'ggg', 'gg', 'ggg'),
(140, 'asd', 'ggg', 'gg', 'ggg'),
(141, 'asd', 'ggg', 'gg', 'ggg'),
(142, 'u', 'u', 'u', 'u'),
(145, 'tien', '1linh', 'linh', '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `ma` int(200) NOT NULL,
  `ten` varchar(200) NOT NULL,
  `matkhau` varchar(9999) NOT NULL,
  `tiendo` varchar(10) NOT NULL DEFAULT '1,0,0',
  `diem` int(20) NOT NULL DEFAULT 0,
  `quyen` int(10) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `nguoidung`
--

INSERT INTO `nguoidung` (`ma`, `ten`, `matkhau`, `tiendo`, `diem`, `quyen`) VALUES
(20, 'lequachtien1234@gmail.com', '$2y$10$b1d/J83ysSRXGlYUhCoJMOIrSMFsQzKAp2vqtAEez66cnhQHtAJIW', '1,0,0', 0, 1),
(27, 'admin2@gmail.com', '$2y$10$4e/AhLj8pEp4.rMKo6ds2OXQbY0nW6RfQ5BLba2ybmhmobq1m8Z9C', '1,1,0', 0, 0),
(29, 'admin@gmail.com', '$2y$10$cgTClIlOTND4knkB1PwAB.t1pMGIvfsVQhx/OFEnwRlyCCwgWsfWW', '1,0,0', 0, 0),
(30, 'linh@gmail.com', '$2y$10$aneCfYJBnC2tGOnEcP/p8uSqjPhrXT.m6jly.9dHWm38mJGRpWx5i', '1,1,1', 100, 0),
(32, 'a@gmail.com', '$2y$10$iW8eawpC0iFuLkDdshxS5OGIjZRn6.nn4n5liOGjeQKPaw3sCkYm.', '1,0,0', 0, 0),
(33, 'huyen@gmail.com', '$2y$10$lge.myI/j6Vp3O4cX55jqO4J7GiMIpicKA.YixECzu4K0Iyqopktu', '1,0,0', 0, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhaccu`
--

CREATE TABLE `nhaccu` (
  `ma` int(11) NOT NULL,
  `ten` varchar(200) NOT NULL,
  `thongtin` varchar(200) NOT NULL,
  `hinhanh` varchar(200) NOT NULL,
  `duongdan` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `nhaccu`
--

INSERT INTO `nhaccu` (`ma`, `ten`, `thongtin`, `hinhanh`, `duongdan`) VALUES
(1, 'Guitar', 'Chơi guitar ảo và hình dung nốt, hợp âm và âm giai.', '../library/image/nhaccu/guitar.jpg', '../public/guitar.php'),
(2, 'Piano', 'Chơi piano ảo và hình dung nốt, hợp âm và âm giai.', '../library/image/nhaccu/piano.jpg', '../public/piano.php'),
(3, 'Trống', 'Chơi trống ảo và thực hành tập chơi các nhịp trống.', '../library/image/nhaccu/drums.jpg', '../public/drums.php'),
(4, 'Tìm kiếm quãng', 'Tìm kiếm quãng trên các nhạc cụ và khuông nhạc.', '../library/image/nhaccu/interval-finder.jpg', '../public/interval-finder.php'),
(5, 'Trống điện tử', 'Sáng tạo và nghe thử giai điệu trống của bạn.', '../library/image/nhaccu/drum-machine.jpg', '../public/drum-machine.php'),
(7, 'Ứng dụng Đệm Hợp âm', 'Tạo ra các chùm hợp âm và nhạc nền.', '../library/image/nhaccu/chord-player.jpg', '../public/chord_player.php'),
(8, 'Tìm kiếm hợp âm', 'Tìm kiếm hợp âm trên các nhạc cụ và khuông nhạc.', '../library/image/nhaccu/chords_find.jpg', '../public/chords_find.php'),
(9, 'Tìm kiếm hợp âm', 'Tìm kiếm hợp âm trên các nhạc cụ và khuông nhạc.', '../library/image/nhaccu/chords_find.jpg', '../public/chords_find.php'),
(10, 'Tìm kiếm hợp âm', 'Tìm kiếm hợp âm trên các nhạc cụ và khuông nhạc.', '../library/image/nhaccu/chords_find.jpg', '../public/chords_find.php');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `khoahoc`
--
ALTER TABLE `khoahoc`
  ADD PRIMARY KEY (`ma`);

--
-- Chỉ mục cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  ADD PRIMARY KEY (`ma`);

--
-- Chỉ mục cho bảng `nhaccu`
--
ALTER TABLE `nhaccu`
  ADD PRIMARY KEY (`ma`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `khoahoc`
--
ALTER TABLE `khoahoc`
  MODIFY `ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `ma` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT cho bảng `nhaccu`
--
ALTER TABLE `nhaccu`
  MODIFY `ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
