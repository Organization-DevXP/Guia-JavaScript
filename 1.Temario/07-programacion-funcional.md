# Programación Funcional

La programación funcional es un paradigma de programación que trata con funciones y datos de una manera que se enfoca en la inmutabilidad y el uso de funciones de orden superior. A diferencia de la programación imperativa (que se basa en instrucciones secuenciales), la programación funcional busca transformar datos y componer funciones para lograr el resultado deseado.

### Principales conceptos de la programación funcional en JavaScript

1. **Funciones de orden superior**

   - Las funciones de orden superior son aquellas que pueden aceptar una o más funciones como parámetros o devolver una función como resultado.
   - Ejemplo de función de orden superior: `map`, `filter`, `reduce`.

2. **Inmutabilidad**

   - La inmutabilidad implica que una vez que los datos son creados, no deben ser modificados. En lugar de cambiar el estado de una variable o un objeto, se crea una nueva instancia con los cambios.
   - En JavaScript, esto se puede lograr utilizando métodos como `Object.freeze()` o utilizando técnicas de clonación profunda.

3. **Funciones puras**

   - Una función pura es una función que siempre devuelve el mismo resultado si se le da la misma entrada y no tiene efectos secundarios. Las funciones puras no dependen de ningún estado externo.

4. **Composición de funciones**
   - La composición de funciones implica combinar varias funciones pequeñas para crear una función más compleja. Esto es muy útil cuando se desea construir un comportamiento más complejo a partir de componentes simples.

### Ejemplo práctico: Funciones de orden superior

Las funciones de orden superior son fundamentales en JavaScript moderno. Permiten manipular colecciones de datos de manera declarativa y funcional.

#### **Ejemplo 1: `map`**

El método `map` crea un nuevo arreglo con los resultados de aplicar una función a cada elemento del arreglo original.

```javascript
const numeros = [1, 2, 3, 4, 5];

const duplicar = (numero) => numero * 2;

const numerosDuplicados = numeros.map(duplicar);

console.log(numerosDuplicados); // [2, 4, 6, 8, 10]
```

#### **Ejemplo 2: `filter`**

El método `filter` crea un nuevo arreglo con todos los elementos que pasen una prueba (una función que devuelve true o false).

```javascript
const numeros = [1, 2, 3, 4, 5];

const esPar = (numero) => numero % 2 === 0;

const numerosPares = numeros.filter(esPar);

console.log(numerosPares); // [2, 4]
```

#### **Ejemplo 3: `reduce`**

El método `reduce` aplica una función acumulativa a cada elemento de un arreglo (de izquierda a derecha) para reducirlo a un solo valor.

```javascript
const numeros = [1, 2, 3, 4, 5];

const suma = (acumulador, numero) => acumulador + numero;

const total = numeros.reduce(suma, 0);

console.log(total); // 15
```

#### **Ejemplo 4: Función de orden superior personalizada**

Puedes crear tus propias funciones de orden superior. Aquí hay un ejemplo donde creamos una función que aplica una operación a todos los elementos de un arreglo.

```javascript
const aplicarOperacion = (arreglo, operacion) => arreglo.map(operacion);

const numeros = [1, 2, 3, 4];

const resultado = aplicarOperacion(numeros, (numero) => numero * 3);

console.log(resultado); // [3, 6, 9, 12]
```

**Inmutabilidad en la programación funcional**
En la programación funcional, evitamos modificar el estado de las variables. En lugar de eso, trabajamos con copias de los datos, lo que garantiza que no haya efectos secundarios inesperados.

**Ejemplo de inmutabilidad en objetos:**

```javascript
const persona = { nombre: "Juan", edad: 30 };

// En lugar de modificar la propiedad 'edad', creamos un nuevo objeto con la propiedad actualizada
const personaConEdadActualizada = { ...persona, edad: 31 };

console.log(persona); // { nombre: "Juan", edad: 30 }
console.log(personaConEdadActualizada); // { nombre: "Juan", edad: 31 }
```

**Composición de funciones**
La composición de funciones es un patrón funcional muy poderoso. Puedes crear funciones más complejas a partir de funciones más simples.

**Ejemplo de composición de funciones:**

```javascript
const agregarUno = (numero) => numero + 1;
const multiplicarPorDos = (numero) => numero * 2;

// Composición de funciones: agregarUno -> multiplicarPorDos
const resultado = multiplicarPorDos(agregarUno(5));

console.log(resultado); // 12 (5 + 1 = 6, 6 * 2 = 12)
```
