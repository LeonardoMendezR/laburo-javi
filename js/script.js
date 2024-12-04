let carrito = [];
let total = 0;

function cargarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        total = carrito.reduce((acc, item) => acc + item.precio, 0);
        mostrarCarrito();
    }
}

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    if (carrito.length === 0) {
        const mensaje = document.createElement('li');
        mensaje.textContent = 'Aún no hay elementos agregados.';
        listaCarrito.appendChild(mensaje);

        // Crear botones para redirigir a las secciones de productos
        const botonesProductos = [
            { nombre: 'Remeras', url: 'productos.html#remeras' },
            { nombre: 'Bermudas', url: 'productos.html#bermudas' },
            { nombre: 'Camisas', url: 'productos.html#camisas' },
            { nombre: 'Accesorios', url: 'productos.html#accesorios' }
        ];

        botonesProductos.forEach(boton => {
            const btn = document.createElement('a');
            btn.href = boton.url;
            btn.textContent = boton.nombre;
            btn.style.display = 'block'; // Para que cada botón esté en una nueva línea
            btn.style.margin = '5px 0'; // Espaciado entre botones
            btn.className = 'btn-producto'; // Puedes agregar una clase para estilos adicionales
            listaCarrito.appendChild(btn);
        });
    } else {
        carrito.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.nombre} - $${item.precio}`;

            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'X';
            btnEliminar.onclick = () => eliminarDelCarrito(index); 

            li.appendChild(btnEliminar);
            listaCarrito.appendChild(li);
        });
    }

    document.getElementById('total').textContent = `Total: $${total}`;
}
function toggleCarrito() {
    const carritoDiv = document.getElementById('carrito');
    if (carritoDiv.style.display === 'none') {
        carritoDiv.style.display = 'block';
    } else {
        carritoDiv.style.display = 'none';
    }
}

function vaciarCarrito() {
    carrito = []; // Vaciar el carrito
    total = 0; // Restablecer el total a cero
    localStorage.removeItem('carrito');
    mostrarCarrito(); 
}

function finalizarCompra() { 
    alert("Compra finalizada");
    vaciarCarrito();
}

function eliminarDelCarrito(index) {
    
    carrito.splice(index, 1);
    
    total = carrito.reduce((acc, item) => acc + item.precio, 0);
    
  
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    mostrarCarrito();
}

function cerrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.style.display = 'none'; // Oculta el carrito
}


window.onload = cargarCarritoDesdeLocalStorage;