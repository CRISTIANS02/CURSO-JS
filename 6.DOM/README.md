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

## Selectores
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

>[!NOTE]
>Tecnlogias para procesamiento de texto a travez de marcado `markup` (etiquetas- que nos permite a yravez de palabras reservadas darle un estilo o el significado al contenido de las etiqueas. La primera tecnologica fue  `xml`) despues nace `HTML`, Despue sde  la ultima generacion de tecnologias de markado de texto `markdown`