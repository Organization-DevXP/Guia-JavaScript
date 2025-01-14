// CommonJS.js

// Exportación de una constante y una función
const saludo = "¡Hola, mundo!";
function suma(a, b) {
    return a + b;
}

module.exports = { saludo, suma };

// Ejemplo de importación
const { saludo, suma } = require('./CommonJS.js');

console.log(saludo); // "¡Hola, mundo!"
console.log(suma(2, 3)); // 5
