-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: ocioEnVivo
-- ------------------------------------------------------
-- Server version	11.3.2-MariaDB-1:11.3.2+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `dia` date NOT NULL,
  `duracion_aprox` varchar(255) DEFAULT NULL,
  `hora_fin` varchar(255) DEFAULT NULL,
  `hora_inicio` varchar(255) NOT NULL,
  `material` bit(1) DEFAULT NULL,
  `n_plazas` int(11) DEFAULT NULL,
  `n_votantes` int(11) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `personal` bit(1) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `preparacion_f` varchar(255) DEFAULT NULL,
  `puntuacion` double DEFAULT NULL,
  `transporte` bit(1) DEFAULT NULL,
  `id_usuario_creador` bigint(20) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `n_usuarios` int(11) DEFAULT NULL,
  `n_plazas_min` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKt2u7l7iixv0fuh7av8ohl5iih` (`id_usuario_creador`),
  CONSTRAINT `FKt2u7l7iixv0fuh7av8ohl5iih` FOREIGN KEY (`id_usuario_creador`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES (1,'Madrid','Fiesta de inauguración del nuevo restaurante \"Sabor del Sur\"','2024-05-16','21:22','18:19','18:19',_binary '\0',2,3,'Fiesta de inauguración',_binary '',0,'Media',3,_binary '\0',1,'assets/act/imagenAct_5.jpg',2,0),(2,'Barcelona','Torneo de ajedrez abierto a jugadores de todas las edades y niveles','2024-05-10','19:23','18:22','18:22',_binary '\0',40,3,'Torneo de ajedrez',_binary '\0',0,'Nula',1,_binary '\0',1,'assets/act/imagenAct_10.jpg',0,0),(25,'Cadiz','Disfruta de un choque de adrenalina con las mejores vistas','2024-07-30','14:04','03:04','03:03',_binary '',20,0,'Barranquismo',_binary '',60,'Nula',0,_binary '\0',7,'assets/act/imagenAct_14.jpg',3,2),(26,'Sevilla','Disfruta de una preciosa tarde en el Río Guadalquivir ','2024-05-28','03:00','12:03','12:02',_binary '\0',10,0,'Kayak',_binary '',50,'Nula',0,_binary '\0',7,'assets/act/imagenAct_21.jpg',5,2),(27,'Andorra','Escala como nunca antes ','2024-06-13','04:00','15:00','13:00',_binary '\0',2,0,'Escalada',_binary '',69,'Medio',0,_binary '\0',7,'assets/act/imagenAct_11.jpg',1,0),(28,'Sevilla','12 euros por persona si es grupos de mas de 10 personas se baja el precio','2024-07-13','10:00','20:00','10:00',_binary '',20,0,'Visita a zoológic',_binary '\0',6,'Media',0,_binary '\0',9,'assets/act/imagenAct_16.jpg',3,0),(29,'Islas canarias','Disfruta de un agradable paseo a las playas de gran canaria','2024-07-20','07:00','16:00','07:00',_binary '',5,2,'Montañismo',_binary '',80,'Media',3,_binary '\0',9,'assets/act/imagenAct_20.jpg',3,5);
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'administrador'),(2,'ofertante'),(3,'consumidor');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitud_actividad`
--

DROP TABLE IF EXISTS `solicitud_actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitud_actividad` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(255) NOT NULL,
  `concepto` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `id_usuario` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKrenla10wd4t2cjxtdh88426x8` (`id_usuario`),
  CONSTRAINT `FKrenla10wd4t2cjxtdh88426x8` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitud_actividad`
--

