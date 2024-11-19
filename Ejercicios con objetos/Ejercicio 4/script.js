// Crea un array de objetos libros con propiedades como título, autor, y año.
// Muestra todos los libros en la página HTML.

let libros = [
    {   Titulo: "El libro de la jungla",
        Año: 1991,
        Autor: "Jhon Hopkins"
    },
    {
        Titulo: "Moby Dick",
        Año: 1986,
        Autor: "José Luengo"
    },
    {
        Titulo: "El principito",
        Año: 1988,
        Autor: "Marta Haufgtugen"
    }
]

function mostrarLibros(){
    for (let i=0; i=libros.length; i++)
        document.getElementById("parrafo").innerHTML = 
        "Libros: "+ JSON.stringify(libros[i]);

    }
