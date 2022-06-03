-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema lightsabersdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `lightsabersdb` ;

-- -----------------------------------------------------
-- Schema lightsabersdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lightsabersdb` DEFAULT CHARACTER SET utf8 ;
USE `lightsabersdb` ;

-- -----------------------------------------------------
-- Table `lightsaber`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lightsaber` ;

CREATE TABLE IF NOT EXISTS `lightsaber` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `owner` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS lightsaberuser;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'lightsaberuser' IDENTIFIED BY 'lightsaberuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'lightsaberuser';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `lightsaber`
-- -----------------------------------------------------
START TRANSACTION;
USE `lightsabersdb`;
INSERT INTO `lightsaber` (`id`, `owner`) VALUES (1, 'Obi-Wan Kenobi');

COMMIT;

