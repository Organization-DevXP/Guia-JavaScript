// AsyncAwait.js

// Función asíncrona usando async/await
async function obtenerDatosAsync() {
    try {
        const datos = await obtenerDatos(); // Espera la resolución de la promesa
        console.log("Datos obtenidos:", datos); // { id: 1, nombre: "Juan" }
    } catch (error) {
        console.log("Error:", error);
    }
}

// Llamada a la función asíncrona
obtenerDatosAsync();
