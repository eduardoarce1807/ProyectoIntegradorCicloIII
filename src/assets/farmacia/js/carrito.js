
const imagenes = ["../../../assets/farmacia/images/mascarilla.png",
    "../../../assets/farmacia/images/mameluco.png",
    "../../../assets/farmacia/images/protector_vinifan.png",
    "../../../assets/farmacia/images/cb_vivactiv.png",
    "../../../assets/farmacia/images/pharmalatum_d.png",
    "../../../assets/farmacia/images/bismutol_jarabe.png",
    "../../../assets/farmacia/images/bismutol_tableta.png",
    "../../../assets/farmacia/images/sal_andrews.png",
    "../../../assets/farmacia/images/enterogermina.png",
    "../../../assets/farmacia/images/voltaren.png",
    "../../../assets/farmacia/images/doloflam.png",
    "../../../assets/farmacia/images/doloral_jarabe.png",
    "../../../assets/farmacia/images/icy_hot.png",
    "../../../assets/farmacia/images/panadol_forte.png",
    "../../../assets/farmacia/images/panadol.png",
    "../../../assets/farmacia/images/aspirina_ultra.png",
    "../../../assets/farmacia/images/panadol_0+.png",
    "../../../assets/farmacia/images/abriflu.png"
];

var producto = localStorage.getItem("producto"); //Obtener datos de localStorage

producto = JSON.parse(producto); // Covertir a objeto
if (producto === null) { // Si no existe, creamos un array vacio.
    producto = []; // es es un  array
}

var pS = localStorage.getItem("pS"); //Obtener datos de localStorage

pS = JSON.parse(pS); // Covertir a objeto
if (pS === null) { // Si no existe, creamos un array vacio.
    pS = []; // es es un  array
}

function ocultar(){
    $("#subtotal").hide();
    $("#igv").hide();
    $("#total").hide();
}

class Carrito {

    //Añadir producto al carrito
    comprarProducto(e) {
        e.preventDefault();
        //Delegado para agregar al carrito
        if (e.target.classList.contains('agregar-carrito')) {
            const producto = e.target.parentElement.parentElement;
            //Enviamos el producto seleccionado para tomar sus datos
            this.leerDatosProducto(producto);
        }
        if (e.target.classList.contains('agregar-carrito2')) {
            const producto = e.target.parentElement.parentElement;
            //Enviamos el producto seleccionado para tomar sus datos
            this.leerDatosProducto2(producto);
        }
        if (e.target.classList.contains('detallesP')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProductoDetalles(producto);
        }
    }

    prodSelected(id){
        var ps = JSON.stringify({
            ID: id
        });
        pS.push(ps);
        localStorage.setItem("pS", JSON.stringify(pS));
    }

    leerDatosProductoDetalles(producto) {
        const infoProducto = {
            imagen: imagenes[producto.querySelector('button').getAttribute('data-id') - 1],
            titulo: producto.querySelector('h5').textContent,
            precio: producto.querySelector('.precio span').textContent,
            id: producto.querySelector('button').getAttribute('data-id'),
            cantidad: 1
        }
        this.insertarCarritoDetalles(infoProducto);
        

    }

    insertarCarritoDetalles(producto) {
        this.prodSelected(producto.id);
    }



