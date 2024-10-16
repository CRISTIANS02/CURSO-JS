const contraseñaCorrecta = "tuContraseñaSecreta"; 
// Reemplaza con la contraseña deseada
const contraseñaIngresada = prompt("Ingrese su contraseña:");

// Condición en una línea para verificar la contraseña
console.log(`Acceso ${contraseñaIngresada === contraseñaCorrecta ? 'Accedido' : 'Denegado'}`);