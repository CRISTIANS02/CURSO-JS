// haciendo uso de  las funciones de tipo clousure
//Ejercicio1
//Pedir al usuario su nombre y su edad, verificar que su edad sea mayor a 18 años en ese caso mostraremos un mensaje de bienvenida mas el nombre que ingresoel usuario.
// Definición de una función de tipo clase que utiliza closures
// function Usuario() {
//     this.nombre = '';
//     this.edad = 0;
//     this.establecerNombre = function(n) {
//         this.nombre = n;
//     };
//     this.establecerEdad = function(e) {
//         this.edad = e;
//     };
//     this.verificarEdad = function() {
//         if (this.edad > 18) {
//             return `¡INGRESASTE, ${this.nombre}!`;
//         } else {
//             return "Lo siento, debes ser mayor de 18 años para ingresar.";
//         }
//     };
// }

// function pedirDetallesUsuario() {
//     let usuario = new Usuario();
//     let nombre = prompt("Por favor, ingresa tu nombre:");
//     usuario.establecerNombre(nombre);
//     let edad = prompt("Por favor, ingresa tu edad:");
//     usuario.establecerEdad(Number(edad));
//     alert(usuario.verificarEdad());
// }

// pedirDetallesUsuario();

//crear un programa que pida registrar el nombre de un producto el usuario podra luego eliminar el producto o actualizar el nombre del producto
// Observacion al realizar la actualizacion podre ver el valor anterior como el valor nuevo

function Producto() {
    this.nombre = '';

    this.registrarProducto = function() {
        this.nombre = prompt("Ingresa el nombre del producto:");
        console.log(`Producto registrado: ${this.nombre}`);
    };

    this.actualizarProducto = function() {
        const nombreAnterior = this.nombre;
        const nuevoNombre = prompt("Ingresa el nuevo nombre del producto:");

        if (nuevoNombre) {
            this.nombre = nuevoNombre;
            console.log(`Producto actualizado: Anterior: ${nombreAnterior}, Nuevo: ${this.nombre}`);
        } else {
            console.log("No se ha realizado ninguna actualización.");
        }
    };
    this.eliminarProducto = function() {
        if (this.nombre) {
            const confirmacion = confirm(`¿Estás seguro de que deseas eliminar el producto "${this.nombre}"?`);
            if (confirmacion) {
                console.log(`Producto eliminado: ${this.nombre}`);
                this.nombre = '';
            } else {
                console.log("El producto no ha sido eliminado.");
            }
        } else {
            console.log("No hay ningún producto registrado para eliminar.");
        }
    };
}
const producto = new Producto();
// producto.eliminarPrimerProducto();
producto.registrarProducto();
producto.actualizarProducto();
producto.eliminarProducto();