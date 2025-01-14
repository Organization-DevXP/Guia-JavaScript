// Prototipos.js

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function () {
    console.log(`¡Hola, soy ${this.nombre} y tengo ${this.edad} años!`);
};

const persona2 = new Persona("Ana", 30);
persona2.saludar(); // ¡Hola, soy Ana y tengo 30 años!

