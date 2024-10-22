/**console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)**/
// let contador=1
// while (contador<=12){
//   console.log(contador)
//   contador=contador+1
// }

//EJERCICIO
//CREAR UN ṔROGRAMA QUE ME MUESTRE LOS NUMERO PARES QUE EXISTEN ENTRE 1 Y 20
// let numeroPar=2
// // while (numeroPar<=20){
// //   console.log(numeroPar)
// //   numeroPar+=2
// //   //numeroPar=numeroPar+2
// // }
// while (numeroPar<=20){
//   if (numeroPar%2==0){
//     console.log(numeroPar)
//   }
//   numeroPar+=1
// }
// for (let contador=2;contador<=20;contador++){
//   if (contador%2==0) console.log(contador)
// }

//EJERCICIO
// Crear un programa que pida un numero y muestre por consola todos los numeros menor al numeor ingresado por la persona.
//esta variable es el limite
// let numerUser=Number(prompt("Ingre un numero"))
// //mi contador
// let contador=1
// while (contador<=numerUser){
//   console.log(contador)
//   contador+=1
// }

//EJERCICIO
// crear un programa que me muestre los numero menores a 20
// en caso encuentre un 7 debera terminar el programa y no mostrar el resto de numeros.
for (let i=1;i<=20;i++){
    console.log(i)
    if (i==7) break
  } 