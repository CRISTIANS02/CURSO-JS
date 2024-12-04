# DOM- Document Objet Model
Modelo de documentos de objeto,el `DOM` es un conjunto de utilidades especificamente deseñamos para maipular documentosw en XML Y HTML.
El DOM transforma el archivo HTML en un arbol de nodos jerarquico.  Facilmente manipulables.
El DOM combierte todo el contenido del archivo HTMLenun objeto de javascript.
- **Mi archivo index.html**
```html
<body>
    <h1 id="titulo">titulo</h1>
    <p clas="parrafo">Este es la descripcion de mi pajina</p>
    <ul>
        <li>Primer Elemento</li>
        <li>Segundo Elemento</li>
        <li>Tercer elemento</li>
    </ul>
</body>
```
- **Mi archivo Script**
```js
documen:{
    Element:body,
    Att:null,
    Text:null,
    child:[
        {
            Element:h1,
            Attr:{id:"titulo"},
            Text:"titulo",
            child:null
        },
        {
            Element:p,
            Attr:{class:"parrafo"},
            Text:"Este es la descripcion de mi pagina",
            child:null
        },
        {
            Element:ul,
            Attr:null,
            Text:null,
            child:[
                {
                    Element:li,
                    Attr:nell,
                    text:Primer Elemento,
                    child:null
                }
                {
                    Element:li,
                    Attr:nell,
                    text:Segundo Elemento,
                    child:null

                },
                {
                    Element:li,
                    Attr:nell,
                    text:Tercer Elemento,
                    child:null

                }
            ]
        }

        }
    ]
}
```
DOM a demas de realizar el trabajo de combertir un archivo `HTML` en un objeto de javascript, nos ofrese una `API`, (Alication Programing Interfacez- Intefaz de Programcion de Aplicaciones). 

## Selectores - recorriendo el DOM
Los selectores no permiten obtener o capturar una O VARIAS etiquetaS `HTML`  incluyendo sus atributos, cointenio e hjos si los tuviera.
Los selectores que opodemos utlisar son variados podemos captura etiquetas de susu atributos como el nombre de la etiqueta misma.
Los selectores  son `unciones`f is hablamos de poo entonsed se puede decir  qu eson `metodos`.
y son lo siguientes:

- **getElementById**Debuelve un elemento (etiqueta) que tenga un id especifico.
```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
```

```js
let parrafo=document.getElementById("dos")
```