LOCK TABLES `solicitud_actividad` WRITE;
/*!40000 ALTER TABLE `solicitud_actividad` DISABLE KEYS */;
INSERT INTO `solicitud_actividad` VALUES (1,'Madrid','Se solicitan clases de baile en grupo para evento comunitario','Clases de baile en grupo',1),(2,'Barcelona','Se busca chef para realizar taller de cocina creativa en un evento corporativo','Taller de cocina creativa',2),(3,'Valencia','Se necesita experto en nutrición para dar charla sobre vida saludable en centro de salud','Charla sobre vida saludable',5),(29,'Sevilla','Solicito un partido de fútbol para 20 personas para la tarde del 12 de Agosto del 2024 por motivo del cumpleaños de mi sobrino','Partido de fútbol',8),(30,'Madrid','Hola me gustaría concertar una visita al zoológico para un mínimo de 30 personas, seria una visita escolar para niños de aproximadamente 12 años','Visita a un zoológico',8),(31,'Huelva','Solicito paseo en barco para 20 personas por Isla Cristina, deseo que el barco esté ambientado de cumpleaños, daré un plus de dinero.','Paseo en barco',13),(32,'Málaga','Solicito un paseo en bici por la costa del mar','Paseo en bici',13);
/*!40000 ALTER TABLE `solicitud_actividad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `activo` bit(1) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `dt_nac` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `n_telefono` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `id_rol` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7abhbwdkasmd6hd26sueb2gi` (`id_rol`),
  CONSTRAINT `FK7abhbwdkasmd6hd26sueb2gi` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,_binary '','Sevilla','2024-05-03','jaime@gmail.com','604253231','Jaime','$2a$10$sFfcMmwEQVpVOVQhUHqziuvdS/ndnhIBGdzGcZ.vA886BX6H849PO','Jiménez','JaimeAdmin',1),(2,_binary '','Sevilla','2024-05-10','guille@gmail.com','141234','guille','$2a$10$w6zyguoftDqazaJDAsFM2ecO9SRHZZg8AgN/FznQatosHRHPatYxi','Romero','guille',2),(5,_binary '','Sevilla','2024-05-14','fermin@gmail.com','142123','fermincillo','$2a$10$AKWfQt5rscQs.YxQhFqbvu58pxlLWhYLP0NqkCDzOyvBSisdlp1hy','BICHENTE','fermincillo',3),(7,_binary '','Sevilla','2003-07-24','nerea@gmail.com','629870954','Nerea','$2a$10$oC5B2eKhd1WVb16JS6sMteyX80PmpZs62k5sDQOaocAQ/2RarH2eS','Gonzalez','nereis',2),(8,_binary '','Madrid','0123-03-12','juan@gmail.com','981298548','Juan','$2a$10$OnAMfRWEPf6PIcbJLIfaketarlSVAyIQagKxoGtrGSflttbGwpoAi','Peña','juan',3),(9,_binary '','Barcelona','3975-08-09','julian@gmail.com','8012398','Julian','$2a$10$.G2u5QXDE0LoJbsh/2rhIOeqotJYGugAEbcQITAto414YS1uR1Hkm','Gómez','julian',2),(10,_binary '','Granada','4331-03-12','maria@gmail.com','98696986','María','$2a$10$udyPOsN62RrkKZ26aBnQZO5sYFpPJNsjTNnthB5tXADJcJslhIlLO','Gómez','maripili',3),(11,_binary '','Almería','3133-12-13','mara@gmail.com','12312313','Mara','$2a$10$sas7nhTIjcTIIVvlxuW.u.jkwa2.HvT3yaJmDV6PSAFbvoi7UNkOC','Peña','mara',3),(12,_binary '','Sevilla','1231-03-12','paula@gmail.com','81724097','Paula','$2a$10$of.zbsvPkaNLEJpNSJ9ODOdMb8Heor4yrQKqbiL.4xIHnWys7JoR.','Jiménez','paula',3),(13,_binary '','Sevilla','0123-02-13','javi@gmail.com','13214','Javier','$2a$10$DM1Y0yGXo8ZKuYXVdczcLu3bJhX./VVcWM8Wr0fMcVwvVh0CiMAWe','Jiménez','javi',3);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_activities`
--

DROP TABLE IF EXISTS `users_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_activities` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_actividad` bigint(20) DEFAULT NULL,
  `id_usuario` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhdxnk22xeqlqd422w7oadc1lh` (`id_actividad`),
  KEY `FKl4gdfk0i6owyqgu8oasad7pb2` (`id_usuario`),
  CONSTRAINT `FKhdxnk22xeqlqd422w7oadc1lh` FOREIGN KEY (`id_actividad`) REFERENCES `activity` (`id`),
  CONSTRAINT `FKl4gdfk0i6owyqgu8oasad7pb2` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=135 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_activities`
--

LOCK TABLES `users_activities` WRITE;
/*!40000 ALTER TABLE `users_activities` DISABLE KEYS */;
INSERT INTO `users_activities` VALUES (114,29,9),(115,28,9),(116,26,9),(121,2,13),(122,25,13),(123,26,13),(124,28,13),(125,2,12),(126,25,12),(127,26,12),(128,27,12),(130,25,11),(131,26,11),(132,29,1);
/*!40000 ALTER TABLE `users_activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ocioEnVivo'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-31 14:28:24
