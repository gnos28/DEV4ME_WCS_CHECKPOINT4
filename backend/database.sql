-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: datalumios
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

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
  `id` int NOT NULL AUTO_INCREMENT,
  `day_pattern_id` int NOT NULL,
  `start_time` time NOT NULL,
  `light_power` float(4,1) NOT NULL,
  `force_on` tinyint(1) NOT NULL,
  `presence_detection` tinyint(1) NOT NULL,
  `light_detection` tinyint(1) NOT NULL,
  `alarm` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`,`day_pattern_id`),
  KEY `fk_activity_day_pattern1_idx` (`day_pattern_id`),
  CONSTRAINT `fk_activity_day_pattern1` FOREIGN KEY (`day_pattern_id`) REFERENCES `day_pattern` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=343 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES (1,9,'00:00:00',0.0,0,1,1,1),(2,9,'01:00:00',0.0,0,1,1,1),(3,3,'03:00:00',50.0,1,1,1,1),(4,9,'03:00:00',0.0,0,1,1,1),(5,9,'04:00:00',0.0,0,1,1,1),(6,9,'05:00:00',0.0,0,1,1,1),(7,9,'06:00:00',0.0,0,1,1,1),(8,9,'07:00:00',0.0,0,1,1,1),(9,9,'08:00:00',0.0,0,1,1,1),(10,9,'09:00:00',0.0,0,1,1,1),(11,9,'10:00:00',0.0,0,1,1,1),(12,9,'11:00:00',0.0,0,1,1,1),(13,5,'12:00:00',0.0,0,1,1,1),(14,9,'13:00:00',0.0,0,1,1,1),(15,9,'14:00:00',0.0,0,1,1,1),(16,9,'15:00:00',0.0,0,1,1,1),(17,9,'16:00:00',0.0,0,1,1,1),(18,9,'17:00:00',0.0,0,1,1,1),(19,9,'18:00:00',0.0,0,1,1,1),(20,9,'19:00:00',0.0,0,1,1,1),(21,9,'20:00:00',0.0,0,1,1,1),(22,9,'21:00:00',0.0,0,1,1,1),(23,9,'22:00:00',0.0,0,1,1,1),(24,9,'23:00:00',0.0,0,1,1,1),(25,9,'24:00:00',0.0,0,1,1,1),(26,9,'00:00:00',0.0,0,1,1,1),(27,2,'03:00:00',50.0,1,1,1,1),(30,3,'03:00:00',50.0,1,1,0,1),(319,29,'00:00:00',100.0,1,0,0,0),(320,29,'09:00:00',100.0,0,0,0,0),(321,29,'10:00:00',100.0,0,0,0,0),(322,29,'02:00:00',100.0,1,0,0,0),(323,29,'08:00:00',100.0,0,0,0,0),(324,29,'01:00:00',100.0,1,0,0,0),(325,29,'03:00:00',100.0,1,0,0,0),(326,29,'04:00:00',100.0,1,0,0,0),(327,29,'05:00:00',100.0,0,0,0,0),(328,29,'06:00:00',100.0,0,0,0,0),(329,29,'07:00:00',100.0,0,0,0,0),(330,29,'11:00:00',100.0,0,0,0,0),(331,29,'12:00:00',100.0,0,0,0,0),(332,29,'13:00:00',100.0,0,0,0,0),(333,29,'14:00:00',100.0,0,0,0,0),(334,29,'15:00:00',100.0,0,0,0,0),(335,29,'16:00:00',100.0,0,0,0,0),(336,29,'17:00:00',100.0,0,0,0,0),(337,29,'18:00:00',100.0,1,0,0,0),(338,29,'19:00:00',100.0,1,0,0,0),(339,29,'20:00:00',100.0,1,0,0,0),(340,29,'21:00:00',100.0,1,0,0,0),(341,29,'22:00:00',100.0,1,0,0,0),(342,29,'23:00:00',100.0,1,0,0,0);
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `day_pattern`
--

DROP TABLE IF EXISTS `day_pattern`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `day_pattern` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `plant_id` int NOT NULL,
  PRIMARY KEY (`id`,`plant_id`),
  KEY `fk_day pattern_plant1_idx` (`plant_id`),
  CONSTRAINT `fk_day pattern_plant1` FOREIGN KEY (`plant_id`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `day_pattern`
--

LOCK TABLES `day_pattern` WRITE;
/*!40000 ALTER TABLE `day_pattern` DISABLE KEYS */;
INSERT INTO `day_pattern` VALUES (1,'jour_travaill??_std',6),(2,'jour_f??ri??',6),(3,'jour_semaine_normal',7),(4,'jour_weekend',7),(5,'jour_semaine_??t??',7),(6,'jour_weekend_??t??',7),(7,'jour_semaine_hiver',7),(8,'jour_weekend_hiver',7),(9,'jour_weekend',6),(29,'default',7);
/*!40000 ALTER TABLE `day_pattern` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device` (
  `id` int NOT NULL AUTO_INCREMENT,
  `last_data_reception_date` datetime DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `product_installation_date` datetime DEFAULT NULL,
  `last_maintenance_date` datetime DEFAULT NULL,
  `power_status` tinyint(1) DEFAULT NULL,
  `operational` tinyint(1) DEFAULT NULL,
  `mouvement_detection_active` tinyint(1) DEFAULT NULL,
  `luminosity_detection_active` tinyint(1) DEFAULT NULL,
  `solarwake_detection_active` tinyint(1) DEFAULT NULL,
  `alarm_active` tinyint(1) DEFAULT NULL,
  `hourly_plage_active` tinyint(1) DEFAULT NULL,
  `delay_before_start` int DEFAULT NULL,
  `last_realtime_consoKwh` decimal(5,2) DEFAULT NULL,
  `max_intensity` decimal(4,1) DEFAULT NULL,
  `min_intensity` decimal(4,1) DEFAULT NULL,
  `weekly_pattern_id` int DEFAULT NULL,
  `plant_id` int NOT NULL,
  PRIMARY KEY (`id`,`plant_id`),
  KEY `fk_lamp_plant1_idx` (`plant_id`),
  KEY `weekly_pattern_id` (`weekly_pattern_id`),
  CONSTRAINT `device_ibfk_1` FOREIGN KEY (`weekly_pattern_id`) REFERENCES `weekly_pattern` (`id`),
  CONSTRAINT `fk_lamp_plant1` FOREIGN KEY (`plant_id`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device`
--

LOCK TABLES `device` WRITE;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
INSERT INTO `device` VALUES (1,'2022-07-13 15:35:01',14800,'2022-05-20 00:00:00','2022-06-01 00:00:00',1,1,1,1,1,NULL,1,NULL,128.00,60.0,48.0,NULL,6),(2,'2022-07-07 22:05:01',14950,'2020-01-15 00:00:00','2022-06-01 00:00:00',0,1,1,1,1,0,1,30,145.00,50.0,24.0,24,7),(3,'2022-07-07 22:05:01',14950,'2020-01-14 00:00:00','2022-05-31 00:00:00',0,1,1,1,1,0,1,30,145.00,50.0,24.0,24,7),(5,NULL,51234,'2022-07-08 14:27:57','2022-07-08 14:27:57',0,1,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,24,7);
/*!40000 ALTER TABLE `device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `device_consumption`
--

DROP TABLE IF EXISTS `device_consumption`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `device_consumption` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `consoKwh` decimal(5,2) NOT NULL,
  `device_id` int NOT NULL,
  PRIMARY KEY (`id`,`device_id`),
  KEY `fk_conso_lamp1_idx` (`device_id`),
  CONSTRAINT `fk_conso_lamp1` FOREIGN KEY (`device_id`) REFERENCES `device` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device_consumption`
--

LOCK TABLES `device_consumption` WRITE;
/*!40000 ALTER TABLE `device_consumption` DISABLE KEYS */;
INSERT INTO `device_consumption` VALUES (1,'2022-07-13 15:35:01',0.00,1),(2,'2022-06-28 00:00:00',0.82,2),(3,'2022-07-04 00:00:00',0.00,2),(4,'2022-07-05 00:00:00',0.00,2),(5,'2022-06-04 00:00:00',0.75,2),(6,'2022-06-05 00:00:00',0.83,2),(7,'2022-06-06 00:00:00',0.70,2),(8,'2022-06-07 00:00:00',0.74,2),(9,'2022-06-09 00:00:00',0.50,2),(10,'2022-06-10 00:00:00',0.66,2),(11,'2022-06-11 00:00:00',0.75,2),(12,'2022-06-19 00:00:00',0.85,2),(13,'2022-06-20 00:00:00',0.40,2),(14,'2022-06-26 00:00:00',0.81,2),(15,'2022-06-29 00:00:00',0.63,2),(16,'2022-06-30 00:00:00',0.82,2),(17,'2022-07-01 00:00:00',1.03,2),(18,'2022-07-06 00:00:00',0.00,2),(19,'2022-07-07 00:00:00',0.80,2),(20,'2022-07-08 00:00:00',0.73,2),(21,'2022-07-09 00:00:00',0.72,2),(22,'2022-07-10 00:00:00',0.64,2),(23,'2022-07-11 00:00:00',0.80,2),(24,'2022-07-12 00:00:00',0.85,2),(25,'2022-06-28 00:00:00',0.82,3),(26,'2022-06-29 00:00:00',0.80,3),(27,'2022-07-04 00:00:00',0.00,3),(28,'2022-07-05 00:00:00',0.80,3),(29,'2022-06-07 00:00:00',0.95,3),(30,'2022-06-08 00:00:00',0.90,3),(31,'2022-06-09 00:00:00',0.87,3),(32,'2022-06-11 00:00:00',0.52,3),(33,'2022-06-12 00:00:00',0.87,3),(34,'2022-06-13 00:00:00',1.05,3),(35,'2022-06-14 00:00:00',0.93,3),(36,'2022-06-15 00:00:00',0.75,3),(37,'2022-06-16 00:00:00',0.99,3),(38,'2022-06-17 00:00:00',0.40,3),(39,'2022-06-18 00:00:00',0.60,3),(40,'2022-06-20 00:00:00',0.60,3),(41,'2022-06-21 00:00:00',0.96,3),(42,'2022-06-22 00:00:00',0.82,3),(43,'2022-06-23 00:00:00',0.82,3),(44,'2022-06-24 00:00:00',0.15,3),(45,'2022-06-25 00:00:00',1.00,3),(46,'2022-07-02 00:00:00',1.20,3),(47,'2022-07-03 00:00:00',0.99,3),(48,'2022-07-06 00:00:00',0.00,3),(49,'2022-07-07 00:00:00',0.80,3);
/*!40000 ALTER TABLE `device_consumption` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `energy_price`
--

DROP TABLE IF EXISTS `energy_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `energy_price` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contract_start_date` date NOT NULL,
  `contract_end_date` date NOT NULL,
  `price_by_kwh` decimal(5,4) NOT NULL,
  `plant_id` int NOT NULL,
  PRIMARY KEY (`id`,`plant_id`),
  KEY `fk_energy_price_plant1_idx` (`plant_id`),
  CONSTRAINT `fk_energy_price_plant1` FOREIGN KEY (`plant_id`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `energy_price`
--

LOCK TABLES `energy_price` WRITE;
/*!40000 ALTER TABLE `energy_price` DISABLE KEYS */;
INSERT INTO `energy_price` VALUES (6,'2021-01-01','2023-12-31',0.0900,7),(7,'2022-05-01','2024-12-31',0.1100,6),(8,'2020-09-01','2022-12-31',0.1100,8),(9,'2021-08-01','2023-12-31',0.1100,9),(10,'2022-02-01','2023-12-31',0.1000,10);
/*!40000 ALTER TABLE `energy_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` varchar(5000) DEFAULT NULL,
  `nb_clics` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
INSERT INTO `faq` VALUES (23,'2020-09-05','Comment savoir si l\'un de mes appareils est défaillant?','Si un appareil semble defectueux, le menu intégrité dans intégrité du parc changera de position entre nulle ou partielle. L\'état excellente indique que tout vos appareils sont fonctionnels.',1),(24,'2021-04-03','Comment ajouter un nouvel utilisateur pour gérer le parc d\'équipement de mon entreprise?','Rendez-vous dans sur la page Paramètres, puis sécurité. C\'est à cet endroit que vous pouvez rajouter vos différents intervenants. Vous avez aussi la possibilité de les supprimer.',12),(25,'2022-01-19','Comment puis-je ajouter un nouvel appareil?','Rendez-vous sur la page Installation, puis, dans liste des boîtiers, ajouter un appareil en rentrant un identifiant associé et cliquez sur ajouter.',8),(26,'2022-02-08','Comment puis-je modifier mes paramètres favoris?','Les paramètres favoris peuvent être gérés directement dans la page accueil, puis dans l\'encart paramètres favoris. Vous pouvez alors sélectionner l\'outil de votre choix.',15);
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `functions`
--

DROP TABLE IF EXISTS `functions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `functions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `functions`
--

LOCK TABLES `functions` WRITE;
/*!40000 ALTER TABLE `functions` DISABLE KEYS */;
INSERT INTO `functions` VALUES (4,'mesFonctionsFavories1'),(5,'mesFonctionsPr??f??r??es2'),(6,'testFonctions3');
/*!40000 ALTER TABLE `functions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issues`
--

DROP TABLE IF EXISTS `issues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issues` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(80) NOT NULL,
  `description` varchar(2048) NOT NULL,
  `status` varchar(50) NOT NULL,
  `date` datetime NOT NULL,
  `user_id` int NOT NULL,
  `device_id` int DEFAULT NULL,
  PRIMARY KEY (`id`,`user_id`),
  KEY `fk_issues_user1_idx` (`user_id`),
  KEY `device_id` (`device_id`),
  CONSTRAINT `fk_issues_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `issues_ibfk_1` FOREIGN KEY (`device_id`) REFERENCES `device` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issues`
--

LOCK TABLES `issues` WRITE;
/*!40000 ALTER TABLE `issues` DISABLE KEYS */;
INSERT INTO `issues` VALUES (4,'probleme1','texte1','open','2022-06-02 00:00:00',7,NULL),(5,'probleme2','texte2','closed','2020-05-01 00:00:00',7,NULL),(6,'probleme3','texte3','open','2022-04-04 00:00:00',10,NULL),(8,'probleme5','texte3','open','2022-04-03 00:00:00',10,NULL);
/*!40000 ALTER TABLE `issues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lumios_social_links`
--

DROP TABLE IF EXISTS `lumios_social_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lumios_social_links` (
  `id` int NOT NULL AUTO_INCREMENT,
  `social_network_name` varchar(100) NOT NULL,
  `social_network_link` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lumios_social_links`
--

LOCK TABLES `lumios_social_links` WRITE;
/*!40000 ALTER TABLE `lumios_social_links` DISABLE KEYS */;
INSERT INTO `lumios_social_links` VALUES (1,'linkedIn','lumios@linkedin'),(2,'facebook','lumios@facebook');
/*!40000 ALTER TABLE `lumios_social_links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `title` varchar(80) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'2022-01-15','Lancement du projet Lumios','Après plusieurs années de recherche et développement, le projet Lumios voit enfin le jour !'),(2,'2022-06-01','Mise à jour de l\'application','L\'application a été mise à jour. Vous avez maintenant la possibilité d\'inscrire de nouveaux administrateurs pour la gestion de votre parc.'),(3,'2022-03-17','Mise à jour boîtier','Vos boîtiers ont été mis à jour. Les boîtiers sont maintenant équipés de détecteurs de pluie. Ainsi, vous pourrez bientôt déclencher un allumage complet de vos éclairages en cas de mauvais temps !'),(4,'2022-05-12','Ajout fonctionnalité','Une nouvelle fonctionnalité vient de naître ! Vous pouvez dès a présent, gérer l\'intensité lumineuses de vos sources lumineuses. Rendez-vous dans vos paramètres favoris !');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `plant_id` int NOT NULL,
  `type` varchar(20) NOT NULL,
  `description` varchar(255) NOT NULL,
  `read` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` VALUES (1,'2022-06-15 23:12:54',7,'maintenance','maintenance à faire sur device 002',1),(2,'2022-07-02 12:32:27',7,'intrusion','présence détectée sur device 002',1),(3,'2022-07-07 09:44:51',7,'panne','device 003 en panne',1);
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plant`
--

DROP TABLE IF EXISTS `plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(50) NOT NULL,
  `zipcode` varchar(10) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `contrat_id` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plant`
--

LOCK TABLES `plant` WRITE;
/*!40000 ALTER TABLE `plant` DISABLE KEYS */;
INSERT INTO `plant` VALUES (6,'HELIOS & CO','9 rue des banques','MARSEILLE','13010','512582447',NULL),(7,'NANTES METROPOLE','2 rue de l\'Hotel de ville','NANTES','44094','247855696',NULL),(8,'LUISANCE','6 rue du commerce','TOURS','37000','263985410',NULL),(9,'1-2-3 LIGHT','85 impasse du ch├óteau','ORLEANS','45000','123336393',NULL),(10,'MAIRIE DE NOGENT LE ROTROU','Place de la mairie','NOGENT LE ROTROU','28400','274001252',NULL),(11,'marcusenterprise','rue de la liberté','Orléans','45000','0684120398',NULL);
/*!40000 ALTER TABLE `plant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tutos`
--

DROP TABLE IF EXISTS `tutos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tutos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `title` varchar(500) DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tutos`
--

LOCK TABLES `tutos` WRITE;
/*!40000 ALTER TABLE `tutos` DISABLE KEYS */;
INSERT INTO `tutos` VALUES (1,'2020-12-15','Ajouter un nouvel appareil sur une installation déjà existante','Rendez-vous sur la page Installation, puis, dans liste des boîtiers, ajouter un appareil en rentrant un identifiant associé et cliquez sur ajouter.'),(2,'2022-04-12','Gérer les temps d\'allumage de vos lampadaires? ','Rendez-vous dans vos paramètres favoris, puis allez dans extinction automatique. Vous pourrez alors sélectionner vos plages horaires');
/*!40000 ALTER TABLE `tutos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `is_plant_admin` tinyint(1) NOT NULL,
  `plant_id` int NOT NULL,
  `is_super_admin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`,`plant_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  KEY `fk_user_plant1_idx` (`plant_id`),
  CONSTRAINT `fk_user_plant1` FOREIGN KEY (`plant_id`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (7,'MARCHIVAL','eliott.marchival@luisance.com','hash1','277521836',1,8,NULL),(8,'DUPONTRE','eric.dupontre@nogent-le-rotrou.com','hash2','178562069',0,9,NULL),(9,'toto','antoine.junios@nantes-maville.fr','hash3','354856987',1,7,NULL),(10,'PASCAL','celine.pascal@nantes-maville.com','hash4','254782396',1,7,NULL),(11,'HELIOS','maxime.helios@helios.com','hash5','254782397',0,6,NULL),(12,'MARTIN','emeline.martin@123lights.com','hash6','585962314',1,8,NULL),(14,'John Doe','admin@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$mT6bISttdGiJr1brQuEM4g$g6hgImCq5iNYL27XwOds1coxFb8RSZNMeT/ISOGEHVQ','123456789',1,7,0),(15,'John Doe','super@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$yzjK8mgLG+1bgLB9sXGfpA$gBYb+BOeHRunyemeFAGWVhPRA27KtzYtSk0arj9DSQI','123456789',0,7,1),(16,'John Doe','test@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$qsf7AyLyxtVBMD3Y5TdO7g$q5YmsVwMK7XtayNm04RV8WSImiM14ghCiAL4sZp7rU8','123456789',0,7,1),(17,'Tintin','tintin@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$Htx64DxfD24NjkanCJooRQ$Hvhp5RkcZOVrYJxrpF+23lycIwf2lM1MIuf/6dBWWyY','987654321',0,7,0),(19,'aaa','aaa@aaa.eeer','$argon2id$v=19$m=65536,t=5,p=1$T5QS18Spkbx9zpUaK/qKvg$+i3ev7tOqulDCLFebTZEU80ovJEZFtKJfLUldyPiMdE',NULL,0,7,0),(20,'aazaz','zaeazeaz@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$dYiBE2P6/aSkTfL9IbUfXw$UvFP3+AIIOe3dR4BsBuel2RRZaBvs0KwJVUzo5ePQUk',NULL,0,7,0),(27,'mlantol','marc.lantol@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$uB+V0hS1ry//ljX6FvnWdg$qgfm0hVt4D4ERBV4srXD2V6gKeiK+inXC2EuxurRwbg','0237999999',1,11,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_favorites`
--

DROP TABLE IF EXISTS `user_favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_favorites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `functions_id` int NOT NULL,
  PRIMARY KEY (`id`,`user_id`,`functions_id`),
  KEY `fk_user_favorites_user1_idx` (`user_id`),
  KEY `fk_user_favorites_functions1_idx` (`functions_id`),
  CONSTRAINT `fk_user_favorites_functions1` FOREIGN KEY (`functions_id`) REFERENCES `functions` (`id`),
  CONSTRAINT `fk_user_favorites_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_favorites`
--

LOCK TABLES `user_favorites` WRITE;
/*!40000 ALTER TABLE `user_favorites` DISABLE KEYS */;
INSERT INTO `user_favorites` VALUES (2,7,5),(3,8,4),(6,8,6),(4,9,6),(5,12,4);
/*!40000 ALTER TABLE `user_favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weekly_pattern`
--

DROP TABLE IF EXISTS `weekly_pattern`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weekly_pattern` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `plant_id` int NOT NULL,
  PRIMARY KEY (`id`,`plant_id`),
  KEY `fk_weekly pattern_plant1_idx` (`plant_id`),
  CONSTRAINT `fk_weekly pattern_plant1` FOREIGN KEY (`plant_id`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weekly_pattern`
--

LOCK TABLES `weekly_pattern` WRITE;
/*!40000 ALTER TABLE `weekly_pattern` DISABLE KEYS */;
INSERT INTO `weekly_pattern` VALUES (1,'weekly_pattern_normal',7),(2,'weekly_pattern_day_off',7),(3,'holiday_week',7),(5,'test',6),(24,'default',7);
/*!40000 ALTER TABLE `weekly_pattern` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weekly_pattern_definition`
--

DROP TABLE IF EXISTS `weekly_pattern_definition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weekly_pattern_definition` (
  `id` int NOT NULL AUTO_INCREMENT,
  `weekly_pattern_id` int NOT NULL,
  `day_pattern_id` int NOT NULL,
  `day_of_the_week` varchar(10) NOT NULL,
  PRIMARY KEY (`id`,`day_pattern_id`),
  KEY `fk_weekly pattern definition_day pattern1_idx` (`day_pattern_id`),
  KEY `weekly_pattern_id` (`weekly_pattern_id`),
  CONSTRAINT `fk_weekly pattern definition_day pattern1` FOREIGN KEY (`day_pattern_id`) REFERENCES `day_pattern` (`id`),
  CONSTRAINT `weekly_pattern_definition_ibfk_1` FOREIGN KEY (`weekly_pattern_id`) REFERENCES `weekly_pattern` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weekly_pattern_definition`
--

LOCK TABLES `weekly_pattern_definition` WRITE;
/*!40000 ALTER TABLE `weekly_pattern_definition` DISABLE KEYS */;
INSERT INTO `weekly_pattern_definition` VALUES (1,1,5,'lundi'),(2,1,5,'mardi'),(3,1,5,'mercredi'),(4,1,5,'jeudi'),(5,1,5,'vendredi'),(6,1,5,'samedi'),(7,5,5,'dimanche'),(45,24,29,'lundi'),(46,24,29,'jeudi'),(47,24,29,'mardi'),(48,24,29,'mercredi'),(49,24,29,'vendredi'),(50,24,29,'dimanche'),(51,24,29,'samedi');
/*!40000 ALTER TABLE `weekly_pattern_definition` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-13 15:43:58
