# 6. Arrays

En JavaScript, un **array** (o arreglo) es una estructura de datos que puede almacenar múltiples valores en una sola variable. Los arrays son especialmente útiles cuando necesitas trabajar con colecciones de datos, como listas de números, cadenas de texto, objetos, o incluso otros arrays.

## ¿Qué es un Array?

Un **array** es un objeto especial que permite almacenar una colección ordenada de elementos. Los elementos dentro de un array están indexados, es decir, cada uno tiene una posición numerada que empieza desde 0.

### Ejemplo:

Imagina que tienes una lista de nombres de estudiantes. Puedes guardarla en un array:

```javascript
const estudiantes = ["Juan", "Ana", "Carlos", "Maria"];

console.log(estudiantes); // Output: ["Juan", "Ana", "Carlos", "Maria"]
```

En este ejemplo, estudiantes es un array que contiene cuatro cadenas de texto. Cada elemento en el array tiene un **índice**:

- "Juan" está en el índice 0
- "Ana" está en el índice 1
- "Carlos" está en el índice 2
- "Maria" está en el índice 3

### Crear un Array

Hay varias maneras de crear un array en JavaScript:

1. **Usando corchetes `[]`**:
   La forma más común de crear un array es utilizando corchetes `[]`, donde los elementos están separados por comas.

```javascript
const frutas = ["manzana", "banana", "naranja"];
```

2. **Usando el constructor `new Array()`**:

Puedes crear un array usando la palabra clave `new` seguida de `Array()`. Sin embargo, este método no es tan común debido a su sintaxis más compleja.

```javascript
const numeros = new Array(1, 2, 3, 4, 5);
```

> **Nota: Si solo pones un número dentro de `new Array()`, este representará el número de elementos en el array, no los elementos en sí. Por ejemplo, `new Array(5)` crea un array con 5 espacios vacíos.**

3. **Array vacío:**
   Puedes crear un array vacío y agregarle elementos más tarde.

```javascript
const animales = [];
animales.push("perro");
animales.push("gato");
console.log(animales); // Output: ["perro", "gato"]
```

## Acceder a los Elementos de un Array

Para acceder a los elementos de un array, usamos su **índice**.

### Ejemplo:

```javascript
const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // Output: rojo
console.log(colores[2]); // Output: azul
```

> **Importante: Si intentas acceder a un índice que no existe, como `colores[5]`, el resultado será `undefined`.**

## Modificar un Array

Puedes modificar los elementos de un array accediendo a su índice y asignando un nuevo valor.

```javascript
const numeros = [1, 2, 3];
numeros[1] = 5; // Cambia el valor en el índice 1
console.log(numeros); // Output: [1, 5, 3]
```

## Métodos Comunes de Arrays

Los arrays en JavaScript tienen una variedad de métodos útiles. Aquí te explicamos algunos de los más comunes:

1. `push()`

El método `push()` agrega uno o más elementos al final de un array.

```javascript
const colores = ["rojo", "verde"];
colores.push("azul", "amarillo");
console.log(colores); // Output: ["rojo", "verde", "azul", "amarillo"]
```

2. `pop()`

El método `pop()` elimina el último elemento de un array y lo devuelve.

```javascript
const colores = ["rojo", "verde", "azul"];
const eliminado = colores.pop();
console.log(colores); // Output: ["rojo", "verde"]
console.log(eliminado); // Output: azul
```

3. `shift()`

El método `shift()` elimina el primer elemento de un array.

```javascript
const colores = ["rojo", "verde", "azul"];
const eliminado = colores.shift();
console.log(colores); // Output: ["verde", "azul"]
console.log(eliminado); // Output: rojo
```

4. `unshift()`

El método `unshift()` agrega uno o más elementos al principio de un array.

```javascript
const colores = ["rojo", "verde"];
colores.unshift("amarillo");
console.log(colores); // Output: ["amarillo", "rojo", "verde"]
```

5. `map()`

El método `map()` crea un nuevo array con los resultados de la ejecución de una función sobre cada elemento del array original.

```javascript
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function (num) {
  return num * num;
});
console.log(cuadrados); // Output: [1, 4, 9, 16, 25]
```

En este ejemplo, `map()` toma cada número en el array `numeros` y devuelve su cuadrado en el nuevo array `cuadrados`.

6. `filter()`

El método `filter()` crea un nuevo array con todos los elementos que pasen una prueba (función que devuelva `true` o `false`).

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7];
const numerosPares = numeros.filter(function (num) {
  return num % 2 === 0;
});
console.log(numerosPares); // Output: [2, 4, 6]
```

Aquí, `filter()` selecciona solo los números pares del array `numeros` y los pone en el nuevo array `numerosPares`.

7. `forEach()`

El método `forEach()` ejecuta una función en cada uno de los elementos de un array, pero no devuelve un nuevo array.

```javascript
const frutas = ["manzana", "banana", "cereza"];
frutas.forEach(function (fruta) {
  console.log(fruta);
});
// Output:
// manzana
// banana
// cereza
```

## Recorrer un Array con un Bucle

También puedes recorrer un array usando un bucle tradicional, como `for`, `while` o `for...of`.

**Ejemplo con `for`:**

```javascript
const frutas = ["manzana", "banana", "cereza"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
// Output:
// manzana
// banana
// cereza
```

## Consejos para Trabajar con Arrays

- **Evita modificar el array original innecesariamente.** En lugar de usar métodos como `push()` o `pop()`, que modifican el array, usa métodos como `map()` y `filter()` que crean nuevos arrays.
- **Usa `forEach()` para realizar acciones en cada elemento de un array sin necesidad de crear un nuevo array.**
- **Utiliza `map()` cuando necesites transformar los elementos de un array y `filter()` cuando necesites extraer solo aquellos elementos que cumplen con una condición.**

🚀 **Siguiente paso**:  
Avanza al tema de **[Programación Funcional](./07-programacion-funcional.md)** para explorar funciones de orden superior, inmutabilidad y más técnicas avanzadas de programación.

🖥️ **¿Prefieres aprender con ejemplos prácticos?**  
Echa un vistazo a los ejemplos prácticos:

- **[1.Map.js](../2.Ejemplos/06-arrays/1.Map.js)**
- **[2.Filter.js](../2.Ejemplos/06-arrays/2.Filter.js)**
- **[3.Foreach.js](../2.Ejemplos/06-arrays/3.Foreach.js)**
