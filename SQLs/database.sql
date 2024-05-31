CREATE DATABASE IF NOT EXISTS ocio_en_vivo;


CREATE TABLE IF NOT EXISTS roles (

    id INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    nombre  VARCHAR(100) NOT NULL

);

CREATE TABLE IF NOT EXISTS solicitud_actividad (

    id INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
    nombre  VARCHAR(100) NOT NULL,
    concepto  VARCHAR(200) NOT NULL,
    ciudad VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS usuarios (

    id INT NOT NULL AUTO_INCREMENT UNIQUE  PRIMARY KEY,
    email   VARCHAR(100) NOT NULL UNIQUE,
    nombre_usuario  VARCHAR(100) NOT NULL UNIQUE,
    passwd  VARCHAR(100) NOT NULL,
    nombre  VARCHAR(100) NOT NULL,
    apellidos   VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    n_telefono VARCHAR(20) NOT NULL,
    fecha_nacimiento    DATE NOT NULL,
    id_rol  INT NOT NULL,
    id_solicitud INT,

    FOREIGN KEY (id_rol) REFERENCES roles(id),
    FOREIGN KEY (id_solicitud) REFERENCES solicitud_actividad(id)
);

CREATE TABLE IF NOT EXISTS actividades (

    id INT NOT NULL AUTO_INCREMENT  PRIMARY KEY,
    nombre  VARCHAR(100) NOT NULL,
    descripcion  VARCHAR(100) NOT NULL,
    dia DATE NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    precio DECIMAL,
    hora_inicio TIME NOT NULL,
    hora_fin TIME ,
    duracion_aprox TIME NOT NULL,
    n_plazas INT, 
    n_plazas_min INT ,
    n_plazas_max INT ,
    personal  boolean ,
    transporte  boolean ,
    material  boolean ,
    preparacion_f VARCHAR(20),
    puntuacion INT,
    id_usuario_creador INT NOT NULL,

    FOREIGN KEY (id_usuario_creador) REFERENCES usuarios(ID)
);



CREATE TABLE IF NOT EXISTS usuarios_actividad (

    id_usuario INT NOT NULL,
    id_actividad INT NOT NULL,

    CONSTRAINT pk_tabla PRIMARY KEY (id_usuario, id_actividad),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_actividad) REFERENCES actividades(id)
);





