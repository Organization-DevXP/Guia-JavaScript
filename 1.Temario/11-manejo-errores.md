# Manejo de Errores

En JavaScript, el manejo adecuado de errores es fundamental para mejorar la experiencia del usuario y garantizar que las aplicaciones funcionen sin interrupciones. Cuando se produce un error, es importante no solo detectarlo, sino también manejarlo de manera eficiente para evitar bloqueos o comportamientos inesperados en la aplicación.

## 1. Introducción al Manejo de Errores

En JavaScript, los errores pueden ser de varios tipos, como errores de sintaxis, errores de ejecución o errores lógicos. Para manejarlos correctamente, usamos las estructuras `try`, `catch`, y `finally`.

### Estructura básica de manejo de errores

```javascript
try {
  // Código que puede causar un error
  let result = riskyFunction();
} catch (error) {
  // Código que maneja el error
  console.error("Ocurrió un error:", error);
} finally {
  // Código que siempre se ejecuta, sin importar si hubo error o no
  console.log("El bloque try-catch ha finalizado.");
}
```

- `try`: Contiene el código que puede generar un error.
- `catch`: Captura el error y permite manejarlo.
- `finally`: Se ejecuta siempre, independientemente de si ocurrió un error o no.

## 2. Propagación de Errores

Los errores pueden ser propagados mediante la palabra clave `throw`. Esto permite generar errores personalizados que pueden ser capturados posteriormente.

### Ejemplo de uso de `throw`

```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("La edad debe ser mayor o igual a 18.");
  }
  console.log("Edad válida.");
}

try {
  checkAge(16); // Lanza un error
} catch (error) {
  console.error(error.message);
}
```

3. Manejo de Errores Asíncronos
   En operaciones asíncronas como las que usamos con `fetch` o promesas, el manejo de errores es igualmente importante.

```javascript
fetch("https://api.ejemplo.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Hubo un error:", error));
```

En este ejemplo, si ocurre un error al realizar la solicitud HTTP, el error será capturado por el bloque `catch` y se mostrará un mensaje de error.

> 🚀 **Siguiente paso**  
> Avanza al tema de **[Temas Avanzados](./12-avanzado.md)** para explorar
> meta-programación, patrones avanzados y mucho más.

> 🖥️ **¿Prefieres aprender con ejemplos prácticos?**  
> Echa un vistazo a los ejemplos:
>
> - **[1.ManejoErroresBasico.js](../ejemplos/11-manejo-errores/ManejoErroresBasico.js)**
> - **[2.ErroresAsincronos.js](../ejemplos/11-manejo-errores/ErroresAsincronos.js)**
> - **[3.ErroresCustomizados.js](../ejemplos/11-manejo-errores/ErroresCustomizados.js)**
