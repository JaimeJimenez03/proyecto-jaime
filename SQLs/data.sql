use ocio_en_vivo;

-- Insertar roles
INSERT INTO roles (id,nombre) VALUES
(1,'administrador'),
(2,'ofertante'),
(3,'consumidor');

-- Insertar solicitudes
INSERT INTO solicitud_actividad (nombre, concepto, ciudad) VALUES
('Clases de baile en grupo', 'Se solicitan clases de baile en grupo para evento comunitario', 'Madrid'),
('Taller de cocina creativa', 'Se busca chef para realizar taller de cocina creativa en un evento corporativo', 'Barcelona'),
('Charla sobre vida saludable', 'Se necesita experto en nutrición para dar charla sobre vida saludable en centro de salud', 'Valencia');

-- Insertar usuarios
INSERT INTO usuarios (email, nombre_usuario, passwd, nombre, apellidos, ciudad, n_telefono, fecha_nacimiento, id_rol, id_solicitud)
VALUES
('juanperez@example.com', 'juanperez', 'clave123', 'Juan', 'Pérez', 'Madrid', '123456789', '1980-05-15', 1, null),
('mariagomez@example.com', 'mariagomez', 'contraseña456', 'María', 'Gómez', 'Barcelona', '987654321', '1988-10-25', 2, 1),
('carloslopez@example.com', 'carloslopez', 'clave789', 'Carlos', 'López', 'Valencia', '456123789', '1995-02-10', 3, 2),
('anamartinez@example.com', 'anamartinez', 'contraseña123', 'Ana', 'Martínez', 'Sevilla', '654987321', '1975-12-20', 2, 3),
('lauraruiz@example.com', 'lauraruiz', 'clave456', 'Laura', 'Ruiz', 'Málaga', '789654123', '1992-08-30', 3, null),
('pedrosanchez@example.com', 'pedrosanchez', 'contraseña789', 'Pedro', 'Sánchez', 'Bilbao', '321456987', '1983-04-05', 1, null),
('sofiahernandez@example.com', 'sofiahernandez', 'clave987', 'Sofía', 'Hernández', 'Alicante', '159753468', '1990-07-12', 2, null),
('daviddiaz@example.com', 'daviddiaz', 'contraseña321', 'David', 'Díaz', 'Granada', '852963147', '1987-11-22', 3, null),
('elenatorres@example.com', 'elenatorres', 'clave654', 'Elena', 'Torres', 'Toledo', '369258147', '1973-09-18', 1, null),
('alejandroflores@example.com', 'alejandroflores', 'contraseña654', 'Alejandro', 'Flores', 'Zaragoza', '147852369', '1998-03-07', 2, null);



-- Insertar actividades
INSERT INTO actividades (nombre, descripcion, dia, ciudad, precio, hora_inicio, hora_fin, duracion_aprox, n_plazas, n_plazas_min, n_plazas_max, personal, transporte, material, preparacion_f, id_usuario_creador)
VALUES
('Fiesta de inauguración', 'Fiesta de inauguración del nuevo restaurante "Sabor del Sur"', '2024-05-10', 'Madrid', 25.00, '20:00:00', '01:00:00', '05:00:00', 50, 20, 60, true, false, true, 'media', 2),
('Torneo de ajedrez', 'Torneo de ajedrez abierto a jugadores de todas las edades y niveles', '2024-05-15', 'Barcelona', 10.00, '10:00:00', '18:00:00', '08:00:00', 30, 10, 40, false, false, false, 'alta', 4),
('Concierto benéfico', 'Concierto benéfico a favor de la lucha contra el cáncer infantil', '2024-05-20', 'Valencia', 15.00, '19:30:00', '22:30:00', '03:00:00', 100, 50, 120, true, true, false, 'baja', 6),
('Taller de pintura al óleo', 'Taller de pintura al óleo dirigido a principiantes y aficionados', '2024-05-25', 'Sevilla', 20.00, '15:00:00', '18:00:00', '03:00:00', 15, 5, 20, false, false, true, 'alta', 8),
('Excursión de senderismo', 'Excursión de senderismo por el Parque Natural de los Alcornocales', '2024-05-30', 'Málaga', 12.00, '09:00:00', '17:00:00', '08:00:00', 25, 10, 30, true, true, true, 'media', 10);




-- Insertar relaciones usuario_actividad
INSERT INTO usuarios_actividad (id_usuario, id_actividad) VALUES
(1, 1),
(2, 2), 
(3, 3), 
(4, 4), 
(5, 5), 
(6, 1), 
(7, 2), 
(8, 3), 
(9, 4), 
(10, 5); 
