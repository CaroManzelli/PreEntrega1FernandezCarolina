const carrito  = [];
Cherry.cantidad = 0;
Ocean.cantidad = 0;
Mary.cantidad = 0;
Cindy.cantidad = 0;
Mate.cantidad = 0;

const btnBuy = document.querySelectorAll('.comprar');
const carritoElemento = document.querySelector('#carrito');
function actualizarCarrito() {
  carritoElemento.innerHTML = '';
  carrito.forEach(producto => {
    const productoElemento = document.createElement('div');
    productoElemento.innerHTML = `
      <p>${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: ${producto.precio * producto.cantidad}</p>
    `;
    carritoElemento.appendChild(productoElemento);
    guardaEnLS()
  })}
    function guardaEnLS(){
      localStorage.setItem('carrito', JSON.stringify(carrito))
  }
  let carritoDeLS= JSON.parse(localStorage.getItem("carrito"))
  console.log(carritoDeLS);
 
  function actualizarCarrito() {
    carritoElemento.innerHTML = '';
    carrito.forEach(producto => {
      const productoElemento = document.createElement('div');
      productoElemento.innerHTML = `
        <p>${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: ${producto.precio * producto.cantidad}</p>
      `
      guardaEnLS();
      carritoElemento.appendChild(productoElemento);
    });
  }
  function agregarProductoAlCarrito(nombre) {
    const productoExistente = carrito.find(producto => producto.nombre === nombre);
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      const producto = productos.find(producto => producto.nombre === nombre);
      if (producto) {
        producto.cantidad = 1;
        carrito.push(producto)
      }
    }actualizarCarrito();
  }
  btnBuy.forEach(btn => {
    const productName = btn.dataset.nombre;
    btn.addEventListener('click', () => agregarProductoAlCarrito(productName));
  });
  const btnCarrito = document.querySelector('#btnCarrito');
  btnCarrito.addEventListener('click', () => {
    if (carritoElemento.style.display === 'none') {
      carritoElemento.style.display = 'block';
    } else {
      carritoElemento.style.display = 'none';
    }
  });