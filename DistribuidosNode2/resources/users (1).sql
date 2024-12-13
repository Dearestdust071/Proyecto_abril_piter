-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: db:3306
-- Tiempo de generación: 13-12-2024 a las 16:56:56
-- Versión del servidor: 8.0.40
-- Versión de PHP: 8.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Sist_distribuidos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `last_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `age` int NOT NULL,
  `gender` varchar(15) NOT NULL,
  `status` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `email`, `password`, `age`, `gender`, `status`) VALUES
(1, 'Jorge', 'Exidoro', 'Jorge.Exidoro@gmail.com', '123123123', 21, 'Hombre', 1),
(2, 'John', 'Doe', 'john.doe@example.com', 'securepassword123', 30, 'male', 0),
(25, 'Jorge', 'Exidoro', 'Jorge.Exidoro@gmail.com', '123123123', 21, 'Hombre', 1),
(26, 'John', 'Doe', 'john.doe@example.com', 'securepassword123', 30, 'male', 0),
(28, 'John', 'Doe', 'dearestdust071@gmail.com', 'securepassword123', 30, 'male', 1),
(29, 'John', 'Doe', 'dearestdust071@gmail.com', 'securepassword123', 30, 'male', 1),
(30, 'Dios', 'Jerusalen', 'dearestdust071@gmail.com', '123123123', 21, 'hombre', 0),
(31, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', 'asdfasdfasdf', 20, 'Hombre', 0),
(32, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', 'asdfasdfasdf', 12, 'Hombre', 0),
(33, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', 'asdfasfd', 44, 'manati', 0),
(34, 'NoJorge', 'Exidoro ', 'dearestdust081@gmail.com', 'kindred123123', 21, 'Hombre', 0),
(35, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', '123123123', 20, 'ManatiSupremo', 0),
(36, 'GATO', '9x9x9', 'dearestdust071@gmail.com', 'gato123123', 9, 'MACHO', 0),
(37, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', 'Kindred123$', 20, 'HOMBRE', 0),
(38, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', 'Kindred123$', 20, 'HOMBRE', 0),
(39, 'YANOSE', 'TAMPOCOSE', 'dearestdust071@gmail.com', 'Kindred123$', 200, 'NIESTOMENOSXD', 0),
(40, 'Maestra', 'Abril', 'abril.gonzalez@itses.edu.mx', 'kindred123A', 20, 'Mujer', 0),
(41, 'Aaa', 'Abril', 'abril.gonzalez@itses.edu.mx', 'kindred123A', 20, 'Mujer', 0),
(42, 'Aaa', 'Abril', 'abril.gonzalez@itses.edu.mx', 'kindred123A', 20, 'Mujer', 0),
(43, 'Jorge', 'Abril', 'abril.gonzalez@itses.edu.mx', 'kindred123A', 20, 'Mujer', 0),
(44, 'Jorge', 'Exidoro Lopez', 'abril.gonzalez@itses.edu.mx', 'Kindred123', 10, 'manati', 0),
(45, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', 'Exidoro123', 20, 'Hombre', 0),
(46, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', 'Exidoro123', 20, 'Hombre', 0),
(47, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', 'Exidoro123', 20, 'Hombre', 0),
(48, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', '123Kindred', 12, 'Hombre', 0),
(49, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', '123123kindredK', 20, 'Hombre', 0),
(50, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', '123123kindredK', 20, 'Hombre', 0),
(51, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', '123123kindredK', 20, 'Hombre', 0),
(52, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', '123Kindred', 20, 'Hombre', 0),
(53, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', 'Kinderd123', 20, 'Hombre', 0),
(54, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', 'Kinderd123', 20, 'Hombre', 0),
(55, 'Jorge', 'Exidoro Lopez', 'dearestdust071@gmail.com', 'Kindred123', 20, 'Hombre', 0),
(56, 'Roman', 'Tapia', 'romantapia456@gmail.com', 'Kindred123', 25, 'Hombre', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
