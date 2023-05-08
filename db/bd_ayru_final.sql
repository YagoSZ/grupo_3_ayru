-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.27-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para bd_ayru
CREATE DATABASE IF NOT EXISTS `bd_ayru` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `bd_ayru`;

-- Volcando estructura para tabla bd_ayru.available_locations
CREATE TABLE IF NOT EXISTS `available_locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_ayru.available_locations: ~17 rows (aproximadamente)
INSERT INTO `available_locations` (`id`, `location`) VALUES
	(1, 'Todo el pais'),
	(2, 'Buenos Aires'),
	(3, 'Entre Rios'),
	(4, 'Cordoba'),
	(5, 'Neuquen'),
	(6, 'Formosa'),
	(7, 'Chaco'),
	(8, 'Misiones'),
	(9, 'La Pampa'),
	(10, 'San Juan'),
	(11, 'San Luis'),
	(12, 'Mendoza'),
	(13, 'Salta'),
	(14, 'Tucuman'),
	(15, 'Santiago Del Estero'),
	(16, 'Jujuy'),
	(17, 'Catamarca'),
	(18, 'La Rioja'),
	(19, 'Corrientes'),
	(20, 'Santa Fe'),
	(21, 'Rio Negro'),
	(22, 'Chubut'),
	(23, 'Santa Cruz'),
	(24, 'Tierra Del Fuego');

-- Volcando estructura para tabla bd_ayru.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_ayru.category: ~2 rows (aproximadamente)
INSERT INTO `category` (`id`, `name`) VALUES
	(1, 'false'),
	(2, 'true');

-- Volcando estructura para tabla bd_ayru.category_products
CREATE TABLE IF NOT EXISTS `category_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_ayru.category_products: ~4 rows (aproximadamente)
INSERT INTO `category_products` (`id`, `name`) VALUES
	(1, 'Celulares'),
	(2, 'Televisores'),
	(3, 'Notebooks'),
	(4, 'Tabletas');

-- Volcando estructura para tabla bd_ayru.colors
CREATE TABLE IF NOT EXISTS `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_ayru.colors: ~3 rows (aproximadamente)
INSERT INTO `colors` (`id`, `color`) VALUES
	(1, 'Lila'),
	(2, 'Dorado'),
	(3, 'Verde');

-- Volcando estructura para tabla bd_ayru.disponibility
CREATE TABLE IF NOT EXISTS `disponibility` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stock` tinytext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_ayru.disponibility: ~2 rows (aproximadamente)
INSERT INTO `disponibility` (`id`, `stock`) VALUES
	(1, 'En stock'),
	(2, 'Sin stock');

-- Volcando estructura para tabla bd_ayru.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `disponibility_id` int(11) NOT NULL,
  `category_products_id` int(11) NOT NULL,
  `available_locations` text NOT NULL,
  `imagen_showcase2` varchar(255) DEFAULT '/img/default1.png',
  `imagen_showcase3` varchar(255) DEFAULT '/img/default1.png',
  PRIMARY KEY (`id`),
  KEY `fk_disponibility_id` (`disponibility_id`),
  KEY `fk_category_products_id` (`category_products_id`),
  CONSTRAINT `fk_category_products_id` FOREIGN KEY (`category_products_id`) REFERENCES `category_products` (`id`),
  CONSTRAINT `products_disponibility` FOREIGN KEY (`disponibility_id`) REFERENCES `disponibility` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_ayru.products: ~13 rows (aproximadamente)
