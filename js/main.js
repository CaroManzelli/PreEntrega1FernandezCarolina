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

let carrito = [];
  let precioTotal = 0;

  function agregarProductoAlCarrito(producto) {
    alert("Detalles del producto:\n - Nombre del producto: " + producto.nombre + "\n - Precio del producto: $" + producto.precio + "\n Colores disponibles: " + producto.colores.join(", "));
       
    const colorSeleccionado = prompt("Ingresa el color que deseas agregar al carrito:");
    
    if (producto.colores.includes(colorSeleccionado)) {
      carrito.push({...producto, color: colorSeleccionado});
      precioTotal += producto.precio;
      alert("Se agregó el producto " + producto.nombre + " (" + colorSeleccionado + ") al carrito.");
    } else {
      alert("El color seleccionado no está disponible para este producto.");
    }
  }
  
  function consultarProductosEnCarrito() {
    if (carrito.length == 0) {
      console.log("El carrito está vacío.");
    } else {
      alert("Productos en el carrito:");
      carrito.forEach(producto => alert(producto.nombre + "  $ " + producto.precio));
      alert("Precio total: $ " + precioTotal);
    }
  }
    while (true) {
    const opcion = prompt("Bienvenid@ " + nombre + ", elige una opción:\n 1. Ver productos\n 2. Agregar producto al carrito\n 3. Ver productos en carrito\n 4.Salir");
    if (opcion == "1") {
        alert("elegi una de las siguientes opciones")
        productos.forEach(element => {
            alert(
                "- ID del producto: " + element.id + "\n" +
                "- Nombre del producto: " + element.nombre + "\n" +
                "- Precio del producto: $" + element.precio + "\n\n");
        })
    } else if (opcion == "2") {
      const idProducto = prompt("Ingrese el numero del producto a agregar al carrito:");
      const productoEncontrado = productos.find(producto => producto.id == idProducto);
      if (productoEncontrado) {
        agregarProductoAlCarrito(productoEncontrado);
      } else {
        alert("No se encontró el producto " + idProducto);
      }
    } else if (opcion == "3") {
      consultarProductosEnCarrito();
     }else if (opcion == "4") {
      console.log("¡Hasta luego!" + nombre);
      break;
    } else {
      console.log("Opción no válida.");
    }
  }  
      
