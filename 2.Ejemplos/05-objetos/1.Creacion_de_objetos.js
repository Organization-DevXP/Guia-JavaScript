// Creación de un objeto que representa a una persona
const persona = {
    nombre: "Juan", // Propiedad de nombre
    edad: 25,       // Propiedad de edad
    saludar: function () { // Método que hace una acción
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
};

console.log(persona.saludar()); // Output: Hola, mi nombre es Juan y tengo 25 años.