// CreandoPromesas.js

// Creación de una promesa
const miPromesa = new Promise((resolve, reject) => {
    let exito = true; // Cambia a false para probar el rechazo

    if (exito) {
        resolve("La operación fue exitosa.");
    } else {
        reject("Hubo un error en la operación.");
    }
});

// Manejo de la promesa
miPromesa
    .then((resultado) => {
        console.log(resultado); // "La operación fue exitosa."
    })
    .catch((error) => {
        console.log(error); // "Hubo un error en la operación."
    });
