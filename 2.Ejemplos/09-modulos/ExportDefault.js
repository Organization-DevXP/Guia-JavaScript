// ExportDefault.js

// Exportación por defecto
export default function multiplicar(a, b) {
    return a * b;
}

// Ejemplo de importación
import multiplicar from './ExportDefault.js';

console.log(multiplicar(4, 5)); // 20
