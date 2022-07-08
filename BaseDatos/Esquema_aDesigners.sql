SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- Esquema aDesigners
CREATE SCHEMA `aDesigners`;
USE `aDesigners` ;

-- Tabla usuario
CREATE TABLE IF NOT EXISTS `aDesigners`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `tel` VARCHAR(45) NOT NULL,
  `contrasena` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- Tabla categoría
CREATE TABLE IF NOT EXISTS `aDesigners`.`categoria` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- Tabla producto
CREATE TABLE IF NOT EXISTS `aDesigners`.`producto` (
   `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `img` VARCHAR(50) NOT NULL,
  `img2` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `descripcion2` VARCHAR(1000) NOT NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`id`, `categoria_id`),
  INDEX `fk_producto_categoria1_idx` (`categoria_id` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoria1`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `aDesigners`.`categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- Tabla ventas
CREATE TABLE IF NOT EXISTS `aDesigners`.`ventas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NOT NULL,
  `totalventa` DOUBLE NOT NULL,
  `producto_id` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  `categoria_id` INT NOT NULL,
  PRIMARY KEY (`id`, `producto_id`, `usuario_id`, `categoria_id`),
  INDEX `fk_ventas_producto1_idx` (`producto_id` ASC) VISIBLE,
  INDEX `fk_ventas_usuario1_idx` (`usuario_id` ASC) VISIBLE,
  INDEX `fk_ventas_categoria1_idx` (`categoria_id` ASC) VISIBLE,
  CONSTRAINT `fk_ventas_producto1`
    FOREIGN KEY (`producto_id`)
    REFERENCES `aDesigners`.`producto` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ventas_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `aDesigners`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ventas_categoria1`
    FOREIGN KEY (`categoria_id`)
    REFERENCES `aDesigners`.`categoria` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


