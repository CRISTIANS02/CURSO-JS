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
addEvenListener("clic")
/ clic
/chein mobi

>[!NOTE]
>Tecnlogias para procesamiento de texto a travez de marcado `markup` (etiquetas- que nos permite a yravez de palabras reservadas darle un estilo o el significado al contenido de las etiqueas. La primera tecnologica fue  `xml`) despues nace `HTML`, Despue sde  la ultima generacion de tecnologias de markado de texto `markdown`