/* =====================================================
   OfiExpress · JS compartido por todas las páginas
   - Datos de productos
   - Carro (se guarda en localStorage para compartirlo entre páginas)
   - Sesión simulada (solo frontend)
   - Toast de confirmación
   ===================================================== */

/* ================= DATOS ================= */

const CATEGORIAS = ["Escolar", "Oficina", "Escritura", "Pintura", "Escultura", "Impresoras", "Tecnología", "Regalos"];

// Si un producto tiene "antes", se considera en oferta (precio = precio actual)
const productos = [
  { id: 1,  nombre: "Cuaderno universitario 100 hojas",  cat: "Escolar",    marca: "Torre",        precio: 2990,  icono: "bi-journal-bookmark", imagen: "img/cuaderno_torre_100_hojas.jpg" },
  { id: 2,  nombre: "Set de lápices de colores x24",     cat: "Pintura",    marca: "Faber-Castell", precio: 5990,  icono: "bi-palette2", imagen: "img/Set_lápices_de_colores_x24.jpg" },
  { id: 3,  nombre: "Impresora multifuncional láser",    cat: "Impresoras", marca: "HP",           precio: 89990, icono: "bi-printer", imagen: "img/impresora_hp_laser.jpg" },
  { id: 4,  nombre: "Archivador oficio lomo ancho",      cat: "Oficina",    marca: "Rhein",        precio: 3490,  icono: "bi-archive", imagen: "img/Archivador_oficio.jpg" },
  { id: 5,  nombre: "Plasticina x12 colores",            cat: "Escultura",  marca: "Artel",        precio: 2490,  icono: "bi-box-seam", imagen: "img/Plasticina x12 colores.jpg" },
  { id: 6,  nombre: "Set de plumones caligráficos",      cat: "Escritura",  marca: "Stabilo",      precio: 6990,  icono: "bi-pencil", imagen: "img/Set de plumones caligráficos.jpg" },

  { id: 7,  nombre: "Lápiz pasta azul caja x12",         cat: "Escritura",  marca: "BIC",          precio: 3490,  icono: "bi-pen", imagen: "img/Lápiz pasta azul caja x12.jpg" },
  { id: 8,  nombre: "Destacadores pastel x6",            cat: "Escritura",  marca: "Stabilo",      precio: 4990,  icono: "bi-highlighter", imagen: "img/Destacadores pastel x6.jpg" },
  { id: 9,  nombre: "Mochila escolar 20 L",              cat: "Escolar",    marca: "Rhein",        precio: 17990, antes: 22990, icono: "bi-backpack2", imagen: "img/Mochila escolar 20 L.jpg" },
  { id: 10, nombre: "Regla 30 cm y set de escuadras",    cat: "Escolar",    marca: "Faber-Castell", precio: 1990,  icono: "bi-rulers", imagen: "img/Regla 30 cm y set de escuadras.jpg" },
  { id: 11, nombre: "Tijeras punta redonda",             cat: "Escolar",    marca: "Torre",        precio: 1290,  icono: "bi-scissors", imagen: "img/Tijeras punta redonda.jpg" },
  { id: 12, nombre: "Corchetera metálica",               cat: "Oficina",    marca: "Rhein",        precio: 4290,  icono: "bi-pin-angle", imagen: "img/Corchetera metálica.jpg" },
  { id: 13, nombre: "Resma papel carta 500 hojas",       cat: "Oficina",    marca: "HP",           precio: 5490,  icono: "bi-file-earmark-text", imagen: "img/Resma papel carta 500 hojas.jpg" },
  { id: 14, nombre: "Organizador de escritorio metalico",         cat: "Oficina",    marca: "Rhein",        precio: 7990,  icono: "bi-inboxes", imagen: "img/Organizador de escritorio metalico.jpg" },
  { id: 15, nombre: "Carpeta con acoclip x10",           cat: "Oficina",    marca: "Torre",        precio: 2990,  icono: "bi-folder", imagen: "img/carpeta con acoclip x10.jpg" },
  { id: 16, nombre: "Témperas x12 colores",              cat: "Pintura",    marca: "Artel",        precio: 3990,  icono: "bi-droplet-half", imagen: "img/Témperas x12 colores.jpg" },
  { id: 17, nombre: "Set de pinceles x6",                cat: "Pintura",    marca: "Proarte",      precio: 4490,  icono: "bi-brush", imagen: "img/Set de pinceles x6.jpg" },
  { id: 18, nombre: "Acuarela 24 pastillas",             cat: "Pintura",    marca: "Artel",        precio: 5490,  antes: 6490,  icono: "bi-palette", imagen: "img/Acuarela 24 pastillas.jpg" },
  { id: 19, nombre: "Greda para modelar 1 kg",           cat: "Escultura",  marca: "Artel",      precio: 3290,  icono: "bi-bricks", imagen: "img/Greda para modelar 1 kg.jpg" },
  { id: 20, nombre: "Herramientas de modelado x8",       cat: "Escultura",  marca: "Motarro",      precio: 4990,  icono: "bi-tools", imagen: "img/Herramientas de modelado x8.jpg" },
  { id: 21, nombre: "Portaminas 0,5 mm con minas",       cat: "Escritura",  marca: "Faber-Castell", precio: 2790,  icono: "bi-vector-pen", imagen: "img/Portaminas 0,5 mm con minas.jpg" },
  { id: 22, nombre: "Botella de tinta negra 65 ml",      cat: "Impresoras", marca: "Epson",        precio: 12990, icono: "bi-droplet-fill", imagen: "img/Botella de tinta negra 65 ml.jpg" },
  { id: 23, nombre: "Impresora multifuncional de tinta", cat: "Impresoras", marca: "Epson",        precio: 119990, antes: 139990, icono: "bi-printer-fill", imagen: "img/Impresora multifuncional de tinta.jpg" },
  { id: 24, nombre: "Calculadora científica",            cat: "Tecnología", marca: "Casio",        precio: 15990, icono: "bi-calculator", imagen: "img/Calculadora científica.jpg" },
  { id: 25, nombre: "Pendrive 64 GB",                    cat: "Tecnología", marca: "Kingston",     precio: 5990,  antes: 7990,  icono: "bi-usb-drive", imagen: "img/Pendrive 64 GB.jpg" },
  { id: 26, nombre: "Set de escritorio de madera",       cat: "Regalos",    marca: "Generico",        precio: 75990, icono: "bi-gift", imagen: "img/set de escritorio de madera.jpg" },
  { id: 27, nombre: "Agenda 2027 tapa dura",             cat: "Regalos",    marca: "Torre",        precio: 8990,  icono: "bi-calendar3", imagen: "img/Agenda 2027 tapa dura.jpg" },
];

