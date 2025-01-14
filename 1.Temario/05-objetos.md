# 5. Objetos y Clases

En JavaScript, los **objetos** son estructuras fundamentales que nos permiten agrupar datos y comportamientos relacionados. Los objetos pueden representar cosas del mundo real, como una persona, un coche o un producto. Las **clases**, por otro lado, son una forma de crear objetos con una estructura definida y reutilizable. Las clases permiten crear múltiples instancias de objetos que comparten propiedades y comportamientos similares.

## ¿Qué es un objeto?

Un **objeto** en JavaScript es una colección de propiedades y métodos. Las propiedades son datos asociados con el objeto, y los métodos son funciones que definen comportamientos.

### Ejemplo:

Imagina que quieres representar a una persona. Un objeto `persona` podría tener propiedades como el nombre y la edad, y un método que nos permita saludar.

```javascript
const persona = {
  nombre: "Juan",
  edad: 25,
  saludar: function () {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  },
};

console.log(persona.saludar()); // Output: Hola, mi nombre es Juan y tengo 25 años.
```

### En el ejemplo anterior:

- nombre y edad son propiedades del objeto persona.
- saludar es un método que pertenece al objeto persona. Usamos la palabra clave this para referirnos al objeto actual dentro de su propio contexto.

## ¿Cómo se crea un objeto?

1. **Usando un literal de objeto:** Esta es la forma más sencilla y común de crear objetos. Solo necesitas escribir `{}` y dentro de las llaves defines las propiedades y métodos del objeto.

```javascript
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  mostrarInfo: function () {
    return `${this.marca} ${this.modelo}, ${this.año}`;
  },
};

console.log(coche.mostrarInfo()); // Output: Toyota Corolla, 2020
```

2. **Usando un constructor de objetos:** A veces, es útil crear un objeto utilizando la función `new Object()`. Esto es menos común pero útil en ciertos casos.

```javascript
const persona = new Object();
persona.nombre = "Ana";
persona.edad = 30;
persona.saludar = function () {
  return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
};

console.log(persona.saludar()); // Output: Hola, soy Ana y tengo 30 años.
```

3. **Funciones Constructoras:** Cuando necesitas crear muchos objetos con la misma estructura, puedes usar una función constructora, que te permite definir la estructura del objeto de manera reutilizable.

```javascript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function () {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  };
}

const persona1 = new Persona("Carlos", 40);
const persona2 = new Persona("María", 35);

console.log(persona1.saludar()); // Output: Hola, soy Carlos y tengo 40 años.
console.log(persona2.saludar()); // Output: Hola, soy María y tengo 35 años.
```

En este ejemplo, `Persona` es una **función constructora** que define el formato de los objetos que queremos crear. Usamos `new Persona()` para crear nuevas instancias de objetos.

## ¿Qué son las clases?

Las clases en JavaScript son una forma más moderna de crear objetos. Introducidas en ECMAScript 6 (ES6), las clases nos permiten definir un patrón para la creación de objetos de manera más sencilla y legible. Las clases también nos permiten trabajar con herencia, lo que significa que podemos crear nuevas clases basadas en otras, compartiendo propiedades y métodos.

### Sintaxis de una clase:

Una clase se define usando la palabra clave class. Dentro de la clase, definimos un constructor, que es una función especial que se ejecuta cuando creamos un nuevo objeto de esa clase. También podemos definir métodos dentro de la clase.

### Ejemplo de una clase:

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

const persona1 = new Persona("Juan", 28);
const persona2 = new Persona("Ana", 32);

console.log(persona1.saludar()); // Output: Hola, soy Juan y tengo 28 años.
console.log(persona2.saludar()); // Output: Hola, soy Ana y tengo 32 años.
```

En este ejemplo:

- `constructor` es una función especial que inicializa las propiedades del objeto.
- `saludar()` es un método que pertenece a la clase `Persona`.

## Herencia con clases

La herencia permite que una clase pueda heredar las propiedades y métodos de otra clase. Esto es útil cuando queremos crear una clase más específica basada en una clase general.

### Ejemplo de herencia:

Imagina que tienes una clase general Animal y quieres crear una clase más específica Perro. Usaríamos extends para crear la herencia.

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    return `${this.nombre} hace un sonido.`;
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llama al constructor de la clase Animal
    this.raza = raza;
  }

  hacerSonido() {
    return `${this.nombre} dice: ¡Guau!`;
  }
}

const miPerro = new Perro("Max", "Labrador");

console.log(miPerro.hacerSonido()); // Output: Max dice: ¡Guau!
```

En este ejemplo:

- La clase `Perro` extiende la clase `Animal`, lo que significa que hereda las propiedades y métodos de `Animal`.
- Usamos `super()` para llamar al constructor de la clase `Animal` desde la clase `Perro`.

## Consejos para trabajar con Objetos y Clases

- **Usa objetos para representar entidades del mundo real:** Si necesitas representar algo en tu aplicación, piensa si tiene propiedades y comportamientos. Si es así, lo más probable es que puedas representarlo como un objeto.
- **Mantén las clases simples:** No sobrecargues las clases con demasiados métodos. Trata de que cada clase tenga una única responsabilidad.
- **No abuse de la herencia:** La herencia es útil, pero no debe ser la solución para todo. Prefiere la composición cuando sea posible, es decir, componer objetos más pequeños para crear otros más grandes.

> 🚀 **¿Listo para avanzar?**
> Explora el siguiente tema: **[Arrays](./06-arrays.md)** para aprender a manejar colecciones de datos con métodos avanzados como `map`, `filter`, y `reduce`.

> 🖥️ **¿Prefieres aprender con ejemplos prácticos?**
> Echa un vistazo a los ejemplos prácticos:
>
> - **[1.Creacion_de_objetos.js](../2.Ejemplos/05-objetos/1.Creacion_de_objetos.js)**
> - **[2.Metodos_y_propiedades.js](../2.Ejemplos/05-objetos/2.Metodos_y_propiedades.js)**
> - **[3.Clases_y_herencia.js](../2.Ejemplos/05-objetos/3.Clases_y_herencia.js)**