INSERT INTO `products` (`id`, `name`, `price`, `image`, `description`, `disponibility_id`, `category_products_id`, `available_locations`, `imagen_showcase2`, `imagen_showcase3`) VALUES
	(5, 'Samsung S21 FE', 51000.00, '/img/s21fe-negro.jpg', 'el diseño del Samsung Galaxy S21 FE tenemos sensaciones encontradas. Lo positivo gusta mucho, aunque lo negativo tiene más peso de lo que nos gustaría. El S21 FE mantiene la línea de diseño de su hermano, el Galaxy S21. Es un diseño industrial no muy llamativo, pero con una parte trasera atractiva y un frontal bien aprovechado. Bajo el punto de vista de un servidor, es elegante, más aún en esta unidad de color negro que repele bastante bien las huellas. Detalles del producto: Triple Cámara trasera de 12 MP + 12 MP + 8 MP Cámara Frontal de 32 MP. Infinity-O Display de 6.4 FHD+ Dynamic AMOLED 2X HID 120Hz. Procesador Exynos 2100 | Octa-Core 2.9GHz,2.8GHz,2.2GHz. 4.500 mAh para mayor duración de la batería y 25W Super Fast charging', 2, 1, '1', '/img/s21fe-dorado.jpg', '/img/s21fe-lila.jpg'),
	(6, 'Samsung S22 ULTRA', 100000.00, '../img/s22blanco.png', 'Con un diseño de vanguardia, el celular Samsung Galaxy S22 Ultra es un teléfono único que ofrece una pantalla Dynamic AMOLED 2x con una resolución Quad HD+ sin Notch ni distracciones. Además, tiene 12GB de RAM y 256GB de almacenamiento. Desempeño: Su procesador Octa-Core y la memoria RAM de 12 GB te permitirán ejecutar aplicaciones y realizar múltiples tareas al mismo tiempo. Además, su sistema operativo Android es eficiente y fácil de usar.', 1, 1, '1', '/img/s22gris.jpg', '/img/s22naranja.jpg'),
	(7, 'Iphone 13 Pro', 100000.00, '/img/iphonePosta.png', 'Pantalla: Si la pantalla de los iPhone era buena, ahora, desde esta generación es mucho mejor. Contábamos con un panel OLED, pues en este modelo podremos disfrutar de una pantalla Super Retina XDR de 6,1 pulgadas. Y, no solo esto, sino que la tasa de refresco tiene una importante novedad, pues este smartphone de Apple llega con hasta 120 Hz con ProMotion. Dejará de contar con una tasa básica de 60 Hz, por lo que a partir de ahora se adaptará según las exigencias y lo que considere el propio sistema operativo. Además de que el brillo también se ha potenciado en esta generación. En cualquiera caso, estamos ante un iPhone 13 Pro que no solo será una gran opción para ver todo tipo de contenidos, ya sean en streaming o no, sino que será el modelo idóneo para jugar a todo tipo de videojuegos en alta resolución.', 1, 1, '1', '/img/iphone13pro-blanco.jpg', '/img/iphone13pro-negro.jpg'),
	(8, 'Notebook Bhangho Max L5', 187000.00, '/img/notebookBhanghoMaxL5.jpg', 'Notebook Banghó Max L5 i5 , la mejor relación entre productividad y presupuesto gracias al Procesador Intel Core i5 de 10ma generación y 8GB de RAM. Podrás trabajar en tu casa, estudio u oficina con una notebook de máxima potencia.', 2, 3, '1', '/img/lenovoCompu.png', '/img/lenovoGrande.png'),
	(9, 'Notebook HP OMEN', 200000.00, '/img/notebookHPomen.jpg', 'Con la pantalla WLED Full HD vas a poder disfrutar de 15,6 con una resolución de 1920 x 1080 píxeles podrás disfrutar de películas, videos y juegos o navegar en internet.', 1, 3, '1', '/img/LaptopVaciaOK.png', '/img/lenovoCompu.png'),
	(10, 'Notebook HP Pavilion', 250000.00, '/img/notebookHPomen.jpg', 'La notebook HP Pavilion 15-EH0009LA es la fusión perfecta entre el máximo desempeño y el mejor diseño para tus días más productivos. Con una pantalla de 15,6 pulgadas con micro bordes y resolución FHD (1920 x 1080 p) tendrás mayor visualización, con amplios ángulos de visión de 178°, y una excelente calidad para disfrutar de todo tu contenido. Además, cuenta con lector de huellas digitales para que puedas iniciar sesión en tu dispositivo solo con el toque de tu dedo.', 1, 3, '1', '/img/lenovoAlRevez.png', '/img/lenovoGrande.png'),
	(11, 'Notebook Lenovo', 170000.00, '/img/notebookLenovo.jpg', 'La notebook Lenovo IP1-81VU006Q cuenta con un diseño compacto y funcional. Llevala con vos a donde quieras gracias a su liviano peso 1.4 Kg de y sus cómodas medidas de: 32.7 cm de ancho x 23.5 cm de profundidad x 1.7 cm de alto.', 1, 3, '1', '/img/realLaptopOK.png', '/img/lenovoAlRevez.png'),
	(12, 'Smart TV Full HD', 70000.00, '/img/SmartTvFullHD.jpg', 'El Smart TV TCL L40S66E-F de 40 pulgadas cuenta con una pantalla formato widescreen (16:9) con una resolución de 1920 x 1080 píxeles. A diferencia del estándar HD, su alto nivel de detalle brinda colores más puros y nítidos.', 1, 2, '1', '/img/imagenDefaultProducto.png', '/img/imagenDefaultProducto.png'),
	(13, 'Smart TV QLED ', 240000.00, '/img/SmartTvQLED.jpg', 'Posee un diseño elegante y ultra delgado. Con su pantalla de 55 pulgadas y resolución 4K QLED lograrás tener imágenes claras y nítidas, para disfrutar de todo tu contenido favorito sin perderte ningún detalle. Además, podrás tener una experiencia gamer diferente y mejorada, ya que las pantallas de 21:9 y 32:9 te brindarán visibilidad adicional y, con el modo Auto Low Latency (ALLM), disfrutarás tus partidas con más fluidez y enfoque. ', 1, 2, '1', '/img/imagenDefaultProducto.png', '/img/imagenDefaultProducto.png'),
	(14, 'Smart TV UHD ', 135000.00, '/img/SmartTvUHD.jpg', 'Tiene una resolución cuatro veces superior a la de una TV Full HD (3840 x 2160 píxeles) y cuenta con Crystal Processor 4K que garantiza una expresión de colores optimizada para que puedas ver cada detalle. Su panel LED ofrece además la característica de alto rango dinámico (HDR), que aumenta la expresión brillante del televisor para que puedas disfrutar de un inmenso espectro de colores y detalles visuales, incluso en las escenas más oscuras.', 1, 2, '1', '/img/imagenDefaultProducto.png', '/img/imagenDefaultProducto.png'),
	(23, 'Realme 10', 130000.00, '/img/Realme3OK.png', 'Es un smartphone que no pretende competir por características, tampoco por sus materiales o por ser el más barato del escaparate: el Realme 10 busca ofrecer un equilibrio de calidad sin que el coste de venta resulte exagerado. En comparación, el hardware da un pasito atrás con respecto al Realme 9 del año pasado. Aunque también es más barato: en un 2023 donde todo sube de precio, que una generación sea más barata que la precedente es ya un valor.\r\n\r\n', 1, 1, '1', '/img/realme1OK.png', '/img/realme4.png'),
	(24, 'Realme C11', 120000.00, '/img/Realme5OK.png', 'El Oppo Realme C11 cuenta con una pantalla HD+ de 6.5 pulgadas, un procesador Helio G35 de Mediatek con 2GB de memoria RAM y 32GB de almacenamiento interno expandible, cámara posterior dual de 13 MP + 2 MP, y cámara frontal para selfies de 5 megapixels. La energía del Realme C11 es provista por una enorme batería de 5000 mAh con carga rápida de 10W, cuenta con radio FM y corre Android 10.', 1, 1, '2', '/img/realme4.png', '/img/realme2.png');

