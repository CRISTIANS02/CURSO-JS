# VALORES, TIPOS Y OPERADORES
## Indice
- [Valores, Tipos y operadores](#valores-tipos-y-operadores)
    -[Valores](#valores)
     -[Valores](#valores)



## Valores (datos)
Imagina un mar de bits.
Una computadora moderna tieme mas de 100 mil millones de bits almacenados en su `memoria de trabajo`o `memoria principal`o `memoria volatil`o `ram`.
La memoria no volatil o memoria secundaria o  memoria de almacenamiento tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca  se tratara.Cuando nosotros programamos hacemos uso de `memoria  de trabajo`, para trabajar de mamenra ordenada con los bits que se encuentran en nuestro mar de bits, javascript ordena los bits en pequeñas partes o piezas de transformacion a esto se le conoce como `valores` cada valor tiene una fincionalidad distinta puede ser un numero o un texto o una funcion.
cuando hablamos de tipos de datos en javascript nos referimos asu presentacion binaria y al tipo de valor que usamos

## Datos Primitivos
Son  aquellos datos que ya existen, no pueden ser creados,actualizados ni eliminados solo pueden ser llamados para el uso que deseamos darle.
### - Numeros (Number)
Los valores de tipo numero, como es de esperar son numeros y en javascript se escribe o se hacer el llamando de este valor de ,la sigiente manera
#### Numero de tipo entero
```js
// Dato numerico de tipo entero
 20 → //entero positivo
-20 → //Entero  nugativo
.0 →  //Decimal positivo
-3,6 → //Decimal Negativo
//Estamos usando el patron de bits para el numero 20 que exixtia dentro de la memoria de trabajo
```
#### Numero de punto flotante decimal fraccion
```js
2.7
0.
.0
```
#### Numeros de tipo notacion cientifica
```js
2.998e8
//e= por 10 elevado al numero sigiente de  `e`
// 2.998 * 10*8
```
> [!WARNING]
> Cuando  javacript realiza operaciones con nuestros enteros el resultado ciempres sera exacta, cuando  trealize operacion con numero decimales el resultado perdera precicion por que solo tiene 34 para almacenar  el numero esto suele ocirrir con resultados cuyos decimales  sean infinitos como el caso el numero PI **es nuestra responsabilidad ciomo pregramadores hacer el uso de los decimales con aproximaciones para evitar errores**.

>[!TIP]
> Cuando javascript hace trabajo de mamoria (cuando crea un patron de bit para almacenar) todos los numeros son alamacenados como decimal positivo

#### Numeros especial
En Java existen tres valores tres valores de tipo numero que se consideran un dato primitivo numerico de tipo especial
```js
Infiniti
-intfiniti
NaN  → not a number
// Not  a Number → no es un numero
// Cuando el resultado de una operacion es matematicamente imposible
```
### Aritmetica (Operadores Aritmeticos)

#### Aritmetica
La principal operacion que se puede hacer con numeros es la aitmerica.
Para esto tenemos los `Operadores Aritmeticos` basicos como:

- Suma (+)
- Resta (-)
- Multiplicacion (*)
- Divicion (/)
- Modulo (%)
- Decremento (--)
- Incremento (++)
  
**Podemos agrupar operaciones con parentesis () las operaciones pues**
consulta de archivos de operadores [aqui](./Operadores.js). ve los ejercicios [aqui](./ejercicios.js})

#### Cadena
El sigiente dato primitivo es la `cadena` - `string`.
¿Para que usan las cadenas en javascript?
- Para representar texto
  
se escribe encerrando su ciontenido entre comillas:

**cadenas con contenido**
```js
"soy un texto" // comillas dobles
´tambien soy un texto´ // comillas simples
`yo tambien soy`  // acentro grave (alt+96) 
```
**cadenas vacia**

""

´´´´

**Problema** - Como representamos un texto entre commillas
Para hacer el uso  de  las comillas para hacer el uso de commillas dentro del contenido de una cadena podemos segir las sigientes recomendaciones:

* Si nuestro texto tiene que estar entre commillas sinples 
  
        "´este texto se muestra entre commillas simples´"

* Si nuestro texto tiene que estar entre commillas dobles
  
        `" este texto se muestra entre commillas doble"`

*  si nuestro texto tendra tanto commillas dobles como simples
  
        '´ esta en commilas simples´,"esta en comillas dobles"'

Otra manera de hacer lo antes mencionado es haciendo uso de la barrainvertida`\` tambien conocida como `caracter de escape`.
hacer uso de este caracter indica en el caracter posterior tendra significado especial.
```js 
//solucionamos este problema haciendo uso de los asentos graves
`primera linea
segunda linea`
```
antes de la incorporación de **ecma6** **es6** en el uso de acentos graves se utilizaba en el caracter de escape`\`
```js
" este es mi primera linea \n y esta es la sigiente linea"
```
**problema** - deseo tabular un texto
```js
`
este texto no esta tabulado
      este texto si esta tabulado
`
```
ahora tabularemos haciendo uso del escape
```js
"sin tabular\t y tabulado"
```

#### Concatenacion
El unico operador aritmetico que puede ser usado por cadenas es el operador suma `(+)` puede ser usado entre dos a mas cadenas y pasa a llamar operador de concatenacion, lo que realiza es unir cadena en una sola.

**EJEMPLITO**

```js
"hola"+" "+"mundo"
```


#### plantillas literales

Las plantillas mencionadas anteriormente con el nombre de  acentos graves son usadas para mostrar texto literal, tambien nos permite ejecutar codigo javascript dentro de una plantilla literal el codigo o el resultado de este codigo sera transformado en un dato de tipo texto y se incluira en la posición en que se encuentre.
Para hacer  uso de la siguienteexpresión`${}`.
```js
//creando una plantilla literal - template literals
``
// usamos js dentro de una plantilla litetal
`la suma de 1+1 es ${1+1}`
```
 >[!TIP]
 Se dice literal por que con el  formato que codificamos serea mostrado de esa misma forma en la consola.

#### OPERADORES UNARIOS
No todos lo operadores son simbolos, algunos se escriben como palabras.
Un ejemplo es el operador `typeof`, este operador produce un valor de cadena que indica el tipo del valor que le proporcionamos.

`operadores vinarios` se les conoce por que opera sobre dos valores `2*5`
`operador unario` por que solo trabaja con un valor.

```js
// para ver la funcionlidad o el valor que gener siempre debemos mostralo en un console

console.log(type 5 )
```

#### VALORES BOLEANOS 
Este tipo de dato  primitivo es util cuando tenemos un valor que distinga solo entre dos posibilidades, como `si` y `no` o `entendido` y `apagado`.
Para este proposito, javascript tiene un tipio de dato `boleano`,  que solo tiene dos valores, `treu`,`false`.
**Que formas de producir valores tenemos tenemos?**
1. **Usando valores de conparacion**
   Los operadores de ocnparacion son los siguientes
   - Mayor que (>).
   - Menor que (<).
   - Mayor o igual que (>=).
   - Menor o igual que (<=).
   - Igual a (==).
   - Extrictamente igual(===).
   - No es ygual a (!=).
2. **Usando Operadores Logicos**
    Javascript soporta tres operadores logicos
     - and (Y)representacion en javascriot`&&`
     - or (O) representacion en javascript `||`,
     - not (no) representacion en javascript `! ` 
  opera **Obseervación** Este es un operador unario que su funcion es invertir el valor que tiene a su derecha `!true` produce `false`
  
  >[!TIP]
  **AND `&& `** - Si tenemos dos valores verdaderos devolvera el segundo valor verdadero, si tenemos un valor falso y un verdadero devolvera falso.

  >[!TIP]
   **OR `||`** - Si tenemos dos valores  verdaderos devolvera el primer valor verdadero, si tenemos un valor verdadero y uni falso devolvera el valor verdadero

  
3.  **Usando eloperador relacional**

   Este operador compara su valores y yretorna un boleano como resultado, lo que evalua este operador es si un apropiedad especifica se encuentra en un objeto.
   Evalua si el primer valor que se encuentra a su izquierda existe o forma parte del segundo valor que se encuentra en su derecha
   ```js
   "a" in ["a","e","i","o","u"]
   ```

####   Operador Ternario
Este operador trabaja con tres valores .
El primer valor es el que determina si se muestra el restom de valores.
Eso quiere decir que si el primer valor es primero

