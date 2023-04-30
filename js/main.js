const carrito  = [];
function guardaEnLS(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}
Cherry.cantidad = 0;
Ocean.cantidad = 0;
Mary.cantidad = 0;
Cindy.cantidad = 0;
Mate.cantidad = 0;

const btnBuy = document.querySelectorAll('.comprar');
const carritoElemento = document.querySelector('#carrito');

let carritoDeLS = JSON.parse(localStorage.getItem('carrito'));
console.log(carritoDeLS);

function actualizarCarrito() {
  carritoElemento.innerHTML = '';
  let totalCarrito = 0;
  carritoDeLS.forEach((producto, index) => {
    const productoElemento = document.createElement('div');
    const precioProd = producto.precio * producto.cantidad;
    totalCarrito += precioProd;
    productoElemento.innerHTML = `
      <li class="lista">${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: ${precioProd}</li>
      <button class="eliminar" data-index="${index}">-</button>
    `;
    carritoElemento.appendChild(productoElemento);
  });
  const totalElemento = document.createElement('div');
  totalElemento.innerHTML = `<li> Total: ${totalCarrito} </li>
  <button id="vaciarCart"> Vaciar carrito </button>
  <button> Comprar </button>`;
  carritoElemento.appendChild(totalElemento);
  const btnDelate = document.querySelector('#vaciarCart');
btnDelate.addEventListener('click', ()=>{
  Swal.fire({
    title: 'Vaciar carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si!'
  }).then((result) => {
    if (result.isConfirmed) {
      carritoDeLS=[];
      actualizarCarrito()
      Swal.fire(
        'Vacío!',
        'El carrito se vació con éxito',
        'success'
      )
    }
  })
});
  
  const botonesEliminar = document.querySelectorAll('.eliminar');
  botonesEliminar.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = btn.dataset.index;
      if (carritoDeLS[index].cantidad > 1) {
        carritoDeLS[index].cantidad--;
      } else {
        carritoDeLS.splice(index, 1);
      }
      guardarEnLS();
      actualizarCarrito();
    });
  });
}
actualizarCarrito();
function agregarProductoAlCarrito(nombre) {
  let productoExistente = carritoDeLS.find((producto) => producto.nombre === nombre);
  if (productoExistente) {
    productoExistente.cantidad++;
     
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500})

  } else {
    let producto = productos.find((producto) => producto.nombre === nombre);
    if (producto) {
      producto.cantidad = 1;
      carritoDeLS.push(producto);
      
 Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Producto agregado al carrito',
  showConfirmButton: false,
  timer: 1500
})}
    }
  
  guardarEnLS();
  actualizarCarrito();
}

btnBuy.forEach((btn) => {
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


function guardarEnLS() {
  localStorage.setItem('carrito', JSON.stringify(carritoDeLS));

 }

