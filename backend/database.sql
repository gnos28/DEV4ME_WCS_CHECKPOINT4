-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: dev4me
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media` (
  `id` int NOT NULL AUTO_INCREMENT,
  `path` varchar(255) DEFAULT NULL,
  `real_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `real_id` (`real_id`),
  CONSTRAINT `media_ibfk_1` FOREIGN KEY (`real_id`) REFERENCES `real` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (8,'1658421371235_canvas_shooter_zoom.png',2),(9,'1658434257244_02f5f044-6381-4249-946f-7f2f36875175.undefined',7),(13,'1658435618421_hvp.jpeg',10),(14,'1658436340009_apside.png',11),(15,'1658436486538_crypto.webp',12),(16,'1658469303039_11751167-701a-42b3-ae3e-0b06abc952ab_(1).gif',11),(17,'1658480278420_canvas_shooter_2.jpeg',2),(18,'1658481310256_2fe8ed73-64bc-4575-8f4a-4b8e07706e1e.webp',10);
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `real`
--

DROP TABLE IF EXISTS `real`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `real` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `description` varchar(4096) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `real`
--

LOCK TABLES `real` WRITE;
/*!40000 ALTER TABLE `real` DISABLE KEYS */;
INSERT INTO `real` VALUES (2,'canvas shooter','https://pixelatwork.fr/vignos','Le shoot em up ultime !\nR├⌐alis├⌐ en 2 semaines lors de mes premiers balbutiements de d├⌐veloppeurs web.\nUtilise la balise <canvas> et de l\'huile de coude.\nL\'intelligence artificielle est progressive, arriverez vous ├á battre le boss ?'),(7,'API NASA','','r├⌐cup├⌐ration de la position des satellites en temps r├⌐el (3D avec three.js)'),(10,'Human vs Planet','https://hvp.dev4.me/','projet r├⌐alis├⌐ en 24h dans le cadre du 1er hackathon de la Wild Code School\n1er prix du hackathon !'),(11,'Apsidea','','Hackathon #2 de la Wild Code School\n1er prix (p├⌐rim├¿tre Europe)'),(12,'cryptos','https://docs.google.com/spreadsheets/d/1Gz-DA4C_zjc811DP4N5ktbGDlCTTh2XrB433R_R8fdU','connexion API coinmarketcap pour analyses cryptos');
/*!40000 ALTER TABLE `real` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(64) DEFAULT NULL,
  `picture_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (2,'bootstrap','bootstrap.svg'),(3,'javascript','js.svg'),(4,'react','react.svg'),(5,'css','css.svg'),(6,'express','express.svg'),(7,'google apps script','gas.png'),(8,'google cloud','gcloud.svg'),(9,'git','git.svg'),(10,'html','html.svg'),(11,'mysql','mysql.svg'),(12,'node.js','node.svg'),(13,'sass','sass.svg'),(14,'D3.js','d3.png');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag_real`
--

DROP TABLE IF EXISTS `tag_real`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag_real` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag_id` int DEFAULT NULL,
  `real_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tag_id` (`tag_id`),
  KEY `real_id` (`real_id`),
  CONSTRAINT `tag_real_ibfk_1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`),
  CONSTRAINT `tag_real_ibfk_2` FOREIGN KEY (`real_id`) REFERENCES `real` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag_real`
--

LOCK TABLES `tag_real` WRITE;
/*!40000 ALTER TABLE `tag_real` DISABLE KEYS */;
INSERT INTO `tag_real` VALUES (8,10,2),(9,5,2),(10,3,2),(16,3,7),(17,4,7),(18,12,7),(19,6,7),(20,5,7),(21,10,7),(22,11,7),(23,13,7),(33,3,10),(34,4,10),(35,6,10),(36,12,10),(37,5,10),(38,10,10),(39,9,10),(40,11,10),(41,13,10),(42,3,11),(43,4,11),(44,5,11),(45,6,11),(46,10,11),(47,9,11),(48,11,11),(49,12,11),(50,13,11),(51,3,12),(52,7,12),(53,14,11);
/*!40000 ALTER TABLE `tag_real` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lastname` varchar(128) DEFAULT NULL,
  `firstname` varchar(128) DEFAULT NULL,
  `is_admin` tinyint(1) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password_hash` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'VIGNERON','Julien',1,'gnos28@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$VLKTAK5gzhVd2F6HTFeCaA$xiMximNdKTGNBXcZ6rCpz7o15VJ+rsdWM2LisMWxHmo');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-22 11:32:23
