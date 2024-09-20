# VALORES, TIPOS Y OPERADORES
## Indice
- [tipos de datos o valorez](#valores)

## Valores (datos)
Imagina un mar de bits.
Una computadora moderna tieme mas de 100 mil millones de bits almacenados en su `memoria de trabajo`o `memoria principal`o `memoria volatil`o `ram`.
La memoria no volatil o memoria secundaria o  memoria de almacenamiento tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca  se tratara.Cuando nosotros programamos hacemos uso de `memoria  de trabajo`, para trabajar de mamenra ordenada con los bits que se encuentran en nuestro mar de bits, javascript ordena los bits en pequeñas partes o piezas de transformacion a esto se le conoce como `valores` cada valor tiene una fincionalidad distinta puede ser un numero o un texto o una funcion.
cuando hablamos de tipos de datos en javascript nos referimos asu presentacion binaria y al tipo de valor que usamos

### Datos Primitivos
Son  aquellos datos que ya existen, no pueden ser creados,actualizados ni eliminados solo pueden ser llamados para el uso que deseamos darle.
#### - Numeros (Number)
Los valores de tipo numero, como es de esperar son numeros y en javascript se escribe o se hacer el llamando de este valor de ,la sigiente manera
- numero de tipo entero
```js
20
//Estamos usando el patron de bits para el numero 20 que exixtia dentro de la memoria de trabajo
```
- numero de punto flotante decimal fraccion
```js
2.7
0.
.0
```
- Numeros de tipo notacion cientifica
```js
2.998e8
//e= por 10 elevado al numero sigiente de  `e`
// 2.998 * 10*8
```
> [!WARNING]
> Cuando  javacript realiza operaciones con nuestros enteros el resultado ciempres sera exacta, cuando  trealize operacion con numero decimales el resultado perdera precicion por que solo tiene 34 para almacenar  el numero esto suele ocirrir con resultados cuyos decimales  sean infinitos como el caso el numero PI **es nuestra responsabilidad ciomo pregramadores hacer el uso de los decimales con aproximaciones para evitar errores**.

>[!TIP]
> Cuando javascript hace trabajo de mamoria (cuando crea un patron de bit para almacenar) todos los numeros son alamacenados como decimal positivo
- tipos (tipos de datos)
- operadores