const sugerencias = [
  { id: 101, nombre: "Goma de borrar blanca",  precio: 490,  icono: "bi-eraser" },
  { id: 102, nombre: "Corrector líquido 20ml", precio: 990,  icono: "bi-droplet" },
  { id: 103, nombre: "Post-it x100 hojas",     precio: 1490, icono: "bi-sticky" },
  { id: 104, nombre: "Caja de clips metálicos", precio: 790,  icono: "bi-paperclip" },
];

/* ================= UTILIDADES ================= */

function formatoCLP(valor) {
  return "$" + valor.toLocaleString("es-CL");
}

function buscarProducto(id) {
  return productos.find(p => p.id === id) || sugerencias.find(p => p.id === id);
}

/* ================= TARJETA DE PRODUCTO (inicio y listado) ================= */

function tarjetaProducto(p) {
  const descuento = p.antes ? Math.round((1 - p.precio / p.antes) * 100) : 0;
  return `
    <div class="product-card">
      <div class="product-thumb">
        ${descuento ? `<span class="badge-oferta">-${descuento}%</span>` : ""}
        ${p.imagen
  ? `<img src="${p.imagen}" alt="${p.nombre}" loading="lazy">`
  : `<i class="bi ${p.icono}"></i>`}
      </div>
      <div class="body">
        <div class="cat-tag">${p.cat}</div>
        <h3>${p.nombre}</h3>
        <div class="marca">${p.marca}</div>
        <div class="d-flex justify-content-between align-items-end mt-auto pt-2">
          <div>
            ${p.antes ? `<span class="price-old">${formatoCLP(p.antes)}</span>` : ""}
            <span class="price">${formatoCLP(p.precio)}</span>
          </div>
          <button class="btn-add" onclick="agregarAlCarro(${p.id})" aria-label="Añadir ${p.nombre} al carro">
            <i class="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
    </div>`;
}

