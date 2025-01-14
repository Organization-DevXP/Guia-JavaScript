// Manejo de errores en funciones asincrónicas utilizando async/await y try-catch

async function obtenerDatos(url) {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error("No se pudo obtener los datos");
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error:", error.message);
    }
}

obtenerDatos('https://api.example.com/data')
    .then(datos => console.log(datos))
    .catch(error => console.error("Error en la promesa:", error.message));
