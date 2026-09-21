# OfiExpress

Sitio web de una tienda de papelería, oficina y artículos escolares. Es un proyecto **frontend** (HTML, CSS y JavaScript, sin backend) para el curso de Desarrollo Web y Móvil.

Empezó como una sola página con el carro en un panel emergente y evolucionó a un sitio de varias páginas, con productos con fotos, carro persistente e inicio de sesión simulado.

## Tecnologías

- HTML5, CSS3 y JavaScript (sin frameworks)
- [Bootstrap 5.3.3](https://getbootstrap.com/) (cargado por CDN)
- [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/) (cargado por CDN)
- Tipografías Google Fonts: *Space Grotesk* y *Work Sans*
- `localStorage` del navegador para guardar el carro y la sesión

## Estructura del proyecto

```
ofiexpress/
├── index.html        Inicio: portada, carrusel de categorías y productos destacados
├── productos.html    Listado con búsqueda, filtros y orden
├── carrito.html      Carro de compras en su propia página
├── login.html        Iniciar sesión / Crear cuenta
├── css/
│   └── estilos.css   Estilos compartidos (paleta y estética del diseño original)
├── js/
│   └── app.js        Datos de productos, carro, sesión y avisos (toast)
└── img/              Fotos de los 27 productos
```

## Cómo ejecutarlo

No requiere instalación. Elige una opción:

1. **Doble clic en `index.html`.** Funciona, pero en Firefox el carro puede no mantenerse entre páginas.
2. **Live Server (VS Code).** Instala la extensión *Live Server*, haz clic derecho sobre `index.html` y elige *Open with Live Server*.
3. **Servidor de Python.** Desde la carpeta del proyecto: `python -m http.server 8000` y abre `http://localhost:8000`.
4. **GitHub Pages.** En *Settings → Pages*, elige la rama `main` y la carpeta `/ (root)`.

Se necesita conexión a internet, porque Bootstrap, los íconos y las tipografías se cargan desde CDN.

## Funcionalidades

| Página | Qué hace |
|---|---|
| **Inicio** | Portada, carrusel de categorías con enlaces a los filtros y los 6 productos destacados. |
| **Productos** | 27 productos con búsqueda (sin distinguir tildes), filtros por categoría y marca, "Solo ofertas" y orden por precio o nombre. Los filtros quedan en la URL (por ejemplo `productos.html?cat=Oficina`). |
| **Carro** | Cantidades editables, eliminar productos, vaciar carro, total, sugerencias rápidas y botón de pago. |
| **Login** | Formulario de inicio de sesión y de registro con validación. Al iniciar, el ícono de la barra muestra el nombre. |

Detalles a tener en cuenta:

- El **carro se conserva entre páginas** (clave `ofiexpress_carrito` en `localStorage`) y se sincroniza entre pestañas.
- El **inicio de sesión es simulado**: acepta cualquier correo válido con contraseña de 6 o más caracteres. No se conecta a ningún servidor y no guarda la contraseña (clave `ofiexpress_usuario`).
- "Ir a pagar" sin sesión iniciada lleva al login y luego devuelve al carro. Con sesión, muestra un aviso, porque todavía no existe la página de pago.
- Los productos con precio anterior (`antes`) se muestran como oferta, con su porcentaje de descuento.

## Historial de ediciones

### Versión 1 · Página única (`frontendProyectoDWM.html`)
- Todo el sitio en un solo archivo HTML.
- Carro en un panel emergente (*offcanvas*).
- Definió la paleta y la estética que se mantienen hoy: verdes azulados (`#406868`, `#00A9A9`, `#237A7A`), fondo tipo cuaderno rayado, tarjetas con esquina cortada y tipografías Space Grotesk y Work Sans.

### Versión 2 · Sitio de varias páginas
- El sitio se separó en cuatro páginas: `index.html`, `productos.html`, `carrito.html` y `login.html`.
- El carro pasó de panel emergente a una página propia.
- Se creó la página de productos con filtros y se pasó de 6 a 27 productos.
- El inicio de sesión quedó en su propia página.
- El CSS y el JavaScript se movieron a `css/estilos.css` y `js/app.js`, compartidos por las cuatro páginas.
- La paleta y la estética se mantuvieron idénticas.

### Versión 3 · Fotos de productos y ajustes de datos

**Fotos**
- Nueva carpeta `img/` con 27 fotos, una por producto.
- `js/app.js`: cada producto tiene ahora un campo `imagen`. Las tarjetas muestran la foto y, si un producto no la tiene, vuelven a mostrar su ícono.
- `js/app.js`: al agregar un producto al carro, también se guarda su foto (`imagen: producto.imagen`).
- `carrito.html`: los ítems del carro y las sugerencias muestran la foto si existe, o el ícono si no.
- `css/estilos.css`: nuevas reglas para las imágenes, con `object-fit: contain` para que la foto se vea completa, sin recortes.

**Ajustes en los datos de `js/app.js`**

| Producto | Cambio |
|---|---|
| Organizador de escritorio (id 14) | El nombre pasó a "Organizador de escritorio metalico". |
| Greda para modelar 1 kg (id 19) | La marca pasó de Proarte a Artel. |
| Herramientas de modelado x8 (id 20) | La marca pasó de Proarte a Motarro. |
| Set de escritorio de madera (id 26) | La marca pasó de Rhein a Generico y el precio de $14.990 a $75.990. |

Como el filtro de marcas se arma solo a partir de los productos, ahora incluye a *Motarro* y *Generico*, y los contadores de *Proarte* y *Rhein* bajaron.

## Notas

- Los precios y las marcas son datos de ejemplo para el proyecto.
- Las sugerencias del carro (goma, corrector, post-it y clips) todavía usan ícono; sus fotos se pueden agregar con el campo `imagen`.
- Algunas fotos pesan bastante, por ejemplo `Archivador_oficio.jpg` (unos 620 KB) y `Herramientas de modelado x8.jpg` (unos 375 KB). Comprimirlas a menos de 100 KB acelera la carga.
- En GitHub Pages las mayúsculas y las tildes de los nombres de archivo importan, así que las rutas en `app.js` deben coincidir exactamente con los nombres de `img/`.
- Los nombres con espacios y tildes funcionan, pero conviene evitarlos en proyectos futuros (por ejemplo `set-lapices-colores.jpg`).

## Autor

**hillonark**