- **getElemenClassName** - debuelve un elemento que tenga una clase especifica.
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo uno">parrafo uno</p>
<p id="parrafo dos">parrafo dos</p>
```
```js
let parrafo=documento.getElementByClassName("parrafo")
```
- **querySelector** - Debuelve el primer elemento que coincida con el selector ingresado puede ser un id,class,name o tag.
```html
<h1 id="titulo">titulo</h1>
<p class="parrafo uno">parrafo uno</p>
<p id="parrafo dos">parrafo dos</p>
<h2>subtitulo</h2>
```
```js
let titulo=document.querySelector(#titulo)
let primerParrafo=document.querySelector(".parrafo")
let segundoParrafo=document.querySelector("#parrado_dos")
let subTitulo=document.querySelector("h2")
```
**Averiguar que otros selectores o metodos para  recorrer el DOM tiene Javascript**
- **Selectores CSS**
- querySelector(): Devuelve el primer elemento que coincida con el selector CSS especificado.
```js
const primerParrafo = document.querySelector('p');
```



- querySelectorAll(): Devuelve una NodeList (similar a un array) de todos los elementos que coincidan con el selector.
```js
const todosLosBotones = document.querySelectorAll('button');
```



- **Navegación por el DOM**
- childNodes: Devuelve una colección de todos los nodos hijos de un elemento.
- children: Devuelve una colección de todos los elementos hijos de un elemento (excluyendo nodos de texto y comentarios).
- firstChild: Devuelve el primer nodo hijo de un elemento.
- lastChild: Devuelve el último nodo hijo de un elemento.
- parentNode: Devuelve el nodo padre de un elemento.
- nextElementSibling: Devuelve el siguiente elemento hermano.
- previousElementSibling: Devuelve el elemento hermano anterior.
**Recorrido con Bucles**
- for...of: Ideal para iterar sobre NodeLists obtenidas con querySelectorAll().
```js
for (const boton of todosLosBotones) {
    boton.style.backgroundColor = 'blue';
}
```



- forEach: Similar a for...of, pero exclusivo para arrays. Puedes convertir una NodeList a un array con Array.from().
while y do...while: Bucles tradicionales para un control más preciso.
**Métodos Específicos**
- getElementsByTagName(): Devuelve una colección de todos los elementos con una etiqueta específica.
- getElementsByClassName(): Devuelve una colección de todos los elementos con una clase específica.
- getElementById(): Devuelve el elemento con un ID específico.
Ejemplo Completo
```js
// Obtener todos los elementos con la clase "item"
const items = document.querySelectorAll('.item');

// Recorrerlos y cambiar su contenido
items.forEach(item => {
  item.textContent = 'Nuevo contenido';
});

// Obtener el primer elemento con el ID "my-div"
const myDiv = document.getElementById('my-div');

// Obtener el siguiente elemento hermano de myDiv
const nextSibling = myDiv.nextElementSibling;
```



## Manipulacion del  Tipos de Comentarios
- **createElement** - Este elemento crea un elemento HTML con el nombre que le pasemos por parametro
```js
let titulo=document.createElement("h1")
```
- **appendChild** - Nos permite hacer hijo un elemento dentro de otro
```js
let titulo=document.createElement("h1")
let body=querySelector("body")
body.appendChild(titulo)
```
## Propiedades  de lo s elementos DOM
- **className** - Permite setear o capturar el nombre de la clase que tenga un elemento.
- **id** - Los mismo que clasName pero con el atributo id.
- **innerHTML** - Debuelbe o permite insertar codigo HTML(incluyendo tag y texto)
- **innerText** - Debuelbe o permite insertar texto en un elemento.
- **textContent** - Nos permite agregar o modificar el contenido de un elemento.
- **value** - nos permite optener o setear valores de un elemento `input`.

## Acciones i eventos ocon elementos en el DOM (averiguar)
Acciones y Eventos con Elementos en el DOM (JavaScript)
**Entendiendo el DOM**
El DOM (Document Object Model) es una representación de un documento HTML en forma de árbol de objetos. Cada nodo en este árbol representa un elemento HTML, un atributo o un texto. JavaScript nos permite interactuar con este modelo, modificar su estructura y reaccionar a eventos.

**Accediendo a Elementos del DOM**
Antes de realizar cualquier acción, necesitamos seleccionar el elemento con el que queremos trabajar. JavaScript ofrece varias formas de hacerlo:

- Por ID: document.getElementById('miId')
- Por nombre de tag: document.getElementsByTagName('p')
- Por clase: document.getElementsByClassName('miClase')
- Por selector CSS: document.querySelector('.miClase'), document.querySelectorAll('div.contenido')

**Manipulando el DOM**
Una vez que tenemos una referencia a un elemento, podemos modificar sus propiedades, contenido o incluso su posición en el árbol del DOM. Algunas acciones comunes incluyen:

- **Cambiar el contenido:**
- textContent: Cambia el texto dentro de un elemento.
- innerHTML: Cambia el contenido HTML completo de un elemento.
- **Modificar estilos:**
- style: Modifica las propiedades CSS de un elemento de forma individual.
- classList: Agrega, elimina o verifica clases CSS.
**Crear nuevos elementos: document.createElement('div')**
- Agregar o eliminar elementos: appendChild(), removeChild(), insertBefore(), replaceChild()
- Clonar elementos: cloneNode()
**Eventos**
Los eventos son acciones que ocurren en una página web, como hacer clic en un botón, pasar el ratón por encima de un elemento o cargar una página. JavaScript nos permite reaccionar a estos eventos y ejecutar código personalizado.
- Asignando un manejador de eventos:

```js
document.getElementById('miBoton').addEventListener('click', function() {
    // Código a ejecutar cuando se hace clic en el botón
});
```
- **Eventos comunes:**
- click: Al hacer clic en un elemento.
- mouseover: Al pasar el ratón por encima de un elemento.
- mouseout: Al sacar el ratón de un elemento.
- keydown: Al presionar una tecla.
- keyup: Al soltar una tecla.
- change: Cuando cambia el valor de un elemento (por ejemplo, un input).
- submit: Cuando se envía un formulario.
**Ejemplo Práctico: Cambiar el color de un elemento al hacer clic**
```HTML
<button id="miBoton">Cambiar color</button>
<p id="miParrafo">Este párrafo cambiará de color.</p>
```
```JS
const boton = document.getElementById('miBoton');
const parrafo = document.getElementById('miParrafo');

boton.addEventListener('click', function() 1  {
    parrafo.style.color = 'blue';
});
```
- **jQuery**
jQuery es una biblioteca de JavaScript que simplifica enormemente la manipulación del DOM y el manejo de eventos. Proporciona una sintaxis más concisa y una gran cantidad de funciones útiles.
```JS
$('#miBoton').click(function() {
    $('#miParrafo').css('color', 'red');
});
```

addEvenListener("clic")
/ clic
/chein mobi

>[!NOTE]
>Tecnlogias para procesamiento de texto a travez de marcado `markup` (etiquetas- que nos permite a yravez de palabras reservadas darle un estilo o el significado al contenido de las etiqueas. La primera tecnologica fue  `xml`) despues nace `HTML`, Despue sde  la ultima generacion de tecnologias de markado de texto `markdown`