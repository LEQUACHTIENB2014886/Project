-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 04, 2024 lúc 04:41 PM
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
(118, 'note', 'basic', '../library/image/khoahoc/note/basic/7.png', '5');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nguoidung`
--

CREATE TABLE `nguoidung` (
  `ma` int(200) NOT NULL,
  `ten` varchar(200) NOT NULL,
  `matkhau` varchar(9999) NOT NULL,
  `anhdaidien` varchar(200) NOT NULL,
  `tiendo` varchar(10) NOT NULL DEFAULT '1,0,0',
  `quyen` int(10) DEFAULT 1,
  `reset_token` varchar(999) NOT NULL,
  `reset_expiry` varchar(999) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `nguoidung`
--

INSERT INTO `nguoidung` (`ma`, `ten`, `matkhau`, `anhdaidien`, `tiendo`, `quyen`, `reset_token`, `reset_expiry`) VALUES
(65, 'admin@gmail.com', '$2y$10$ADRKzKDqYNrV2iFPpUtyuu6IXxiE8vTw5FO149emgnM/YChghHRea', '', '1,0,0', 1, '005ea6fff2131efd865f34fbf48331ee1d1e39fc86a46b08b4195a3328c3b86bd7de5bba930091413ce828675d05ba9d3cd8', '2024-12-04 16:48:21'),
(66, 'asd@gmail.com', '$2y$10$gD9RjV6LghueXciLM0gJ0evOY1/7Z0.vMA3qPQHqseDqi6a6lGXFa', '', '1,0,0', 1, '', ''),
(67, 'lequachtien123123@gmail.com', '$2y$10$IIOHaDsI4UVB75y/UMfYa.45s9o6gyZQgFKjJDo.1iir3vu5EXqRu', '', '1,0,0', 1, '', ''),
(68, '123123@gmail.com', '$2y$10$vQuIJN6qTFOfbv365BXxbeKxcqSeC/QpTu5R.YxemY7xy.zuD90Vy', '', '1,0,0', 1, '', ''),
(69, '123@gmail.com', '$2y$10$drYQv.eBvZxyNhQKHqecGeAxhtPqi4852vwUUXsRU5A82WfJXqgZG', '', '1,0,0', 1, '', ''),
(70, 'a@gmail.com', '$2y$10$3x4CDNQbzWylYhfq46Ym2O/FkHpl/OGTxiiD69LXUOTudurg32a7W', '', '1,0,0', 1, '', ''),
(71, 'lequachtien123@gmail.com', '$2y$10$9/0gCxhfFQE2Fo6rykblY.pI4Jvy0J5qPHSvdPdi7mgyUajkh1yt.', '', '1,0,0', 1, 'c184ab3186bbcecc5dc618bdd8154e31d6137a6b6e705423d21588f56bf32b34b2e6c9e1992f1cb552f91e6ed44a5ff4f68d', '2024-12-04 16:52:00');

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
(12, 'Giấy chép nhạc', 'Một bản thảo định dạng PDF phù hợp in ấn giấy A4', '../library/image/nhaccu/staff-paper.jpg', '../public/music-paper.php'),
(13, 'Máy đếm nhịp', 'Sử dụng luyện tập để đếm nhịp', '../library/image/nhaccu/metronome.jpg', '../public/metronome.php');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `phanhoi`
--

CREATE TABLE `phanhoi` (
  `ma` int(11) NOT NULL,
  `nguoiphanhoi` varchar(255) NOT NULL,
  `noidung` longtext NOT NULL,
  `thoigian` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `phanhoi`
--

INSERT INTO `phanhoi` (`ma`, `nguoiphanhoi`, `noidung`, `thoigian`) VALUES
(38, 'lequachtien123@gmail.com', '123', '2024-12-04 15:59:55');

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
-- Chỉ mục cho bảng `phanhoi`
--
ALTER TABLE `phanhoi`
  ADD PRIMARY KEY (`ma`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `khoahoc`
--
ALTER TABLE `khoahoc`
  MODIFY `ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT cho bảng `nguoidung`
--
ALTER TABLE `nguoidung`
  MODIFY `ma` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT cho bảng `nhaccu`
--
ALTER TABLE `nhaccu`
  MODIFY `ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT cho bảng `phanhoi`
--
ALTER TABLE `phanhoi`
  MODIFY `ma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