/* ================= CARRO (persistente entre páginas) ================= */

const KEY_CARRITO = "ofiexpress_carrito";
const KEY_USUARIO = "ofiexpress_usuario";

function leerStorage(clave, porDefecto) {
  try {
    const raw = localStorage.getItem(clave);
    return raw ? JSON.parse(raw) : porDefecto;
  } catch (e) {
    return porDefecto;
  }
}

function escribirStorage(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
  } catch (e) { /* almacenamiento no disponible: el carro sigue en memoria */ }
}

let carrito = leerStorage(KEY_CARRITO, []); // {id, nombre, precio, icono, cantidad}

function guardarCarrito() {
  escribirStorage(KEY_CARRITO, carrito);
  actualizarBadge();
}

function actualizarBadge() {
  const badge = document.getElementById("cartBadge");
  if (badge) badge.textContent = carrito.reduce((acc, i) => acc + i.cantidad, 0);
}

function notificarCambio() {
  // Solo la página del carro define renderCarrito
  if (typeof renderCarrito === "function") renderCarrito();
}

function agregarAlCarro(id) {
  const producto = buscarProducto(id);
  if (!producto) return;

  const existente = carrito.find(i => i.id === id);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      icono: producto.icono,
      imagen: producto.imagen,
      cantidad: 1,
    });
  }
  guardarCarrito();
  notificarCambio();
  mostrarToast(`${producto.nombre} añadido al carro`);
}

function cambiarCantidad(id, delta) {
  const item = carrito.find(i => i.id === id);
  if (!item) return;
  item.cantidad += delta;
  if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.id !== id);
  }
  guardarCarrito();
  notificarCambio();
}

function eliminarDelCarro(id) {
  carrito = carrito.filter(i => i.id !== id);
  guardarCarrito();
  notificarCambio();
}

function vaciarCarro() {
  carrito = [];
  guardarCarrito();
  notificarCambio();
}

// Si el carro cambia en otra pestaña del navegador, se sincroniza aquí
window.addEventListener("storage", (e) => {
  if (e.key === KEY_CARRITO) {
    carrito = leerStorage(KEY_CARRITO, []);
    actualizarBadge();
    notificarCambio();
  }
});

/* ================= SESIÓN (simulada, solo frontend) ================= */

function obtenerUsuario() {
  return leerStorage(KEY_USUARIO, null);
}

function iniciarSesion(usuario) {
  escribirStorage(KEY_USUARIO, usuario);
  actualizarSesionNav();
}

function cerrarSesion() {
  try { localStorage.removeItem(KEY_USUARIO); } catch (e) {}
  actualizarSesionNav();
}

function actualizarSesionNav() {
  const enlace = document.getElementById("navSesion");
  const nombre = document.getElementById("navSesionNombre");
  if (!enlace || !nombre) return;
  const u = obtenerUsuario();
  if (u) {
    enlace.title = "Mi cuenta";
    enlace.querySelector("i").className = "bi bi-person-check-fill";
    nombre.textContent = u.nombre.split(" ")[0];
  } else {
    enlace.title = "Iniciar sesión";
    enlace.querySelector("i").className = "bi bi-person-circle";
    nombre.textContent = "";
  }
}

/* ================= TOAST ================= */

function asegurarToast() {
  if (document.getElementById("toastAdd")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="position-fixed bottom-0 end-0 p-3" style="z-index:1080;">
      <div id="toastAdd" class="toast toast-ofi" role="alert" aria-live="polite">
        <div class="d-flex">
          <div class="toast-body"><i class="bi bi-check-circle me-2"></i><span id="toastMsg"></span></div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar"></button>
        </div>
      </div>
    </div>`);
}

function mostrarToast(mensaje) {
  asegurarToast();
  document.getElementById("toastMsg").textContent = mensaje;
  const toastEl = document.getElementById("toastAdd");
  bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 1800 }).show();
}

/* ================= INIT COMÚN ================= */

actualizarBadge();
actualizarSesionNav();
