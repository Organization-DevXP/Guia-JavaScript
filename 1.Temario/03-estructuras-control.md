# 🟩 Estructuras de Control

Las **estructuras de control** son fundamentales para tomar decisiones y manejar el flujo del programa. Aquí aprenderás sobre los conceptos más importantes con ejemplos simples.

## 1. **Condicionales**

### **a. `if`**

El `if` ejecuta un bloque de código solo si la condición es **verdadera**.

```javascript
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```

### **b. `else`**

El `else` ejecuta un bloque de código si la condición del if es falsa.

```javascript
let temperatura = 15;

if (temperatura > 25) {
  console.log("Hace calor");
} else {
  console.log("Hace frío");
}
```

### **c. `else if`**

El `else if` permite evaluar múltiples condiciones.

```javascript
let hora = 15;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
```

### **d. `switch`**

El `switch` evalúa una expresión contra varios casos posibles.

```javascript
let dia = 2;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  default:
    console.log("Día desconocido");
}
```

## 2. Bucles (Loops)

### **a. `for`**

El `for` ejecuta un bloque de código un número fijo de veces.

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Iteración:", i);
}
```

### **b. `while`**

El `while` ejecuta un bloque de código mientras la condición sea verdadera.

```javascript
let contador = 0;

while (contador < 5) {
  console.log("Contador:", contador);
  contador++;
}
```

### **c. `do...while`**

El `do...while` garantiza que el bloque se ejecute al menos una vez.

```javascript
let numero = 0;

do {
  console.log("Número:", numero);
  numero++;
} while (numero < 5);
```

## 3. Control de flujo adicional

### **a. `break`**

El `break` termina la ejecución de un bucle o switch.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Sale del bucle cuando i es igual a 5
  }
  console.log("Número:", i);
}
```

### **b. `continue`**

El `continue` salta la iteración actual y continúa con la siguiente.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // Omite la iteración cuando i es igual a 3
  }
  console.log("Número:", i);
}
```

### 📌 Resumen

Con las estructuras de control, puedes:

- Tomar decisiones condicionales usando if, else, else if y switch.
- Repetir bloques de código con for, while y do...while.
- Controlar el flujo con break y continue.

> 🚀 **¿Listo para avanzar?**  
> Explora el siguiente tema: **[Funciones](./04-funciones.md)** y descubre cómo definir, invocar y trabajar con funciones en JavaScript, una de las herramientas más poderosas del lenguaje.
