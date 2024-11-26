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
## Objetos
### Creacion
### Acceder a un elemento de objeto
### Metodos