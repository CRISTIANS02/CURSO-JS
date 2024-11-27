# ESTRUCTURA DE DATOS
## Indice
-[Array](#lista-o-array)
-[Objetos](#objetos)

Aparte de los tipos de datos primitivos, javascript nos  proporciona los tipos de datos complejos conocido tambien como datos estructurados o estructura de datos
Para poder trababajar con estos tipos de datos debemos conocer la forma de representarlos en la memoria de nuestra maquina.
javascript trabaja con dos tipos de datos estructuradosnquer trabajan de manera independiente o en conjunto.
son los siguientes
## Lista o Array
Listas  en javsacript son un tipo de dato estructurado que nos perimite almacenar distintos tipos de datos primitivos separados por comas, cada tipo de dato que se almacena en una lista se le como elemento.
asi cada elemento estara separado por una coma.
### Creación básica de un prototype
Primero debemos crear un enlace ( una variable) y luego asignamos la lista que se cree con `corchetes[]`, los  elementos estaran dentro de los corchetes separados por comas.
```js
//Estoy creando una lista vasia
let miLista=[]
//Creando una lista de numeros
let numeros=[2,4,6,8,3]
//Creando una lista de nombres
let nombre=["Edwin","Jory","Adan","Nadine"]
//Crear un a lista mixta
let mixta=[4,"Hola",false,["Hola","Mundo"]]
```

### Acceder a un elemento del array
Para poder acceder a un elemento del array debemos entender que javascript asiganara por cada elemento un  indice que nos permitira accerder a un elemento en especifico este indice es incremental y comenzada de cero con el primer elemento sera el primer elemento, el ultimo elemento sera la contidad de elementos menos uno.

```js
let numeros=[3,6,4,23,67,8]
console.log(numeros[2])
```
Existe otra manera de acceder a los elementos de una lista, esto se logra recorriendo cada elemento de una lista esto se logra con un bucle `for`
```js
let nombres=["Cristian ","Jory","Orlando","Edwin"]
for (let i=0<nombres,length;i++){
    console,log(nombres[i])
}
```
### Metodos
Los metodo son funciones que nos permiten crear, actualizar y eliminar los elementos de un a lista, todas las bariables que almacenan acceder asus metodos poniendo un punto despues del nombre de la variable.

- metodo para recuperar la longitud de elementos que tiene  una lista
```js
let numeros=[2,4,5,6,7]
numeros.length
```
- metodo para agregar un elemento al final de la lista
```js
let vocales=["a"]
vocales.push("e")
```
- Metodo para eliminar el ultimo de una lista.
```js
let vocales=["a"]
vocales.pop()
```
## tarea  AVERIGUAR LOS METODOS MAS USADOS  EXIXTEN PARA EL RATAMIENTO DE LISTAS  EN JAVASCRIPT
### Agregar Elementos
- push():Agrega uno o más elementos al final de un array.

- unshift():Agrega uno o más elementos al principio de un array.

### Eliminar Elementos
- pop(): Elimina y devuelve el último elemento de un array.

- shift(): Elimina y devuelve el primer elemento de un array.
- splice(): Elimina elementos a partir de un índice específico y puede insertar nuevos elementos en su lugar.
Buscar Elementos
- indexOf(): Devuelve el índice del primer elemento que coincida con el valor buscado, o -1 si no se encuentra.
- lastIndexOf(): Devuelve el índice del último elemento que coincida con el valor buscado, o -1 si no se encuentra.
- find(): Devuelve el primer elemento que cumpla con una condición especificada por una función.
- findIndex(): Devuelve el índice del primer elemento que cumpla con una condición especificada por una función.
### Iterar sobre Elementos
- forEach(): Ejecuta una función proporcionada una vez por cada elemento del array.
- map(): Crea un nuevo array con los resultados de la llamada a una función proporcionada para cada elemento del array original.   
- filter(): Crea un nuevo array con todos los elementos que cumplan con la condición especificada por una función.
- reduce(): Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor.   
### Otros Métodos Útiles
- includes(): Determina si un array incluye un cierto elemento, devolviendo true o false.
- some(): Determina si al menos un elemento del array cumple con la condición especificada por una función.
- every(): Determina si todos los elementos del array cumplen con la condición especificada por una función.
- join(): Une todos los elementos de un array en una cadena, utilizando un separador opcional.
- slice(): Extrae una sección de un array y devuelve un nuevo array.
- split(): combertir de texto a una lista.
- join(): Permite combinar elementos de un array a una cadena e texto.
- 

```js
const numbers = [1, 2, 3, 4, 5];

// Agregar un elemento al final
numbers.push(6);

// Eliminar el primer elemento
numbers.shift();

// Buscar el índice del número 3
const index = numbers.indexOf(3);

// Crear un nuevo array con los números multiplicados por 2
const doubledNumbers = numbers.map(number => number * 2);

// Filtrar los números mayores a 3
const filteredNumbers = numbers.filter(number => number > 3);

console.log(numbers); // [2, 3, 4, 5, 6]
console.log(doubledNumbers); // [4, 6, 8, 10, 12]
console.log(filteredNumbers); // [4, 5, 6]
```
```js
let texto="hola mundo"
//["Hola","mundo"]
let listaTexto=Texto.split(" ")
console.log(listaTexto)
let lista=["hola","como","estas"]
//"hola como estas"
let nuevoTexto=lista.join(",")
console.log(nuevoTexto)
```

## Objetos
Los objetos osn tipos de datos estructurados similares a las lista, para poder acceder a un elemento de la lista jasvascript les asigna indices, en este caso, los objetos como unica diferencia de las listas nosotros podemos asignar el nombre dl elemento al cual deseamos acceder a esto se lo conoce como `clave valor`
cada clave valor es un elemento de un objeto si deseamos crear mas elementos tendremos que separarlos por comas
### Creacion
Para crear un objeto debemos encerar los elementos en llaves `{}` cada elemento estara conformado por su `clave:vlor`,
```js.
let datosJory=["jory","rodrigez",20,"M"]
let datosJoryObjeto={
    nombre:"Jory",
    apellido:"rodrigez",
    edad:20,
    sexo:"todos los dias",
    ganado:["el primo","los chamos"," las enfermeras","mineros"],
    direccion:{
        tipoCalle:"pasaje",
        nombreCalle:"querobamba",
        numeroVivienda:222,
        numeroCuarto:5
    },
    accion:(=>{console.log("hola soy jory")})
}
console.log(datosJoryObjeto.ganado)
console.log(datosJoryObjeto["sexo"])
console.log(direccion["numeroCuarto"])
console.log(datosJoryObjeto.ganado[3])
```
### Acceder a un elemento de objeto
### Metodos