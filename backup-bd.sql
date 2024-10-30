CREATE DATABASE SGIA;
USE SGIA;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(255) NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    marca VARCHAR(255) NOT NULL,
    cantidad INT NOT NULL,
    disponible INT NOT NULL,
    valor VARCHAR(40) NOT NULL,
    estado VARCHAR(20) NOT NULL
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    NOMBRE_COMPLETO, VARCHAR(255) NOT NULL,
    TIPO_DOCUMENTO VARCHAR(20) NOT NULL,
    DOCUMENTO INT(20) NOT NULL,
    CONTRASENA VARCHAR(255) NOT NULL,
    ROL VARCHAR(20) NOT NULL,
    ESTADO tinyint(1) NOT NULL,
    CORREO VARCHAR(50) NOT NULL
);

CREATE TABLE comprar(
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha_compra DATE NOT NULL,
    fecha_devolucion DATE,
    estado VARCHAR(20)NOT NULL,
    id_usuarios INT NOT NULL,
    id_productos INT NOT NULL,
    id_proveedor INT NOT NULL,
FOREIGN KEY (id_usuarios)REFERENCES usuarios(id),
FOREIGN KEY (id_productos)REFERENCES productos(id),
FOREIGN KEY (id_proveedor)REFERENCES proveedor(id));

INSERT INTO `productos` (`id`, `imagen`, `nombre`, `marca`, `cantidad`, `disponible`, `valor`, `estado`) VALUES
('../../assets/images/productos/martillo.jpg', 'Martillo', 'stanley', 20, 20, '3', 'activo'),
('../../assets/images/productos/multimetro.png', 'Multimetro', 'Red', 10, 10, '2', 'activo'),
('../../assets/images/productos/taladro.jpg', 'Taladro', 'stanley', 15, 15, '1', 'activo'),
('../../assets/images/productos/alicate.jpg', 'Alicate', 'stanley', 12, 12, '2', 'activo');

INSERT INTO `usuarios` (`NOMBRE_COMPLETO`,`TIPO_DOCUMENTO`,`DOCUMENTO`,`CONTRASENA`,`ROL`,`ESTADO`,`CORREO`) VALUES
('Andrea', 'CC', '1234567891', '123htr', 'tienda', 'activo','andre435jh@gmail.com'),
('Santiago Arboleda', 'CC', '1053848763','yr5123' ,'tienda', 'activo', 'elprogg.345@gmail.com');