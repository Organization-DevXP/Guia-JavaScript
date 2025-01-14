// ClasesBasicas.js

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`¡Hola, soy ${this.nombre} y tengo ${this.edad} años!`);
    }
}

const persona1 = new Persona("Juan", 25);
persona1.saludar(); // ¡Hola, soy Juan y tengo 25 años!
