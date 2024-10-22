//para mostrar un mensaje en mi ventana
alert("como te llamas?")
//para pedir al usuario que elija una opcion
confirm("escoje")
//para pedir al usuario que ingrese una una informacion
prompt("escribe algo")

//si quiero lamacenar el valor dentro de una variable
resp_alert=alert("alerta")
resp_confirm=confirm("elige")
resp_prompt=prompt("escribe")
//o
console.log(`
    respuesta de alert: ${resp_alert},
    respuesta de confirm: ${resp_confirm},
    respuesta de prompt: ${resp_prompt}
    `)