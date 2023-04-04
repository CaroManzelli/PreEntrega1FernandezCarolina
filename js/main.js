let nombre = prompt("Ingresa tu nombre")
function Producto(id, nombre, tipo, ocasion, precio, colores) {
    this.id = id
    this.nombre = nombre
    this.tipo = tipo
    this.ocasion = ocasion
    this.precio = precio
    this.colores = colores
}


const productos = [];
const Cherry = new Producto(1, "Cherry", "vestido", "dia", 4000, ["cereza", "rojo", "amarillo", "ciruela"]);
productos.push(Cherry)
const Ocean = new Producto(2, "Ocean", "vestido", "noche", 6000, ["azul", "rojo", "vino", "beige", "rosa", "negro", "blanco"]);
productos.push(Ocean)
const Mary = new Producto(3, "Mary", "blazer", "dia", 7500, ["rosa", "beige", "amarillo", "celeste"]);
productos.push(Mary)
const Cindy = new Producto(4, "Cindy", "blazer", "noche", 7000, ["fuscia", "rosa", "amarillo", "rojo", "azul"]);
productos.push(Cindy)
const Mate = new Producto(5, "Mate", "calza", "deporte", 2700, ["negro", "blanco", "gris"]);
productos.push(Mate)


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
      
