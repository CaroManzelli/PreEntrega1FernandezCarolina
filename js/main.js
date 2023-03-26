let nombre = prompt("Ingresa tu nombre")
function mostrar (mensaje){
    console.log(mensaje)
}
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


let vestidoAzul = 3000
let calzaDep = 1500
let remeraVerde = 1600
let opCompra = prompt(nombre + " que deseas comprar?:\n 1. Vestido Azul : $3000\n 2. Calza Deportiva : $1500\n 3.Remera Verde : $1600")
if (opCompra == "1") {
    let cantidad = prompt("elegi la cantidad")
    multi(vestidoAzul, cantidad)
} else if (opCompra == "2") {
    let cantidad = prompt("elegi la cantidad")
    multi(calzaDep, cantidad)
} else if (opCompra == "3") {
    let cantidad = prompt("elegi la cantidad")
    multi(remeraVerde, cantidad)
} else {
    alert("Opción no válida");
}