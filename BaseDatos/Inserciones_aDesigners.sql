-- Insertar en tabla categoria
INSERT INTO `aDesigners`.`categoria` (`id`, `tipo`) VALUES (NULL, "Productos");
INSERT INTO `aDesigners`.`categoria` (`id`, `tipo`) VALUES (NULL, "Servicios");

-- Insertar en tabla producto
INSERT INTO `aDesigners`.`producto` (`id`, `nombre`, `precio`, `img`, `img2`, `descripcion`, `descripcion2`,  `categoria_id`) 
VALUES (NULL, "Linear Style", 15000,"prod1img1.jpg", "prod1img2.jpg","Crea tu página web con un diseño simple y elegante en tendencia minimalista."
, "Simple no significa aburrido, este diseño permite dar un toque relevante y contraste a tus productos para que tomen un papel central.
La página cuenta con una base color azul y colores pastel para complementar. Permite observar los productos con gran detalle y es ampliamente adaptable a tus necesidades concretas de diseño.
Cuenta con fuentes únicas y superposiciones geométricas que dan personalidad a la página y la hacen visualmente atractiva", 1);
INSERT INTO `aDesigners`.`producto` (`id`, `nombre`, `precio`, `img`, `img2`, `descripcion`, `descripcion2`,  `categoria_id`) 
VALUES (NULL, "Naturaleza Calma Elements", 13000, "prod2img1.jpg", "prod2img2.jpg","Es una página hermosa y fresca que da espacio a las imágenes."
, "Ideal para hacer evidente que la empresa confía en sus diseños y productos.
Se ajusta muy bien a categorías de belleza, skincare o productos orgánicos, ya que su aspecto cercano a la naturaleza hará sentir al usuario la experiencia completa y diferente que estás buscando.
Cuenta con un footer moderno que deja ver toda la información necesaria por medio de sus tres columnas.",  1);
INSERT INTO `aDesigners`.`producto` (`id`, `nombre`, `precio`, `img`, `img2`, `descripcion`, `descripcion2`,  `categoria_id`) 
VALUES (NULL, "Landing Word", 19000, "prod3img1.jpg", "prod3img2.jpg", "Tema responsivo, estructurado de forma armoniosa que incluye tonos oscuros."
, "Su facilidad de navegación ofrece varias funciones útiles para el usuario sin saturar, ni quitar el foco a los productos. Si necesitas un aspecto profesional y vanguardista, esta página es ideal, ya que cuenta con las tendencias actuales de diseño.
El sitio organiza el contenido de forma entretenida porque se compone de una combinación entre lo clásico y lo más actual, con colores que marcan acentos interesantes.
",  1);
INSERT INTO `aDesigners`.`producto` (`id`, `nombre`, `precio`, `img`, `img2`, `descripcion`, `descripcion2`,  `categoria_id`)
VALUES (NULL, "Simple Store", 10000, "prod4img1.jpg", "prod4img2.jpg","Breve, agradable y directo, esto es lo que representa el estilo de esta página."
,"el espacio en blanco permite que sus diseños y el texto llamen la atención del lector, esto ayuda a una mejor legibilidad, especialmente en dispositivos móviles, es importante que la parte visual sea sencilla para que las imágenes capturen la atención, permitiendo incluir llamativas fotografías en primer plano.
Su coherencia ayuda a los visitantes a navegar fácilmente en el sitio, facilitando la exploración de selecciones.", 1);
INSERT INTO `aDesigners`.`producto` (`id`, `nombre`, `precio`, `img`, `img2`, `descripcion`, `descripcion2`,  `categoria_id`)
VALUES (NULL, "Creative Spark", 13000, "prod5img1.jpg", "prod5img2.jpg","En términos de experiencia del usuario, esta estructura es una opción increíble.", "tiene un diseño intuitivo que impulsa a navegar por diferentes partes de la página con contenido que se interrelaciona.  Es una tendencia en diseño web atractivo al usuario de organización en bloques y con tipografía legible.
Da prioridad a una imagen fija resaltando la presentación del producto. Cuenta con características muy peculiares como la combinación de colores que realmente captura su mirada.",  1);
INSERT INTO `aDesigners`.`producto` (`id`, `nombre`, `precio`, `img`, `img2`, `descripcion`, `descripcion2`,  `categoria_id`)
VALUES (NULL, "Introducción web y Actualización", 8000, "servicio1img1.jpg", "servicio1img2.jpg","Recibirás una propuesta de diseño de acuerdo al giro de tu negocio.
", "te llevaremos de la mano en todo el proceso. Actualización de diseño para tus páginas principales dándoles mejor vista y que se vean frescas en todo momento, crea una sensación de vanguardia en tus clientes.
El servicio consiste en una actualización mensual durante un año",  2);
INSERT INTO `aDesigners`.`producto` (`id`, `nombre`, `precio`, `img`, `img2`, `descripcion`, `descripcion2`,  `categoria_id`) 
VALUES (NULL, "Simplifica la administración", 9000, "servicio2img1.jpg", "servicio2img2.jpg","administra tu negocio de forma eficiente.", "Con una robusta plataforma que te permitirá lograr tus objetivos.
Imprime y paga rápidamente las etiquetas de envío, directamente desde tu tienda en línea. Haz envíos a precios competitivos a todos los rincones de tu país, con marcas líderes en la industria como Fedex o Estafeta. 
Control total de tus pagos online. Gestiona todas las transacciones desde un solo lugar, administra tus transacciones comerciales desde un panel sencillo en el que tendrás control total de todos tus pagos.
Obtén información y datos precisos monitoreando el rendimiento de tus ventas con análisis detallados de tu tienda online, te detallamos todos tus ingresos, campañas de marketing, bases de clientes y productos más vendidos.
",  2);
-- Insertar en tabla Usuario
INSERT INTO `aDesigners`.`usuario` (`id`, `nombre`, `correo`, `tel`, `contrasena`) VALUES (NULL, "Omar Martinez", "omartinez2343@gmail.com", "6394657312", "pajaroazul2");
INSERT INTO `aDesigners`.`usuario` (`id`, `nombre`, `correo`, `tel`, `contrasena`) VALUES (NULL, "Jesus Lerma", "jesusomartrco@hotmail.com", "6391234512", "lerma1995");
INSERT INTO `aDesigners`.`usuario` (`id`, `nombre`, `correo`, `tel`, `contrasena`) VALUES (NULL, "Edir Beltran", "superedir12pro@gmail.com", "6148761232", "ireliaflow");
INSERT INTO `aDesigners`.`usuario` (`id`, `nombre`, `correo`, `tel`, `contrasena`) VALUES (NULL, "Bryan Alonso", "noobmaster69thortillero@gmail.com", "6564531232", "diosdeltrueno");
INSERT INTO `aDesigners`.`usuario` (`id`, `nombre`, `correo`, `tel`, `contrasena`) VALUES (NULL, "Fernando Montemayor", "fermontegrande@hotmail.com", "6291102343", "Fer34SD");

-- Insertar en tabla Ventas
INSERT INTO `aDesigners`.`ventas` (`id`, `fecha`, `totalventa`, `producto_id`, `categoria_id`, `usuario_id`)
VALUES (NULL, "2022-07-05", 19000, 3, 1, 3);
INSERT INTO `aDesigners`.`ventas` (`id`, `fecha`, `totalventa`, `producto_id`, `categoria_id`, `usuario_id`)
VALUES (NULL, "2022-06-13", 8000, 6, 2, 4);
INSERT INTO `aDesigners`.`ventas` (`id`, `fecha`, `totalventa`, `producto_id`, `categoria_id`, `usuario_id`)
VALUES (NULL, "2022-07-01", 10000, 4, 1, 2);
INSERT INTO `aDesigners`.`ventas` (`id`, `fecha`, `totalventa`, `producto_id`, `categoria_id`, `usuario_id`)
VALUES (NULL, "2022-01-25", 9000, 7, 2, 1);
INSERT INTO `aDesigners`.`ventas` (`id`, `fecha`, `totalventa`, `producto_id`, `categoria_id`, `usuario_id`)
VALUES (NULL, "2022-05-16", 15000, 1, 1, 5);