// ESModules.js

// Exportación de una constante y una función
export const saludo = "¡Hola, mundo!";
export function suma(a, b) {
    return a + b;
}

// Ejemplo de importación
import { saludo, suma } from './ESModules.js';

console.log(saludo); // "¡Hola, mundo!"
console.log(suma(2, 3)); // 5