    //Leer datos del producto
    leerDatosProducto(producto) {
        const infoProducto = {
            imagen: imagenes[producto.querySelector('button').getAttribute('data-id') - 1],
            titulo: producto.querySelector('h5').textContent,
            precio: producto.querySelector('.precio span').textContent,
            id: producto.querySelector('button').getAttribute('data-id'),
            cantidad: 1
        }
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS) {
            if (productoLS.id === infoProducto.id) {
                productosLS = productoLS.id;
            }
        });

        if (productosLS === infoProducto.id) {
            alert("Producto ya agregado.")
        }
        else {
            this.insertarCarrito(infoProducto);
        }

    }

    /////////////////

    leerDatosProducto2(producto) {
        const infoProducto = {
            imagen: imagenes[producto.querySelector('button').getAttribute('data-id') - 1],
            titulo: producto.querySelector('h5').textContent,
            precio: producto.querySelector('.precio span').textContent,
            id: producto.querySelector('button').getAttribute('data-id'),
            cantidad: 1
        }
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS) {
            if (productoLS.id === infoProducto.id) {
                productosLS = productoLS.id;
            }
        });

        if (productosLS === infoProducto.id) {
            alert("Producto ya agregado.")
        }
        else {
            this.insertarCarrito(infoProducto);
        }

    }

    //////////////////

    //muestra producto seleccionado en carrito
    insertarCarrito(producto) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=70>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio} PEN</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);
        this.prodSelected(producto.id);
    }

    //Eliminar el producto del carrito en el DOM
    eliminarProducto(e) {
        e.preventDefault();
        let producto, productoID;
        if (e.target.classList.contains('borrar-producto')) {
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID);
        this.calcularTotal();

    }

    //Elimina todos los productos
    vaciarCarrito(e) {
        e.preventDefault();
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage(0, producto.length);

        return false;
    }

    //Almacenar en el LS
    guardarProductosLocalStorage(producto) {
        let productos;
        //Toma valor de un arreglo con datos del LS
        productos = this.obtenerProductosLocalStorage();
        //Agregar el producto al carrito
        productos.push(producto);
        //Agregamos al LS
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    //Comprobar que hay elementos en el LS
    obtenerProductosLocalStorage() {
        let productoLS;

        //Comprobar si hay algo en LS
        if (localStorage.getItem('productos') === null) {
            productoLS = [];
        }
        else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    //Mostrar los productos guardados en el LS
    leerLocalStorage() {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto) {
            //Construir plantilla
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <img src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio} PEN</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" data-id="${producto.id}"></a>
                </td>
            `;
            listaProductos.appendChild(row);
        });
    }

    //Mostrar los productos guardados en el LS en compra.html
    leerLocalStorageCompra() {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td style="text-align: center;">
                    <img  src="${producto.imagen}" width=100>
                </td>
                <td>${producto.titulo}</td>
                <td>${producto.precio} PEN</td>
                <td>
                    <input type="number" class="form-control cantidad" min="1" value=${producto.cantidad}>
                </td>
                <td id='subtotales'>${producto.precio * producto.cantidad} PEN</td>
                <td style="text-align: center;">
                    <a href="#" class="borrar-producto fas fa-times-circle" style="font-size:30px;" data-id="${producto.id}"></a>
                </td>
            `;
            listaCompra.appendChild(row);
        });
    }

    //Eliminar producto por ID del LS
    eliminarProductoLocalStorage(productoID) {
        let productosLS;
        //Obtenemos el arreglo de productos
        productosLS = this.obtenerProductosLocalStorage();
        //Comparar el id del producto borrado con LS
        productosLS.forEach(function (productoLS, index) {
            if (productoLS.id === productoID) {
                productosLS.splice(index, 1);
            }
        });

        //Añadimos el arreglo actual al LS
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }

    //Eliminar todos los datos del LS
    vaciarLocalStorage(e, p) {
        producto.splice(e, p); // Args (posición en el array, numero de items a eliminar) https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
        localStorage.setItem("productos", JSON.stringify(producto));
    }

    vaciarpS(e, p) {
        pS.splice(e, p); // Args (posición en el array, numero de items a eliminar) https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array
        localStorage.setItem("pS", JSON.stringify(pS));
    }

    //Procesar pedido
    procesarPedido(e) {
        e.preventDefault();

        if (this.obtenerProductosLocalStorage().length === 0) {
            alert("El carrito esta vacio cho");
        }
        else {
            location.href = "/carrito";
        }
    }

    //Calcular montos
    calcularTotal() {
        let productosLS;
        let total = 0, igv = 0, subtotal = 0;
        productosLS = this.obtenerProductosLocalStorage();
        for (let i = 0; i < productosLS.length; i++) {
            let element = Number(productosLS[i].precio * productosLS[i].cantidad);
            total = total + element;

        }

        igv = parseFloat(total * 0.18).toFixed(2);
        subtotal = parseFloat(total - igv).toFixed(2);

        document.getElementById('subtotal').innerHTML = subtotal + " PEN";
        document.getElementById('igv').innerHTML = igv + " PEN";
        document.getElementById('total').value = total.toFixed(2) + " PEN";
    }

    obtenerEvento(e) {
        e.preventDefault();
        let id, cantidad, producto, productosLS;
        if (e.target.classList.contains('cantidad')) {
            producto = e.target.parentElement.parentElement;
            id = producto.querySelector('a').getAttribute('data-id');
            cantidad = producto.querySelector('input').value;
            let actualizarMontos = document.querySelectorAll('#subtotales');
            productosLS = this.obtenerProductosLocalStorage();
            productosLS.forEach(function (productoLS, index) {
                if (productoLS.id === id) {
                    productoLS.cantidad = cantidad;
                    actualizarMontos[index].innerHTML = Number(cantidad * productosLS[index].precio) +" PEN";
                }
            });
            localStorage.setItem('productos', JSON.stringify(productosLS));

        }
        else {
            console.log("click afuera");
        }
    }
}