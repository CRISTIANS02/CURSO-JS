// //capturamos la edad y lo combertimos a numero
// let edad = numero (prompt ("Ingresa tu edad"))
// //verificamos si el tipo de dato de datos es numero realmente
// if (typeof edad == "number"){
//     //si la comparación es verdad mostraremos por  consola la raiz cuadrada de edad
//     console.log(edad*edad)

// }

// // ejemplo de una condición simple de una sola linea
// if (1+1==2) console.log (" Es verdad")


  
// // Ejercicios: de condicion
// //Crear un programa que me pida un numero y me muestre por consola si es un numero par o impar

// let numero = prompt("Ingrese un número:");

// if (+numero % 2 === 0) {
//   console.log("El número es par.");
// } else {
//   console.log("El número es impar.");
// }

// let total_compra=600
// if (total_compra >50 && total_compra >100){
//   console.log('Tienes un descuento de 10% ${total_compra*0.10}')
// }
// else if (total_compra > 100 && total_compra <500){
//   consol.log ('tienes un descuento del 20%  ${total_compra*0.20')

// } else{
//   console.log('Tienes un descuento del 50%  ${total_compra*0.50')
// }

// crear un programa que pida al usuario su edad y dependiendo  su edad le  daremos una serie de regalos
//REGALOS:
//- Si su edad esta entre 4 a 8 años : te ganaras un chupetin
//- si su edad esta entre 9 a 13 años: te ganaras una pelota
//-  si su edad esta entre 14 a 17 años:  te ganaras un celular nokia 6101
//- si su edad es mayor o ygual a 18:  te ganaras al primo lo aras lecha 


// let edad=(prompt("Ingrese la edad para ser evaluado para que ganes tu premio"));

// if (edad >= 4 && edad <= 8) {
//   console.log(" Te ganaste un chupetin sabor maracuya para que alegres tus dias");

// } else if (edad >= 9 && edad <= 13) {
//   console.log("Te ganas una pelota firmada por Ozuna.");

// } else if (edad >= 14 && edad <= 17) {
//   console.log("Te ganas un celular Nokia 6101 android 18.");

// } else if (edad >= 18 && edad <=100) {
//   console.log("te ganaras al primo lo aras lecha ");

// } else {
//   console.log("no  ganaras tu premio.");
// }

// let edad = prompt("Introduce tu edad:");
// edad = +edad; 

// switch (true) {
//     case (edad >= 4 && edad <= 8):
//         console.log("Te ganarás un chupetín.");
//         break;
//     case (edad >= 9 && edad <= 13):
//         console.log("Te ganarás una pelota firmada por Cuto.");
//         break;
//     case (edad >= 14 && edad <= 17):
//         console.log("Te ganarás un celular Nokia 6101.");
//         break;
//     case (edad >= 18):
//         console.log("Te ganarás un sobre de plata.");
//         break;
//     default:
//         console.log("La edad ingresada no es válida o no tienes regalos.");
// }

// Ejercicio
// realizar un programa que pida 5 frutas a travez del navegador.
// y realizar las gigientes evaluaciones
// naranja , limon -> " es un afruta citrica"
// platano, manzana -> " es una fruta dulce"
// fresa,pera,papaya ->" para la ensalada de fruta"
// si ingresa otro tipo de frutas -> " no tiene clasificacion"

for (let i = 1; i <= 5; i++) {
  let fruta=prompt("Escribe en nombresiño de la frutica: ", i)
    switch (fruta){
      case "naranja":
      case "limon":
        console.log(" la fruta es citrica");
        break;
      case "platano":
      case " manzana":
        console.log ("la fruta es dulce")
        break;
      case "fresa":
      case "pera" :
        case "papaya":
          console.log(fruta, "para la ensalada de fruta");
        break;
      default:
        console.log("orlando es una  fruta");
        break;

    }
  
}