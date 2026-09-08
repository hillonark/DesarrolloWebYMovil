const TAPE_COLORS = ["var(--mustard)", "var(--sage)", "var(--rose)"];

async function runQuery(query, variables) {
  const res = await fetch("/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  return res.json();
}

function money(n) {
  return `$${n.toLocaleString("es-CL")}`;
}

function renderCatalog(productos) {
  const grid = document.getElementById("catalog-grid");
  grid.innerHTML = "";
  productos.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "product-card";
    const low = p.stock <= 10;
    card.innerHTML = `
      <div class="tape" style="background:${TAPE_COLORS[i % TAPE_COLORS.length]}"></div>
      <p class="product-category">${p.categoria}</p>
      <h3 class="product-name">${p.nombre}</h3>
      <p class="product-desc">${p.descripcion ?? ""}</p>
      <div class="product-meta">
        <span class="product-price">${money(p.precio)}</span>
        <span class="product-stock ${low ? "low" : ""}">${p.stock} en stock</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

async function loadCatalog(categoria = "") {
  const query = `
    query ProductosCatalogo($categoria: String) {
      productos(categoria: $categoria) {
        id
        nombre
        categoria
        precio
        stock
        descripcion
      }
    }
  `;
  const { data } = await runQuery(query, { categoria: categoria || null });
  renderCatalog(data.productos);
}

async function loadCategorias() {
  const { data } = await runQuery(`query { categorias }`);
  const select = document.getElementById("categoria-select");
  data.categorias.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    select.appendChild(opt);
  });
  select.addEventListener("change", (e) => loadCatalog(e.target.value));
}

async function runHeroDemo() {
  const query = `query {
  productos(categoria: "Cuadernos") {
    nombre
    precio
    stock
  }
}`;
  const { data } = await runQuery(query);
  document.querySelector("#demo-result code").textContent = JSON.stringify(
    { data },
    null,
    2
  );
}

// --- Consola de operaciones de ejemplo ---

const OPERATIONS = [
  {
    label: "Todos los productos",
    query: `query {\n  productos {\n    nombre\n    categoria\n    precio\n  }\n}`,
  },
  {
    label: "Filtrar por categoría",
    query: `query {\n  productos(categoria: "Cintas") {\n    nombre\n    precio\n    stock\n  }\n}`,
  },
  {
    label: "Un producto por id",
    query: `query {\n  producto(id: "3") {\n    nombre\n    descripcion\n    colores\n  }\n}`,
  },
  {
    label: "Categorías",
    query: `query {\n  categorias\n}`,
  },
  {
    label: "Mutation: crear producto",
    query: `mutation {\n  crearProducto(\n    nombre: "Corrector en Cinta"\n    categoria: "Accesorios"\n    precio: 2600\n    stock: 50\n  ) {\n    id\n    nombre\n    stock\n  }\n}`,
  },
  {
    label: "Mutation: actualizar stock",
    query: `mutation {\n  actualizarStock(id: "1", stock: 12) {\n    id\n    nombre\n    stock\n  }\n}`,
  },
];

function setupConsole() {
  const container = document.getElementById("console-buttons");
  const queryBox = document.querySelector("#console-query code");
  const resultBox = document.querySelector("#console-result code");

  OPERATIONS.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op.label;
    btn.addEventListener("click", async () => {
      container
        .querySelectorAll("button")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      queryBox.textContent = op.query;
      resultBox.textContent = "consultando…";

      const json = await runQuery(op.query);
      resultBox.textContent = JSON.stringify(json, null, 2);

      // si la operación tocó el catálogo (mutation), refrescamos la grilla
      if (op.query.trim().startsWith("mutation")) {
        loadCatalog(document.getElementById("categoria-select").value);
      }
    });
    container.appendChild(btn);
    if (i === 0) btn.click();
  });
}

function renderSchema() {
  // Mirror legible del esquema definido en schema.js
  document.getElementById("schema-box").textContent = `type Producto {
  id: ID!
  nombre: String!
  categoria: String!
  precio: Float!
  stock: Int!
  descripcion: String
  colores: [String!]!
}

type Query {
  productos(categoria: String): [Producto!]!
  producto(id: ID!): Producto
  categorias: [String!]!
}

type Mutation {
  crearProducto(
    nombre: String!
    categoria: String!
    precio: Float!
    stock: Int!
    descripcion: String
    colores: [String!]
  ): Producto!

  actualizarStock(id: ID!, stock: Int!): Producto
}`;
}

runHeroDemo();
loadCatalog();
loadCategorias();
setupConsole();
renderSchema();