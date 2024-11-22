-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 22, 2024 lúc 05:53 PM
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
-- Cấu trúc bảng cho bảng `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `course_type` varchar(20) NOT NULL,
  `course_level` varchar(20) NOT NULL,
  `course_question` varchar(200) NOT NULL,
  `course_answer` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `courses`
--

INSERT INTO `courses` (`id`, `course_type`, `course_level`, `course_question`, `course_answer`) VALUES
(89, 'chord', 'basic', '../library/image/courses/chord/basic/1.png', '1'),
(90, 'chord', 'basic', '../library/image/courses/chord/basic/2.png', '2'),
(91, 'chord', 'basic', '../library/image/courses/chord/basic/3.png', '2'),
(92, 'chord', 'basic', '../library/image/courses/chord/basic/4.png', '1'),
(93, 'chord', 'basic', '../library/image/courses/chord/basic/5.png', '1'),
(94, 'chord', 'basic', '../library/image/courses/chord/basic/6.png', '2'),
(95, 'chord', 'basic', '../library/image/courses/chord/basic/7.png', '1'),
(96, 'note', 'medium', '../library/image/courses/note/medium/1.png', '7'),
(97, 'note', 'medium', '../library/image/courses/note/medium/2.png', '4'),
(98, 'note', 'medium', '../library/image/courses/note/medium/3.png', '3'),
(99, 'note', 'medium', '../library/image/courses/note/medium/4.png', '6'),
(100, 'note', 'medium', '../library/image/courses/note/medium/5.png', '2'),
(101, 'note', 'medium', '../library/image/courses/note/medium/6.png', '5'),
(102, 'note', 'medium', '../library/image/courses/note/medium/7.png', '1'),
(103, 'note', 'medium', '../library/image/courses/note/medium/1.png', '7'),
(104, 'note', 'medium', '../library/image/courses/note/medium/2.png', '4'),
(105, 'note', 'medium', '../library/image/courses/note/medium/3.png', '3'),
(106, 'note', 'medium', '../library/image/courses/note/medium/4.png', '6'),
(107, 'note', 'medium', '../library/image/courses/note/medium/5.png', '2'),
(108, 'note', 'medium', '../library/image/courses/note/medium/6.png', '5'),
(109, 'note', 'medium', '../library/image/courses/note/medium/7.png', '1'),
(110, 'note', 'medium', '../library/image/courses/note/medium/9.png', '7'),
(111, 'note', 'medium', '../library/image/courses/note/medium/10.png', '6'),
(112, 'note', 'basic', '../library/image/courses/note/basic/1.png', '1'),
(113, 'note', 'basic', '../library/image/courses/note/basic/2.png', '3'),
(114, 'note', 'basic', '../library/image/courses/note/basic/3.png', '6'),
(115, 'note', 'basic', '../library/image/courses/note/basic/4.png', '2'),
(116, 'note', 'basic', '../library/image/courses/note/basic/5.png', '7'),
(117, 'note', 'basic', '../library/image/courses/note/basic/6.png', '4'),
(118, 'note', 'basic', '../library/image/courses/note/basic/7.png', '5'),
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
(145, 'tien', '1', '1', '1'),
(146, 'ttt', 'ttt', 'ttt', 'ttt'),
(147, 'ttt', 'ttt', 'ttt', 'ttt');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `features`
--

CREATE TABLE `features` (
  `feature_id` int(11) NOT NULL,
  `feature_name` varchar(200) NOT NULL,
  `feature_note` varchar(200) NOT NULL,
  `feature_picture` varchar(200) NOT NULL,
  `feature_path` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `features`
--

INSERT INTO `features` (`feature_id`, `feature_name`, `feature_note`, `feature_picture`, `feature_path`) VALUES
(1, 'Guitar', 'Chơi guitar ảo và hình dung nốt, hợp âm và âm giai.', '../library/image/features/guitar.jpg', '../public/guitar.php'),
(2, '2', '2', '2', '2');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(9999) NOT NULL,
  `level` varchar(10) NOT NULL DEFAULT '1,0,0',
  `score` int(20) NOT NULL DEFAULT 0,
  `role` int(10) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `level`, `score`, `role`) VALUES
(20, 'lequachtien1234@gmail.com', '$2y$10$/JCidBYHVtlgo4O9x3z1q.3SawCSfxvqrRRN22lpGSOFtPIxarmKu', '1,0,0', 0, 1),
(27, 'admin2@gmail.com', '$2y$10$4e/AhLj8pEp4.rMKo6ds2OXQbY0nW6RfQ5BLba2ybmhmobq1m8Z9C', '1,1,0', 0, 0),
(29, 'admin@gmail.com', '$2y$10$cgTClIlOTND4knkB1PwAB.t1pMGIvfsVQhx/OFEnwRlyCCwgWsfWW', '1,0,0', 0, 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`feature_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT cho bảng `features`
--
ALTER TABLE `features`
  MODIFY `feature_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
