// Herencia.js

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    hablar() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }

    hablar() {
        console.log(`${this.nombre} dice ¡guau!`);
    }
}

const perro1 = new Perro("Rex", "Labrador");
perro1.hablar(); // Rex dice ¡guau!
