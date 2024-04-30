-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 29, 2024 lúc 06:53 PM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

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
-- Cấu trúc bảng cho bảng `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `course_level` varchar(20) NOT NULL,
  `course_answer` varchar(10) NOT NULL,
  `course_question` varchar(200) NOT NULL,
  `course_type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `courses`
--

INSERT INTO `courses` (`course_id`, `course_level`, `course_answer`, `course_question`, `course_type`) VALUES
(89, 'basic', '2', '../library/image/courses/chord/basic/1.png', 'chord'),
(90, 'basic', '2', '../library/image/courses/chord/basic/2.png', 'chord'),
(91, 'basic', '2', '../library/image/courses/chord/basic/3.png', 'chord'),
(92, 'basic', '1', '../library/image/courses/chord/basic/4.png', 'chord'),
(93, 'basic', '1', '../library/image/courses/chord/basic/5.png', 'chord'),
(94, 'basic', '2', '../library/image/courses/chord/basic/6.png', 'chord'),
(95, 'basic', '1', '../library/image/courses/chord/basic/7.png', 'chord'),
(96, 'medium', '7', '../library/image/courses/note/medium/1.png', 'note'),
(97, 'medium', '4', '../library/image/courses/note/medium/2.png', 'note'),
(98, 'medium', '3', '../library/image/courses/note/medium/3.png', 'note'),
(99, 'medium', '6', '../library/image/courses/note/medium/4.png', 'note'),
(100, 'medium', '2', '../library/image/courses/note/medium/5.png', 'note'),
(101, 'medium', '5', '../library/image/courses/note/medium/6.png', 'note'),
(102, 'medium', '1', '../library/image/courses/note/medium/7.png', 'note'),
(103, 'medium', '7', '../library/image/courses/note/medium/1.png', 'note'),
(104, 'medium', '4', '../library/image/courses/note/medium/2.png', 'note'),
(105, 'medium', '3', '../library/image/courses/note/medium/3.png', 'note'),
(106, 'medium', '6', '../library/image/courses/note/medium/4.png', 'note'),
(107, 'medium', '2', '../library/image/courses/note/medium/5.png', 'note'),
(108, 'medium', '5', '../library/image/courses/note/medium/6.png', 'note'),
(109, 'medium', '1', '../library/image/courses/note/medium/7.png', 'note'),
(110, 'medium', '7', '../library/image/courses/note/medium/9.png', 'note'),
(111, 'medium', '6', '../library/image/courses/note/medium/10.png', 'note'),
(112, 'basic', '1', '../library/image/courses/note/basic/1.png', 'note'),
(113, 'basic', '3', '../library/image/courses/note/basic/2.png', 'note'),
(114, 'basic', '6', '../library/image/courses/note/basic/3.png', 'note'),
(115, 'basic', '2', '../library/image/courses/note/basic/4.png', 'note'),
(116, 'basic', '7', '../library/image/courses/note/basic/5.png', 'note'),
(117, 'basic', '4', '../library/image/courses/note/basic/6.png', 'note'),
(118, 'basic', '5', '../library/image/courses/note/basic/7.png', 'note');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `tien_do` varchar(10) NOT NULL DEFAULT '1,0,0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `tien_do`) VALUES
(1, 'binh', 'binh', '1,0,0'),
(2, 'tien', '123', '1,0,0');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
