let nombre = prompt("Ingresa tu nombre")
let opcion = prompt("Bienvenid@ " + nombre + ", ¿Buscas algo en especial?\n 1. Solo chusmear\n 2. Busco Algo puntual")
if (opcion == "1") {
    console.log("muestra toda la tienda")
} else if (opcion == "2") {
    let opcion2 = prompt("¿Qué estás buscando?\n 1. Algo para el día\n 2.Algo para la noche\n 3. Algo formal\n 4.Algo sport ")
    switch (opcion2) {
        case "1":
            console.log("muestra items con la clase dia");
            break;
        case "2":
            console.log("muestra items con la clase noche");
            break;
        case "3":
            console.log("muestra items con la clase formal");
            break;
        case "4":
            console.log("muestra items con la clase sport");
            break;
        default:
            alert("Opción no válida");
            break;
    }
} else {
    alert("Opción no válida");
}
