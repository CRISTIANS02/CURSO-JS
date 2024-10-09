# Estructura Del Programa
## Indice
- [Estructura Del Programa](#estructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expresiones y Declaraciones](#expresiones-y-declaraciones)
## Interaccion basica con el usuario
Podemos interactuar con el usuario desde Javascript utilizando un metodo sencillo que viene implementado en los navegadores.
El metodo es conocido como `window` o el metodo de ventana, este metodo en realidad es un objeto que contiene o almacena varias funciones, entre ellas las de mostrar mensajes o pedir datos al usuario.
- **alert** - Esta funcion nos muestra un mensaje en pantalla
```js
window.alert("mensaje")
```
- **confirm** - Preguntar al usuario y ofrecer dos botones que se traducen en valores boleanos `Aceptar` (true) y `cancelar` o `cerrar` (false).
```js
window.confirm("¿quieres ser mi enamorado?")
//si deseamos capturar la respuesta almacenaremos el codigo en una variable
respuesta=window.confirm("quieres salir del closed!?")
```
- **prompt** - Pregunta al usuario y espera que se ingrese una respuesta
```js
window.promt("como te llamas??")
//si deseamos almacenar la respuesta usaremos una variable
respuesta=window.prompt("como te llamas?")
```
## Expresiones y Declaraciones
- **Expresiones** - En javascript un fragmento de codigo que produce un valor es llamada `Expresion`. Tambien se dice que una `expresion` es el fragmento de una `oracion`.
```js
1
"hola"
3*6
5>7
!true
```
- **Declararciones** - En javascript es una oracion y es algo que tiene sentido, dato: toda oracion que termina en `;` es una declaracion, no es una obligacion pero es recomendable que la oracion termine en `;` para saber que esta finalizando la declaracion.
```js
!true;
let estado=!false;
```
