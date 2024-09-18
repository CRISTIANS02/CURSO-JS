# INTRODUCCION
- [INTRODUCCION](#introduccion)
  - [Comentarios](#comentarios)
  - [Tipos de Comentarios](#tipos-de-comentarios)
  - [Consola](#consola)
    - [Tipos de mensajes por consola](#tipos-de-mensajes-por-consola)
      - [1. Notificacion](#1-notificacion)
      - [2. Gestion Este](#2-gestion-este)
      - [3. Tablas](#3-tablas)
  - [NAIMING](#naiming)
  - [usos incorrectos](#usos-incorrectos)
  - [usos correctos](#usos-correctos)
  
## Comentarios
Es la parte dentro de mi archivo de codigo que no es leido ni ejecutado por el interprete de `js`.
> [!TIP]
> Los comentarios nos ayudan a entender nuestro codigo, y en ocasiones podemos usarlo para silenciar temporalmente partes del codigo *(comentar codigo)*.

## Tipos de Comentarios
1. **Una sola Linea**
   ```
   //comentario de una sola linea
   ```
2. **Multiples Lineas**
   ```
   /*comentario de multilinea*/
   ```
3. **JsDoc**
   ```
   /**
   *esta es una linea
   *esta es otra linea
   *
   ```
   Este tipo de comentario es muy usado para documentar el codigo, usado generalmente para la explicacion de funciones y clases en `Js`.

   
   [link] (comentarios.js)

## Consola
La herramienta de javascript mas usada, dentro de los navegadores es usada para la depuracion[depuracion] (#depuracion) de nuestro codigo

>[!TIP]
> #### depuracion, es la tecnica que nos permite mostrar el codigo en las distintas faces del desarrollo, y verificar que el  mensaje correcto sea el correcto, y verificando que el codigo no tenga errores de sintaxis de logica o de precaucion. 

### Tipos de mensajes por consola
#### 1. Notificacion
Mostrar un mensaje por consola 
```js
console.long("Hola mundo")
```
Mostrar un mensaje de estilo informativo
```js
console.info("Mensaje informativo")
```
Mostrar un mensajae de estilo o tipo alerta
```js
console.war("Mensaje ide tipo alerta")
```
Monstrar unmensaje de estilo o tipo error
```js
console.error("Mensaje error")
```
#### 2. Gestion Este 
tipo de mensaje njos sirve para ver la duracion de ejecucion de nuestro codigo y poder obtemizarlo   y para hacer uso de esta herramienta tenemos que iniciar la consola `time()` luego vendra el codigoque deseamos ver la duracion y finalmente terminar el time de la consola con `timeEnd()`
```js
console.time()
edad=18
if (edad>=18){
   console.log("Eres Mayor de Edad")
}else{
   console.warn(Eres Pulpin)
}
 console.timeEnd()
```
#### 3. Tablas  
Este tipo de mensa por consola nos muestra la informacion de una tabla.
solo formateara alos datos de tipo `array{}` y `objetos`
```js
lenguajes=[
   {nombre:"javascript",extencion:".js"}
   {nombre:"python", extencion:".py"}
   {nombre:"php",extencion:".php"}
]
```
[para ver los ejemplos has clic aqui] (consola.js)

## NAIMING
Es la tecnica para nombrar variables, funcion y clased dentro de ,un lenguaje de programacion.
Las variables tienen reglas muy especificas que debemos segir ala hora de designar susu nombres.
- Debemos usar nombres que expliquen que aport aesa variable anuestro cogigo
## usos incorrectos
- No se pueden usar espacios
>[!WARNING]
```js
# iNCORRECTO
con espacios =45
    
```

- No usar un numero delante
>[!WARNING]
```js
# iNCORRECTO
1numero=45
```

- Evitar simbolos y `snake_case`
>[!WARNING]
   ```js
# Incorrecto
dame$=45
# Incorrecto
con_guiones_bajos=" no es correcto"
```
## usos correctos
- Debemos usar nombres que expliquen que aporta esa variable a nuestro codigo
- Usar `camelCase`
  >[!TIP]
  ```js
  #correcto
  edadAlumno=45
  ```

