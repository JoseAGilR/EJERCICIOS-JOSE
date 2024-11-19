//Permite al usuario rellenar un formulario para crear un objeto persona y 
//luego mostrar su información en la página.
function mostrarDatos(){
//Recogemos los datos al hacer clic
let nombre = document.getElementById("nombre").value;
let apellidos = document.getElementById("apellidos").value;
let edad = document.getElementById("edad").value;
let ciudadNacimiento = document.getElementById("ciudadNacimiento").value;
let ciudadResidencia = document.getElementById("ciudadResidencia").value;

//creamos el objeto persona con los datos recogidos del formulario
let persona = {
    Nombre: nombre,
    Apellido: apellidos,
    Edad: edad,
    "Ciudad de nacimiento": ciudadNacimiento,
    "Ciudad de residencia": ciudadResidencia
};

    //Imprimimos los datos
    document.getElementById("mostrarDatos").innerHTML = 
    "Nombre: "+persona.Nombre+
    "<br>Apellidos: "+persona.Apellido+
    "<br>Edad: "+persona.Edad+
    "<br>Ciudad de nacimiento: "+persona["Ciudad de nacimiento"]+
    "<br>Ciudad de residencia: "+persona["Ciudad de residencia"]
};