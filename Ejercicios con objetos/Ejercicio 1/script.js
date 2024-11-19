//Crea un objeto persona con propiedades como nombre, apellido, edad, y ciudad.
//Usa JavaScript para mostrar esta información en una página HTML.

let persona = {
    nombre: "José Antonio",
    apellido: "Gil",
    edad: 32,
    ciudad: "Sevilla"
};

document.getElementById("infoPersona").innerHTML =
    "Nombre: "+persona.nombre+
    "<br>Apellido: "+persona.apellido+
    "<br>Edad: "+persona.edad+
    "<br>Ciudad: "+persona.ciudad;
