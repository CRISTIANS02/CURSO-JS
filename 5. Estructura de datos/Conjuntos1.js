// // Crear una lista que almacene las cinco vocales y luego las muestre  por consola
// let vocales=["A","E","I","O","U"]
// console.log(vocales)

// //accederala vocal "o"
// console.log(vocales[3])
// // Accediendo a los  elementos con for
// for (i=0;i=5;i++){
//     console.log(i)
// }

//Trabajo
//tengo una listra de 7 frutas
// crear un programa  que identifique si en mi lista existe naranja de escribir me mostrara su indice, de no exixtir me mostrara un mensaje de error

// Lista de frutas
// const frutas = ['manzana', 'plátano', 'cereza', 'kiwi', 'naranja', 'uva', 'pera'];


// function buscarNaranja(lista) {
//     const indiceNaranja = lista.findIndex(fruta => fruta.toLowerCase() === 'naranja');
//     if (indiceNaranja !== -1) {
//         console.log(`¡Naranja encontrada en el índice ${indiceNaranja}!`);
//         return indiceNaranja;
//     } else {
//         console.error('Error: No se encontró ninguna naranja en la lista.');
//         return -1;
//     }
// }

// // crear dos funciones  que reciban  por parametros una lista  de numeros una funcion encontrara devolvera el numero menor de la lista y la otra funcion encontrara y devolvera el numero mayor de la lista. ojo usar los metodos de min y max.

// // Función para encontrar el número menor de la lista
// function encontrarNumeroMenor(lista) {}
//     if (lista.length === 0) {
//         return null;
//     }

// function encontrarNumeroMayor(lista) {
//     if (lista.length === 0) {
//         return null; 
//     }

//     return Math.max(...lista);
// }
// const numeros = [10, 5, 8, 3, 15, 2, 20];

// const numeroMenor = encontrarNumeroMenor(numeros);
// console.log(`El número menor es: ${numeroMenor}`);
// const numeroMayor = encontrarNumeroMayor(numeros);
// console.log(`El número mayor es: ${numeroMayor}`);

// // crear una funcion que me permita contar la cantidad de vocales "a" que  tengo una lista.


// function contarVocalesA(lista) {
//     if (lista.length === 0) {
//         return 0;
//     }
//     const contadorVocalesA = lista.reduce((contador, elemento) => {
//         const elementoComoString = String(elemento).toLowerCase();
//         const vocalesAEnElemento = elementoComoString.split('').filter(caracter => caracter === 'a').length;
//         return contador + vocalesAEnElemento;
//     }, 0);
    
//     return contadorVocalesA;
// }


// const lista1 = ['casa', 'árbol', 'manzana', 'gato'];
// const lista2 = ['perro', 'gato', 'elefante'];
// const lista3 = [12345, 'hola a todos', 'casa amarilla'];

// console.log('Vocales "a" en lista1:', contarVocalesA(lista1));
// console.log('Vocales "a" en lista2:', contarVocalesA(lista2));
// console.log('Vocales "a" en lista3:', contarVocalesA(lista3));


// // clase de 27 de noviembre del 2024
// let texto="hola mundo"
// //["Hola","mundo"]
// let listaTexto=Texto.split(" ")
// console.log(listaTexto)
// let lista=["hola","como","estas"]
// //"hola como estas"
// let nuevoTexto=lista.join(",")
// console.log(nuevoTexto)

// //tengo la siguiente url
// //www.gatitas.com/?q=marina+gold
// //crea un programa que me capture solo la cuery
// //"marina gold"
// let url="www.gatitas.com/?q=marina+gold"
// let cortarUrl=url.split("=")
// let obtenerPrimerElemento=cotarUrl[1]
// let divididoTextoEnDos=obtenerPrimerElemento.split("+")
// let juntarTexto=divididoTextoEnDos.join(" ")

// // let listUrl=url.split("=")[1].split("+").join("")
// console.log(listaUrl)

// let datosJory=["jory","rodrigez",20,"M"]
// let datosJoryObjeto={
//     nombre:"Jory",
//     apellido:"rodrigez",
//     edad:20,
//     sexo:"todos los dias",
//     ganado:["el primo","los chamos"," las enfermeras","mineros"],
//     direccion:{
//         tipoCalle:"pasaje",
//         nombreCalle:"querobamba",
//         numeroVivienda:222,
//         numeroCuarto:5
//     },

// }
// console.log(datosJoryObjeto.ganado)
// console.log(datosJoryObjeto["sexo"])
// console.log(direccion["numeroCuarto"])
// console.log(datosJoryObjeto.ganado[3])


//Ejercicio
//crear una funcion que me genere un objeto de caracteristicas tecnicas de una computadora, el objeto debera tener como minimo los siguientes valores
// marca, modelo,presesador,ram,disco y targeta  de video

function Computadora(marca, modelo, procesador, ram, disco, tarjetaVideo) {
  
    let computadora = {
        marca: marca,
        modelo: modelo,
        procesador: procesador,
        ram: ram,
        disco: disco,
        tarjetaDeVideo: tarjetaVideo
    };
    return computadora;
  }
  let miComputadora =Computadora('ph', 'XPS 15', 'Intel Core i7', '8GB', '500GB SSD', 'NVIDIA GeForce GTX 1650');
  console.log(miComputadora)
  // en este caso la clave marca existe en mi objeto por lo tanto su valor sera actualizado por intel
  miComputadora["marca"]="ph"
  console.log(miComputadora)
  //En este caso la clave targeta no existe en mi objeto por lo tanto se creara un nuevo elemento con la clave tarjeta y su valor nvidia me tinesnvidia
  miComputadora["targeta"]="nvidia me tienes envidia"
  console.log(miComputadora)
  

  //averiguar como eliminar un elemento de un objeto

  
 //hacer ejercicios de git del 7 al 10 en git repositorio de git del tecnologico