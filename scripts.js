let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('carrito');
    const totalElemento = document.getElementById('total');
    listaCarrito.innerHTML = '';
    total = 0;

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    totalElemento.textContent = total.toFixed(2);
}

document.getElementById('form-pedido').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;

    if (carrito.length > 0) {
        alert(`Pedido realizado por ${nombre}, se enviará a ${direccion}. Total: $${total.toFixed(2)}`);
        carrito = [];
        actualizarCarrito();
    } else {
        alert('El carrito está vacío');
    }
});
