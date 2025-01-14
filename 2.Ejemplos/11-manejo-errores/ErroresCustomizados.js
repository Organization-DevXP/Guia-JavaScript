// Creando un error personalizado

class ErrorDeConexion extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ErrorDeConexion";
    }
}

function conectarServidor() {
    try {
        throw new ErrorDeConexion("No se pudo conectar al servidor");
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}

conectarServidor(); // ErrorDeConexion: No se pudo conectar al servidor
