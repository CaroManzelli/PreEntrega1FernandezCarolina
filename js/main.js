let nombre = prompt("Ingresa tu nombre")
function mostrar(mensaje) {
    console.log(mensaje)
}
function multi(n1, n2) {
    let result = n1 * n2;
    return result
}

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


let opcion = prompt("Bienvenid@ " + nombre + ", ¿Buscas algo en especial?\n 1. Solo chusmear\n 2. Busco Algo puntual")
if (opcion == "1") {
    console.log("muestra toda la tienda")
} else if (opcion == "2") {
    let opcion2 = prompt("¿Qué estás buscando?\n 1. Algo para el día\n 2.Algo para la noche\n 3. Algo formal\n 4.Algo sport ")
    switch (opcion2) {
        case "1":
            mostrar("muestra items con la clase dia");
            break;
        case "2":
            mostrar("muestra items con la clase noche");
            break;
        case "3":
            mostrar("muestra items con la clase formal");
            break;
        case "4":
            mostrar("muestra items con la clase sport");
            break;
        default:
            alert("Opción no válida");
            break;
    }
} else {
    alert("Opción no válida");
}


function multi(n1, n2) {
    let result = n1 * n2;
    alert("el total es " + result);

}

