const numero = parseInt(prompt("Ingrese un número:"));

// Condición para determinar si el número es primo (optimizada)
const esPrimo = !(numero <= 1 || [...Array(Math.floor(Math.sqrt(numero)) + 1).keys()].slice(2).some(i => numero % i === 0));

console.log(`El número ${numero} ${esPrimo ? 'es' : 'no es'} primo.`);