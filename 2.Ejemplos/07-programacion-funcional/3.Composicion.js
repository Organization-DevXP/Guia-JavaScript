// Ejemplo de composición de funciones
const agregarUno = (numero) => numero + 1;
const multiplicarPorTres = (numero) => numero * 3;

// Combinando ambas funciones
const agregarYMultiplicar = (numero) => multiplicarPorTres(agregarUno(numero));

console.log(agregarYMultiplicar(2)); // (2 + 1) * 3 = 9

// Composición más avanzada con múltiples funciones
const dividirPorDos = (numero) => numero / 2;

// Composición manual
const procesoComplejo = (numero) =>
    dividirPorDos(multiplicarPorTres(agregarUno(numero)));

console.log(procesoComplejo(4)); // (((4 + 1) * 3) / 2) = 7.5
