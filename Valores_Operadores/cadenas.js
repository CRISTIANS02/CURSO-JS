console.log ("soy cadenas")
//Si nuestro texto tiene que estar entre commillas sinples 
"´este texto se muestra entre commillas simples´"
//Si nuestro texto tiene que estar entre commillas dobles  
`" este texto se muestra entre commillas doble"`
//si nuestro texto tendra tanto commillas dobles como simples
'´ esta en commilas simples´,"esta en comillas dobles"'

//usando caracter de escape
console.log(" de este texto solo esta \*palabra\* esta en comillas")

// salto de linea usando acentos graves
console.log(`aqui una linea
    aqui otra linea`)


//salto de linea antes de es6
console.log(" este es mi primera linea \n y esta es la sigiente linea") 

// tabulacion con acentos graves
console.log(`este texto  no est atabulado
     este no esta tabulado`)

//tabulando con el caracter de escape
console.log("sin tabular \n \t y tabulado")  
console.log(" esta es un abarra invertida \\")






//conactenando cadenas
console.log("hola"+" "+"mundo")

//usando plantillas literales
numeroUno=34
numeroDos=23
console.log(`la suma de${numeroUno}+{numeroDos} es =${numeroUno+numeroDos}`)