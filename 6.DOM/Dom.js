// let parrafoDos=document.getElementById
// let texto=prompt("ingresa un texto")
// console.log(parrafoDos.texContent="hola primo machay siqui")
// <div id="miId" class="miClase" style="background:red;width:200px;height:200px"></div>
let newElem=document.createElement("div")
newElem.id="miId"
newElem.className=""
let respuesta=prompt("escribe el color azul o rojo para ver el cuadro")
if(respuesta=="rojo"){
    newElem.className="cuadro_rojo"
}else{
    newElem.className="cuadro azul"
}
// newElem.style="background:red; width:200px; heigth:200px"
let body=document.querySelector("body")
body.appendChild(newElem)