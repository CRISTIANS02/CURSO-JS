// ejemplos con operadores de comparacion
console.log(5>6)
// esta operacion me generara un valor de tipo boleano

//mayor igial que
console.log(6>=6)

//no es igual
console.log(5 != 7 )

//NaN == NaN
console.log(NaN==NaN)

// Averigual la forma que se realiza las comparaciones cpn cadena de texto



// Todas las letras mayusculas seran menoras a las minusculas
//Z>a
// Por que javascript compara los codigos inicide de cada caracter
// !>=?
//33>=63
console.log("!">="?")
console.log("Ardvark">="Zoroaster")

//ejemplos
// en el caso del operador && su resultado sera cerdadero solo si ambos valores son verdaderos.
console.log(true && false)
console.log(true && true)

//OBSERVACION: Si ambos valores son verdaderos devolvera el segundo valor.
console.log("hola" && "nundo")

//OBSERVACIÓN : En caso exista un valor verdadero y uno falso devolvera el valor falso.
//console-log(0 && "hola")

//OJO: Los valores  0,NaN y un cadena basia ""  son considerados false

// en el caso del operador || produce verdadero si cualquier de valores dados es verdadero.

console.log(false || false)
console.log(true || false)

// 
respuesta =" te debuelvo los ositos tiernos "
console.log(respuesta || "tu busqueda no exixte")
console.log(0 ||" ")


//en el caso del operador not (!) invierte el valor dado
console.log(!true)
console.log(!false)

//usando el operador relacional
//Observacion solo funciona en objetos
// averigiar por que sale false en este caso 
console.log("hola" in "hola mundo")

