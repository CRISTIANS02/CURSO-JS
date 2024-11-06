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
    - [Binding](#binding)
  - [La pila de llamadas ( Call Atack)](#la-pila-de-llamadas--call-atack)
    - [Características del LIFO:](#características-del-lifo)
  - [Closure o Funciones de Cierre (Funciones que retorna funciones)](#closure-o-funciones-de-cierre-funciones-que-retorna-funciones)
    - [Clousure de Tipo clase](#clousure-de-tipo-clase)
  - [Prototype ( Tarea: Averiguar y sus ejemplos)](#prototype--tarea-averiguar-y-sus-ejemplos)
    - [Creación básica de un prototype](#creación-básica-de-un-prototype)
    - [Herencia usando prototype](#herencia-usando-prototype)
    - [Extendiendo objetos nativos](#extendiendo-objetos-nativos)
    - [Prototype chain (Cadena de prototipos)](#prototype-chain-cadena-de-prototipos)
    - [Verificación de propiedades](#verificación-de-propiedades)


  
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
## Diferencias
Las diferfencias que tenemos al momento de crear una funcion declarativa, funcion como valor y flecha es el binding.

### Binding
Es una tecnica que guarda las funciones y variables(enlaces)  sube al princio la declaracion  no el valor al principio de javascript.

```js
function saludo(){
    return "hola primo"
}

function despedida(){
    return "adios primo"

}
```

```js
saludo()
despedida()
```
## La pila de llamadas ( Call Atack)
Es una tecnica que se usa para controlar de manera correecta la ejecución de una función

**TAREITA**

**AVERIGUAR SOBRE LIFO**
LIFO, que significa "Last In, First Out" (último en entrar, primero en salir), es un método de valoración de inventarios y contabilidad que asume que los últimos artículos en ser añadidos a un inventario son los primeros en ser vendidos o utilizados. Este método es comúnmente utilizado en la contabilidad de costos y tiene implicaciones fiscales y financieras.

### Características del LIFO:

1. **Fluctuaciones de Precios**: En un entorno de precios crecientes, el LIFO puede resultar en un costo de bienes vendidos más alto, lo que puede reducir las ganancias imponibles.
  
2. **Valoración de Inventarios**: Los inventarios que permanecen en el balance general se valoran a precios más antiguos, lo que puede dar lugar a una subestimación de los activos.

3. **Impacto en el Flujo de Efectivo**: Puede mejorar el flujo de efectivo a corto plazo debido a la reducción de impuestos.

4. **Normas Contables**: En los Estados Unidos, el LIFO es aceptado bajo los principios de contabilidad generalmente aceptados (GAAP), pero no es permitido bajo las Normas Internacionales de Información Financiera (NIIF).

**Ejemplo:**

Supongamos que una empresa tiene el siguiente inventario:

- 100 unidades a $10 cada una (compradas primero)
- 100 unidades a $12 cada una (compradas después)

Si la empresa vende 100 unidades, bajo el método LIFO, el costo de bienes vendidos se calcularía utilizando las unidades más recientes, es decir, las de $12, mientras que las de $10 permanecerían en el inventario.

 ```js
// hacer un programa que haga  una ensalda
function cortarTomate(){
    console.log("Cortando tomates")
}
function cortarLechuga(){
    console.log("cortando lechuga")
}
function CortarPepino(){
    console.log("cortando pepino para el primo")
}
function Cortarlimon() {
    console.log("cortando limon")
}

function preparandoEnsalada(){
    cortarTomate()
    cortarLechuga()
    CortarPepino()
    Cortarlimon()
    console.log("mesclando las verduras")
    
}
function comer() {
    preparandoEnsalada()
    console.log("Tragando la Ensalada")
    
}
comer()
 ```

## Closure o Funciones de Cierre (Funciones que retorna funciones)
Un `clousure` es un a serie de funciones que capsula una serie de varisbles y definiciones locales que unicamente seran accesibles si son devueltas con el keyword `return`.
Antes de que aparsca laversion `acma 6` los `closure` eran un patron creacional que nos permitia modularizar nurdtro codigo, en lugar de usar las `clases`, que eran populares en otros lrnguajes pero  que javasCript aun no lo implementaba.

<!-- //typescrip es para aprender a deseñar pajinas web -->
```js
//Una funcion que retorna otra funcion ( por l gernerl es una funcion anonima)
//funcion clasica
function retornaValor(n){
    return n+1

}
// llamando alafuncion clasica
return Valor 10

// funcion closure
function retornaValor (n){
    return function(){
        return n+1
    }
}
//llamando a la funcion closure
retornaValor(10)()

```
>[!NOTE]
Las Funciones `closure` sin usadas por que pueden mantener el valor de sus enlaces o bariables locales en todo el proceso  de la ejecucion  de su funcion padre por cada llmada que se realiza

### Clousure de Tipo clase
Son funciones cuyo uso son ygaules alas clases dentro de la ejecucion de una clase temos que se llama como `Instancia`en javascript tenemos funciones `clousure`cque pueden instanciar al ygual que una clase, la diferencia con la funciones `clousure` clasicas es que en esta hacemos uso de de la palabra `keywor` llamada `this`
```js
function contador(){
    this.contador=0
    this.incre=function(){
        this.contador++
    }   
    this.decre=function(){
        this.contador--
    }
}
// realizamos una instacia
let count1=new contador()
count1,contador
for(let i=0;i<5;i++){
    count1.incre()
}

```

>[!NOTE]
La funcion de tipo clase no hace uso de `return` en sus funcion es al hacer uso de `this` caso funcion o variable estara enlazada al objeto que se cree.

>[!WARNING] 
El problema principal de este tipo de funcion, es que cuando creamos un nuevo objeto a partir de la funcion  en memoria para toda la clase y sus valores creados eso kiere decir variable y funciones, cada vez aue llamamos a  una funcion esta se aplica en memoria

## Prototype ( Tarea: Averiguar y sus ejemplos)
Un prototype en `JavaScript `es un mecanismo que permite que los objetos hereden propiedades y métodos de otros objetos. Cada objeto en `JavaScript` tiene una propiedad `prototype` que es una referencia a otro objeto.

### Creación básica de un prototype
Es un mecanismo para crear una plantilla de objeto que sirve como base para otros objetos.
```js
function Persona(nombre) {
    this.nombre = nombre;
}

// Añadiendo un método al prototype
Persona.prototype.saludar = function() {
    return "Hola, soy " + this.nombre;
}

const persona1 = new Persona("Ana");
console.log(persona1.saludar()); // "Hola, soy Ana"
```

### Herencia usando prototype
Permite que un objeto herede propiedades y métodos de otro objeto, creando una relación padre-hijo.

```js
function Animal(nombre) {
    this.nombre = nombre;
}

Animal.prototype.hacerSonido = function() {
    return "Haciendo sonido";
}

function Perro(nombre, raza) {
    Animal.call(this, nombre);
    this.raza = raza;
}

// Heredar de Animal
Perro.prototype = Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;

// Añadir método específico para Perro
Perro.prototype.ladrar = function() {
    return "¡Guau!";
}

const miPerro = new Perro("Bobby", "Labrador");
console.log(miPerro.hacerSonido()); // "Haciendo sonido"
console.log(miPerro.ladrar()); // "¡Guau!"
```
### Extendiendo objetos nativos
Permite añadir nuevos métodos a tipos de datos existentes en JavaScript..

```js
// Añadir un método a todos los arrays
Array.prototype.primerYUltimo = function() {
    return [this[0], this[this.length - 1]];
}

const numeros = [1, 2, 3, 4, 5];
console.log(numeros.primerYUltimo()); // [1, 5]
```
### Prototype chain (Cadena de prototipos)
Es la manera en que JavaScript busca propiedades y métodos a través de una cadena de objetos vinculados.

```js
const persona = {
    saludar: function() {
        return "Hola";
    }
};

const estudiante = Object.create(persona);
estudiante.estudiar = function() {
    return "Estudiando";
}

console.log(estudiante.saludar()); // "Hola"
console.log(estudiante.estudiar()); // "Estudiando"
```
### Verificación de propiedades

Permite comprobar la existencia y origen de propiedades en un objeto.
```js
function Coche(marca) {
    this.marca = marca;
}

Coche.prototype.tipo = "vehículo";

const miCoche = new Coche("Toyota");

console.log(miCoche.hasOwnProperty("marca")); // true
console.log(miCoche.hasOwnProperty("tipo")); // false
```
**Puntos importantes a recordar:**

Los prototypes son útiles para:

Compartir métodos entre instancias
Implementar herencia
Ahorrar memoria al compartir métodos


Buenas prácticas:

No modificar prototypes de objetos nativos en producción
Usar clases modernas (ES6+) cuando sea posible
Mantener la cadena de prototipos simple


Alternativas modernas:
```js
// Usando class (ES6+)
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}
```


**Ejercicio:**
```js
// 1. Crear clase base (Persona)
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Añadir métodos al prototype de Persona
Persona.prototype.saludar = function() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
}

Persona.prototype.cumplirAnios = function() {
    this.edad++;
    return `¡Feliz cumpleaños! Ahora tengo ${this.edad} años`;
}

// 2. Crear clase Estudiante que hereda de Persona
function Estudiante(nombre, edad, carrera) {
    // Llamar al constructor de Persona
    Persona.call(this, nombre, edad);
    this.carrera = carrera;
    this.notas = [];
}

// Establecer la herencia
Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

// Añadir métodos específicos de Estudiante
Estudiante.prototype.estudiar = function() {
    return `${this.nombre} está estudiando ${this.carrera}`;
}

Estudiante.prototype.agregarNota = function(nota) {
    this.notas.push(nota);
    return `Nota ${nota} agregada`;
}

Estudiante.prototype.promedio = function() {
    if (this.notas.length === 0) return 0;
    const suma = this.notas.reduce((a, b) => a + b, 0);
    return suma / this.notas.length;
}

// 3. Uso del código
// Crear instancias
const persona1 = new Persona("Ana", 25);
const estudiante1 = new Estudiante("Juan", 20, "Informática");

// Probar funcionalidad
console.log("--- Pruebas con Persona ---");
console.log(persona1.saludar());
console.log(persona1.cumplirAnios());

console.log("\n--- Pruebas con Estudiante ---");
console.log(estudiante1.saludar()); // Método heredado
console.log(estudiante1.estudiar()); // Método propio
console.log(estudiante1.agregarNota(85));
console.log(estudiante1.agregarNota(90));
console.log(estudiante1.agregarNota(95));
console.log(`Promedio de notas: ${estudiante1.promedio()}`);

// 4. Verificaciones
console.log("\n--- Verificaciones ---");
console.log("¿estudiante1 es instancia de Estudiante?", estudiante1 instanceof Estudiante);
console.log("¿estudiante1 es instancia de Persona?", estudiante1 instanceof Persona);
console.log("¿estudiante1 tiene propiedad 'nombre'?", estudiante1.hasOwnProperty("nombre"));
console.log("¿estudiante1 tiene propiedad 'saludar'?", estudiante1.hasOwnProperty("saludar"));

// 5. Extender objeto nativo (Array)
Array.prototype.promedio = function() {
    if (this.length === 0) return 0;
    return this.reduce((a, b) => a + b, 0) / this.length;
}

// Probar extensión
const notas = [85, 90, 95];
console.log("\n--- Prueba de extensión de Array ---");
console.log(`Promedio de notas usando extensión: ${notas.promedio()}`);
```