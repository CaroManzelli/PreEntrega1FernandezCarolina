function Producto(id, nombre, tipo, ocasion, precio, colores) {
    this.id = id
    this.nombre = nombre
    this.tipo = tipo
    this.ocasion = ocasion
    this.precio = precio
    this.colores = colores
}


const productos = [];
const Cherry = new Producto(1, "Cherry", "vestido", "dia", 4000, ["cereza", "rosa", "amarillo", "ciruela"]);
productos.push(Cherry)
const Ocean = new Producto(2, "Ocean", "vestido", "noche", 6000, ["azul", "rojo", "vino", "beige", "rosa", "negro", "blanco"]);
productos.push(Ocean)
const Mary = new Producto(3, "Mary", "blazer", "dia", 7500, ["rosa", "beige", "amarillo", "celeste"]);
productos.push(Mary)
const Cindy = new Producto(4, "Cindy", "blazer", "noche", 7000, ["fucsia", "rosa", "amarillo", "rojo", "azul"]);
productos.push(Cindy)
const Mate = new Producto(5, "Mate", "calza", "deporte", 2700, ["negro", "blanco", "gris"]);
productos.push(Mate)

const card = document.querySelectorAll(".card")
const cherryCard = card[0]
const oceanCard = card[1]
const maryCard = card[2]
const cindyCard = card[3]
const mateCard = card[4]


const cindychange = document.getElementById('cindyChange');
const cindyButtons = document.querySelectorAll('.cindyColors button');

cindyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const color = button.textContent.toLowerCase();
    const product = productos.find((producto) => producto.nombre === 'Cindy');
    if (product.colores.includes(color)) {
      const imgSrc = `./assets/catalogo/cindy/${color}.png`;
      cindychange.src = imgSrc;
    }
  });
});

const matechange = document.getElementById('mateChange');
const mateButtons = document.querySelectorAll('.mateColors button');

mateButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const color = button.textContent.toLowerCase();
    const product = productos.find((producto) => producto.nombre === 'Mate');
    if (product.colores.includes(color)) {
      const imgSrc = `./assets/catalogo/mate/${color}.png`;
      matechange.src = imgSrc;
    }
  });
});

const maryChange = document.getElementById('maryChange');
const maryButtons = document.querySelectorAll('.maryColors button');

maryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const color = button.textContent.toLowerCase();
    const product = productos.find((producto) => producto.nombre === 'Mary');
    if (product.colores.includes(color)) {
      const imgSrc = `./assets/catalogo/mary/${color}.png`;
      maryChange.src = imgSrc;
    }
  });
});

const oceanChange = document.getElementById('oceanChange');
const oceanButtons = document.querySelectorAll('.oceanColors button');

oceanButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const color = button.textContent.toLowerCase();
    const product = productos.find((producto) => producto.nombre === 'Ocean');
    if (product.colores.includes(color)) {
      const imgSrc = `./assets/catalogo/ocean/${color}.png`;
      oceanChange.src = imgSrc;
    }
  });
});


const cherryChange = document.getElementById('cherryChange');
const cherryButtons = document.querySelectorAll('.cherryColors button');

cherryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const color = button.textContent.toLowerCase();
    const product = productos.find((producto) => producto.nombre === 'Cherry');
    if (product.colores.includes(color)) {
      const imgSrc = `./assets/catalogo/cherry/${color}.png`;
      cherryChange.src = imgSrc;
    }
  });
});