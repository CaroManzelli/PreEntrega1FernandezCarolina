const carrito = [];
function guardaEnLS() {
  localStorage.setItem('carrito', JSON.stringify(carrito))
}


let productos = [];
fetch("./data/datos.json")
  .then(response => response.json())
  .then(data => {
    productos = data;
    actualizarCarrito();
   
btnBuy.forEach((btn) => {
  const productName = btn.dataset.nombre;
  btn.addEventListener('click', () => agregarProductoAlCarrito(productName));
  
guardarEnLS();
actualizarCarrito();
});
if (carritoDeLS.length > 0) {
  const confBuy = document.querySelector('#confBuy');
    confBuy.addEventListener('click', async () => {
      if (carritoDeLS.length > 0) {
        carritoDeLS = [];
        guardaEnLS();
        actualizarCarrito();
        const { value: email } = await Swal.fire({
          title: 'Ingresa tu e-mail',
          input: 'email',
          inputLabel: 'Te enviaremos el detalle para seguir con tu compra',
          inputPlaceholder: 'example@hotmail.com'
        });
        if (email) {
          Swal.fire(`Se enviaron los datos de compra a: ${email}`);
        }
      }
    });
  };

  })
const btnBuy = document.querySelectorAll('.comprar');
const carritoElemento = document.querySelector('#carrito');

let carritoDeLS = JSON.parse(localStorage.getItem('carrito')) || [];
console.log(carritoDeLS);
//actualizar carrito
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
  <button id="confBuy"> Comprar </button>`;
  carritoElemento.appendChild(totalElemento);
  //vaciar carrito
  const btnDelate = document.querySelector('#vaciarCart');
  btnDelate.addEventListener('click', () => {
    Swal.fire({
      title: 'Vaciar carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        carritoDeLS = [];
        guardaEnLS()
        actualizarCarrito()
        Swal.fire(
          'Vacío!',
          'El carrito se vació con éxito',
          'success'
        )
      }
    })
  });
//eliminar obj carrito de a uno
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
//agregar al carrito
function agregarProductoAlCarrito(nombre) {
  let productoExistente = carritoDeLS.find((producto) => producto.nombre === nombre);
  if (productoExistente) {
    productoExistente.cantidad++;
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Producto agregado al carrito'
    })
  } else {
    let producto = productos.find((producto) => producto.nombre === nombre);
    if (producto) {
      producto.cantidad = 1;
      carritoDeLS.push(producto);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Producto agregado al carrito'
      })
  }
}

guardarEnLS();
actualizarCarrito();
}

btnBuy.forEach((btn) => {
  const productName = btn.dataset.nombre;
  btn.addEventListener('click', () => agregarProductoAlCarrito(productName));
  
guardarEnLS();
actualizarCarrito();
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

