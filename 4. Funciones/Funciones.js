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
//console.log(despedida)
// En el caso de funcion como valor o funciones fecha el binding solo elevara al principio el delarchivo la declaracion del enlace mas no el valor por eso de estos casos debemos ejecutar la funciones despues de haberlo creado.
//let saludo=()=>{return "hola primo"}
//console.log(saludo())
// El caso de la funcion declarativa el binding elevs toda la funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte  del archivo incluso antes  de que sea  creada.
//function despedida(){
    //return"adios"
//}


// ejercicio
//crear una funcion que tenga o alcanse una variable contador y podamos con funciones realizar la suma mas uno de esta variable y le resta mas uno de la misma variable ademas de poder tener una funcion que me permita acceder al valor actual y poder mostrarlo.

//let contador=0
//function incremento
//return contador++
//function decremento
//return contador--
//function valorContador
//return contador

function contador(){
    //variable local
    let contador = 0 
    function incremento(){
        return contador++
    }
    function decremento(){
        return contador--
    }
    function valorContador(){
        console.log(contador)
    }
    return{
        valorContador,
        incremento,
        decremento
    }
}
let count1=contador()
for(let i=0;i<5;i++){
    count1.incremento()
}
count1.valorContador()

let count2=contador()
for(let i=0;i<5;i++){
    count2.decremento()
}
count2.valorContador()


// let count1=contador()
// count1.valorContador()
// count1.incremento()
// count1.valorContador()
// count1.decremento()
// count1.valorContador()
