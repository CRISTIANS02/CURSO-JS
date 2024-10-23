# FUNCIONES
- [FUNCIONES](#funciones)
  - [Estructura de una función (como se crea un a función)](#estructura-de-una-función-como-se-crea-un-a-función)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y Parametros Posicioneles](#argumentos-y-parametros-posicioneles)
    - [Argumentos y Parametros Nominales](#argumentos-y-parametros-nominales)
  - [Tipos de funciones  por su notación](#tipos-de-funciones--por-su-notación)
    - [Funciones como valor](#funciones-como-valor)
    - [Función como declaración](#función-como-declaración)
    - [Función como Flecha (arrow function)](#función-como-flecha-arrow-function)
    - [Diferencias](#diferencias)


  
Las funciones en javascript son `bloques de codigo ejecutable`, alos que podemos pasar parametros y operar cion ellos.
Nos sirve para modular(Modularizar ) nuestros programas y estructurarlos en bloques que `realicen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible.
Las funciones ,normalmente, al acabar su ejecución `devuelven un valor`,  que conseguimos con el parametro `return`

## Estructura de una función (como se crea un a función)
para crear un a función debemos realizar los siguientes pasos.
1. Hacer uso de uno de los keywork `functión`.
2. Darle un nombre ala función.
3. Crea los parametros que  recibira entre parentisis `()`
4. Crear el cuerpo de la funcion`{}`.

```js
// Funcion sin oaeametros
function miFuncion(){
    console.log("Esta es una función")
}
// Función con  un parametro
function mifuncionPrametros(a){
    console.log("tu paeametro es " ,a)
}
// Función con varios  parametro
function mifuncionPrametros(a,b){
    console.log(a+b)
}
```
**COMO EJECUTAMOS UNA FUNCION**
Para  ejecutar una función debemos hacer el llamado de la misma haciendo usounicamente de su nombre y los parametros que recibira
```js
// creando la función
function saludo(){
    console.log("hola")
}
// ejecutamos la función
saludo()

function saludo2(texto){
    console.log("hola: ",texto)
}
//ejecutar
saludo2("china")
```
> [!NOTE]
> **REGLAS PARA PONER EL NOMBRE A UNA FUNCIÓN** - Los nimbres de las funciones deben reprecentar acciones, por lo que deben  construirse usando el `verbo` que reprecenta la acción seguido de un  `sustantivo` representara ala entidad.

```js
function crearUsuario(){

}
function enviarCorreo (){

}
```
## Tipos de Argumentos y Parametros
Es la manera de como se remplazan  los argumentos con los parametros
### Argumentos y Parametros Posicioneles
Posicioneles se les llama por que los argumetos  tomaran los parametros en el orden que se le pase ala función segun la posiscion entre argumentos y paramentros
```js
function sumaNumeros(a,b,c,d){
let suma =a,b,c,d
    return sum(a.b.c.d)
}

//Argumentos Posicionales
sumaNumeros(2,6,7,8)
console.log(respuesta)
```
### Argumentos y Parametros Nominales
Los nominales  se les conoce a los argumentos que en su creación se asocian a un parametro en especifico.
```js
function registroAlumno(nombre,apellido,sexo){
    let respuesta`${nombre},${apellido}, ${sexo}`
    return respuesta
}
registroAlumno(sexo="primo",nombre="edwin",apellido"del mar")
//posicion
registroAlumno("nombre","apellido","todos los dias")
```
> [!NOTE]
> Posiciones en orden y Nominales especificar el parametro y su valor


## Tipos de funciones  por su notación
### Funciones como valor
En este caso se crea una funcion como  si fuera un valor de un enlace.
```js
let saludo=function(){
    console.log("BIENVENIDO")
} SALUDO()
```
 En este caso el nombre de la funcion sera el nombre que le pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentisis
 al ugual que una funcion clasica podemos tambien pasarle parametros

### Función como declaración
Se le conoce como función `declarativa` ala manera clasica de como creamos una función.
```js
function saludo(){
    console.log("saludos a todos")
}
```
### Función como Flecha (arrow function)
Esta función es introducida a partir de la version de ecma script 5 `es5`.
Se implemento para la creación y ejecución rapida y mas entendible de las funciones.
La función flecha evita la `verbosidad` en javascript

>[!NOTE]
>`verbosidad`o`verboso` se utiliza en la programación para referirce a un codigo que necesita demaciadas lineas de codigo o necesita cumplir estrictamente una serie de reglas podemos comparar la `verbocidad` a un  texto demaciado extenso o dedundante.

Se crea de la misma manera que una  función com valor, eso quiere decir que la función flecha tiene la siguiente estructura.

La funcion flecha tiene la siguiente estructura.
El parametro seguido del simbolo flecha `->` y del  cuerpo de ser nesesario o solo de codigo que se retomara.
```js
function saludo(){
    return "hola mundo"
}
console.log(saludo())

let saludo=()=>("Hola mundo")
console.log(saludo())

let mensaje=texto=>console.log("hola,",texto)
console.log(mensaje("el primo"))
// En el caso de mas de un parametro y ejecutar mas de una soila linea de codigo
let registroUsuario=(nombre,apellido)=>{
    let alumno=`${nombre},${apellido}`
    return alumno
}
conosle.log (registroUsuario ("edwin","cachondo"))
```
### Diferencias