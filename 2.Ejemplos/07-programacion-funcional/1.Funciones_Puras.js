// Ejemplo de una función pura
const sumar = (a, b) => a + b;

// La función siempre devolverá el mismo resultado con los mismos argumentos
console.log(sumar(2, 3)); // 5
console.log(sumar(2, 3)); // 5

// No depende de ninguna variable externa ni tiene efectos secundarios
let numeroExterno = 10;
const multiplicarPorDos = (numero) => numero * 2;

// Independientemente de numeroExterno, la función es pura
console.log(multiplicarPorDos(5)); // 10
console.log(multiplicarPorDos(numeroExterno)); // 20
