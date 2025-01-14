// Definimos una clase 'Animal' con un método común
class Animal {
    constructor(nombre) {
        this.nombre = nombre;  // Propiedad 'nombre'
    }

    hacerSonido() {
        return `${this.nombre} hace un sonido.`;
    }
}

// Definimos la clase 'Perro' que hereda de 'Animal'
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);  // Llama al constructor de 'Animal'
        this.raza = raza; // Propiedad adicional para 'Perro'
    }

    hacerSonido() {
        return `${this.nombre} dice: ¡Guau!`; // Sobreescribe el método
    }
}

const miPerro = new Perro("Max", "Labrador");
console.log(miPerro.hacerSonido()); // Output: Max dice: ¡Guau!
