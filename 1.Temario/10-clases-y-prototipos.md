## 10. **[Clases y Prototipos](./temario/10-clases-y-prototipos.md)**

Profundiza en la programación orientada a objetos.

### **1. Clases**

Las **clases** en JavaScript son plantillas para crear objetos. Definen las propiedades y métodos que los objetos de esa clase tendrán.

#### Sintaxis básica de una clase

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`¡Hola, soy ${this.nombre} y tengo ${this.edad} años!`);
  }
}

// Crear una instancia de la clase
const persona1 = new Persona("Juan", 25);

// Llamar a un método de la clase
persona1.saludar(); // ¡Hola, soy Juan y tengo 25 años!
```

- `constructor()`: Es un método especial para inicializar las propiedades de los objetos.
- `this`: Hace referencia al objeto actual.
- `new`: Se usa para crear una nueva instancia de la clase.

## 2. Herencia

Las clases en JavaScript pueden heredar propiedades y métodos de otras clases, lo que permite la reutilización del código.

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un sonido.`);
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llama al constructor de la clase padre
    this.raza = raza;
  }

  hablar() {
    console.log(`${this.nombre} dice ¡guau!`);
  }
}

const perro1 = new Perro("Rex", "Labrador");
perro1.hablar(); // Rex dice ¡guau!
```

- `extends`: Se utiliza para crear una clase que hereda de otra.
- `super()`: Llama al constructor de la clase padre.

## 3. Prototipos

Cada función en JavaScript tiene un objeto llamado prototipo. Las propiedades y métodos que se agregan al prototipo están disponibles para todas las instancias de la clase.

```javascript
// Definir una clase
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Agregar un método al prototipo de la clase
Persona.prototype.saludar = function () {
  console.log(`¡Hola, soy ${this.nombre} y tengo ${this.edad} años!`);
};

// Crear una instancia de Persona
const persona2 = new Persona("Ana", 30);

// Llamar al método
persona2.saludar(); // ¡Hola, soy Ana y tengo 30 años!
```

- `Persona.prototype.saludar`: Los métodos definidos en el prototipo se comparten entre todas las instancias de la clase.

## 4. Métodos Estáticos

Los **métodos estáticos** se definen dentro de la clase pero no están disponibles para las instancias de la clase. Se usan para funciones que no dependen de las instancias.

```javascript
class Matematicas {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Matematicas.sumar(3, 4)); // 7
```

- `static`: Define un método estático que pertenece a la clase, no a las instancias de la clase.

> 🚀 **Siguiente paso:**  
> Avanza al tema de **[Manejo de Errores](./11-manejo-errores.md)** para aprender a anticipar y gestionar errores y mejorar la experiencia del usuario.

> 🖥️ **¿Prefieres aprender con ejemplos prácticos?**  
> Echa un vistazo a los ejemplos:
> - **[1.ClasesBasicas.js](../2.Ejemplos/10-clases-y-prototipos/ClasesBasicas.js)**
> - **[2.Herencia.js](../2.Ejemplos/10-clases-y-prototipos/Herencia.js)**
> - **[3.Prototipos.js](../2.Ejemplos/10-clases-y-prototipos/Prototipos.js)**
