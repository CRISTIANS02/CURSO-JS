# Estructura Del Programa
## Indice
- [Estructura Del Programa](#estructura-del-programa)
  - [Indice](#indice)
  - [Interaccion basica con el usuario](#interaccion-basica-con-el-usuario)
  - [Expresiones y Declaraciones](#expresiones-y-declaraciones)
  - [Bindings (Enlaces)](#bindings-enlaces)
  - [El Entorno](#el-entorno)
  - [Control de flujo](#control-de-flujo)
    - [Ejecución Condicional](#ejecución-condicional)
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

## Bindings (Enlaces)
Cuando creamos un valor estos valores son volatiles solo existen en la ejecución del programa y solo son llamados.
El bindings o enlace es la manera que javascript recuerda los valores y mantine un estado interno asi como la reutilizacion de valores.

**como usamos los bindings en javascript**.

Para Usar el bingdings primero debemos usar la palabra reservada o `keywor` de nombre `let`, despues debemos darle el nombre para identificar
```js
// este es un enlace que puede apuntar a varios valores
//como un pulpito com muchos brasitos
let edadPersona= 34
// si deseariamos que nuestro enlace solo apunte a un valor oaseq un pulpito con un brasito entonces para crear este enlace debemos hacer uso de la keywor const.
const edad=45
//este enlace simepre apunta al valor 45 no podra modificar su enlace a otro valor
```
>[!NOTE]
**Que nombre ponerle a nuestro enlace**- El nombre de un enlace debera escribir el valoral que esta enlasado y debera estar escrita en `camelCase`

```js
//Quiero crear un anlace que tenga el valor de la fecha actrual
//incorrecto
let yyyymmdd="202410910"
//correcto
let fechaActual="09-10-2024"
//correcto
let edadActual
```

## El Entorno
El entorno es conocido como el momento en que  el se ejecuta o inicio un archivi javascript.
El entorno al crearse no se crea basio dentro del entorno se creara la coleccion de enlaces y valores.

**TAREA**-  Averiguar mas sobre ejecucion en linea de los entornos en javascript

## Control de flujo

Una sentencia se ejecuta como si fuera una historia d arriba abajo.
por ejemplo:

```js
let elNumero = prompt ("Elige un numero")
console.log(`tu numero es la raiz cuadrada de: ${elNumero+elNumero}`)

// primero le pide al usuario un numero y despues muestra un mensaje y el cuadrado de ese numero

```


### Ejecución Condicional
Hacemos uso de este control de flujo cuando tenemos distintas caminos o distintos mensajes que deseamos mostrar segun una condición.
**Como creaños una condición**

La ejecución condicional se crea con la palabra reservada(Keyword) `if` a continuacion de una `condicioón` en llaves `{}` se escribira el cuerpo del codigo que deseo ajecutar en caso de la condición sea `verdad`.
  
  - **condición simple `if`**
```js
let comparación=5>4 
if treu{
  promnt("Escribe tu nombre")
}
```
**Condición simple `if` de una sola linea**
```js
if (1+1== ) console.log("Es verdad")
```
- **Condición de doble evaluación `if else`**
  
  Existen casos en los que tendremos que ejecutar un codigo si es verdad pero tambien  si es falso. Ejecución  condicional de dos caminos.

  ```js
  let edadPersona = 16;
  if(edadPersona >=18){
    consol.log ("Eres mayor de edad");
  }else{
    consolg.log("Eres Menor de edada");
  }
  ```
- **Condición multiple `if` `else if`**
- 
  Se utiliza cuando se tiene que evaluar  y devolver varias opciones o multiples respuestas.
  ```js
  let total_compra=30
  if (total_compra >50 && total_compra >100){
    console.log('Tienes un descuento de 10% ${total_compra*0.10}')
  }
  else if (total_compra > 100 && total_compra <500){
    consol.log ('tienes un descuento del 20%  ${total_compra*0.20')

  } else{
    console.log('Tienes un descuento del 50%  ${total_compra*0.50')
  }
  ```