// Trabajando con objetos de forma inmutable
const persona = { nombre: "Ana", edad: 25 };

// Crear un nuevo objeto en lugar de modificar el original
const actualizarEdad = (persona, nuevaEdad) => ({ ...persona, edad: nuevaEdad });

const personaActualizada = actualizarEdad(persona, 26);

console.log(persona); // { nombre: "Ana", edad: 25 }
console.log(personaActualizada); // { nombre: "Ana", edad: 26 }

// Trabajando con arreglos de forma inmutable
const numeros = [1, 2, 3, 4, 5];

// Agregar un nuevo elemento sin modificar el arreglo original
const agregarNumero = (arreglo, nuevoNumero) => [...arreglo, nuevoNumero];

const nuevosNumeros = agregarNumero(numeros, 6);

console.log(numeros); // [1, 2, 3, 4, 5]
console.log(nuevosNumeros); // [1, 2, 3, 4, 5, 6]
