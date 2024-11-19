//Crea un objeto producto y permite al usuario mostrar su información al hacer clic en un botón.

let producto = {
    tipo: "Mesa",
    altura: "145cm",
    ancho: "45cm",
    largo: "100cm",
    "Nº de patas": 4,
};

function mostrarInfo(){
    document.getElementById("mostrarInfo").innerHTML =
    "Tipo de artículo: "+producto.tipo+
    "<br>Altura: "+producto.altura+
    "<br>Ancho: "+producto.ancho+
    "<br>Largo: "+producto.largo+
    "<br>Número de patas: "+ producto["Nº de patas"]
};
