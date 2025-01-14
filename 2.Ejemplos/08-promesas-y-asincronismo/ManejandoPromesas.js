// ManejandoPromesas.js

// Función que devuelve una promesa
function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const datos = { id: 1, nombre: "Juan" };
            resolve(datos);
        }, 2000); // Simula una operación asíncrona con 2 segundos de retraso
    });
}

// Uso de la promesa
obtenerDatos()
    .then((datos) => {
        console.log("Datos obtenidos:", datos); // { id: 1, nombre: "Juan" }
    })
    .catch((error) => {
        console.log("Error:", error);
    });
