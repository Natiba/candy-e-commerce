const totalCarrito = document.getElementById('total');
console.log(totalCarrito);

let h2 = document.createElement('h2');
h2.textContent = localStorage.getItem('total'); // pedimos la key y nos va a devolver el value.  Lo traigo de local Storage

totalCarrito.appendChild(h2);

const nombre = document.getElementById('input_nombre');

const apellido = document.getElementById('apellido');
const direccion = document.getElementById('direccion');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
console.log(telefono);

const send = document.getElementById('btnSend');

send.addEventListener('click', () => {
    localStorage.setItem('nombre', nombre.value);
    localStorage.setItem('apellido', apellido.value);
    localStorage.setItem('direccion', direccion.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('telefono', telefono.value);
    window.location.href = './assets/html/carrito2.html'
})