-- Volcando estructura para tabla bd_ayru.products_available_locations
CREATE TABLE IF NOT EXISTS `products_available_locations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_products` int(11) NOT NULL,
  `id_available_locations` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_idproducts` (`id_products`),
  KEY `fk_id_availableLocations` (`id_available_locations`) USING BTREE,
  CONSTRAINT `fk_available_locations` FOREIGN KEY (`id_available_locations`) REFERENCES `available_locations` (`id`),
  CONSTRAINT `fk_idproducts` FOREIGN KEY (`id_products`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_ayru.products_available_locations: ~0 rows (aproximadamente)

-- Volcando estructura para tabla bd_ayru.products_colors
CREATE TABLE IF NOT EXISTS `products_colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_products` int(11) NOT NULL,
  `id_colors` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_products` (`id_products`),
  KEY `fk_id_colors` (`id_colors`) USING BTREE,
  CONSTRAINT `fk_id_colors` FOREIGN KEY (`id_colors`) REFERENCES `colors` (`id`),
  CONSTRAINT `fk_id_products` FOREIGN KEY (`id_products`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_ayru.products_colors: ~28 rows (aproximadamente)
INSERT INTO `products_colors` (`id`, `id_products`, `id_colors`) VALUES
	(1, 5, 1),
	(2, 5, 2),
	(3, 5, 3),
	(4, 6, 1),
	(5, 6, 2),
	(6, 7, 2),
	(7, 7, 3),
	(9, 9, 1),
	(10, 9, 3),
	(11, 10, 1),
	(12, 10, 2),
	(13, 10, 3),
	(14, 11, 2),
	(15, 11, 3),
	(16, 12, 1),
	(17, 12, 3),
	(18, 13, 1),
	(19, 13, 2),
	(20, 13, 3),
	(21, 14, 1),
	(22, 14, 2),
	(23, 14, 3),
	(24, 21, 1),
	(32, 8, 2),
	(33, 23, 1),
	(34, 23, 2),
	(35, 24, 1),
	(36, 24, 2);

-- Volcando estructura para tabla bd_ayru.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT 'pngegg.png',
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_category_id` (`category_id`),
  CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla bd_ayru.users: ~4 rows (aproximadamente)
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `image`, `category_id`) VALUES
	(1, 'Ramon', 'Marino', 'marinoramon@hotmail.com', '$2a$10$LAehA1JN09UuF8f0Ydp7Ne.atMNfvJUsp4WsNv6JTjnU69Laz4uue', 'pngegg.png', 2),
	(5, 'Ariadna', 'Mazzocchi', 'ariadna@hotmail.com', '$2a$10$PsCH1tXsoxq82p89P0ioQOd.PNPTYfUDEERepOG/Bcb4tI5YECYFu', 'pngegg.png', 2),
	(6, 'Uriel', 'Sosa', 'urielsosa@hotmail.com', '$2a$10$Li6jIpSa8huVktKeTMKAt.NV.oE9gezhbTssHeCGqfsETtkNWSlRW', 'pngegg.png', 2),
	(7, 'Yago', 'Sosa', 'sosayago@hotmail.com', '$2a$10$sb8enVpGjeV9bsD2dOA8y.kv/.NONZ.FT4kLyxmlJeJ.w1zFphwbS', 'pngegg.png', 2);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
