// // EJERCICIO
// //Crear una funcion  que me  de  un saludo de bienvenida
// function saludado(){
//     console.log("Bienvenidos")}

// //FUNCION COMO VALOR
// function saludo(){
//     return "hola mundo"
// }
// console.log(saludo)

// binding en javascrip lo que hace es subir las funciones declarativas ala cabrcera de mi archivo
// function despedida(){
//     return "adios"
// }
console.log(despedida)
// En el caso de funcion como valor o funciones fecha el binding solo elevara al principio el delarchivo la declaracion del enlace mas no el valor por eso de estos casos debemos ejecutar la funciones despues de haberlo creado.
let saludo=()=>{return "hola primo"}
console.log(saludo())
// El caso de la funcion declarativa el binding elevs toda la funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte  del archivo incluso antes  de que sea  creada.
function despedida(){
    return"adios"
}