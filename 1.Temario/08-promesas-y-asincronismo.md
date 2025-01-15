# Promesas y Asincronismo

El asincronismo en JavaScript es una característica poderosa que permite manejar operaciones que toman tiempo, como la carga de datos desde una API o la lectura de un archivo. En esta sección, aprenderás cómo trabajar con **promesas**, una de las herramientas más importantes para manejar operaciones asíncronas en JavaScript.

## ¿Qué es el asincronismo?

El asincronismo significa que JavaScript puede realizar múltiples tareas al mismo tiempo sin bloquear la ejecución del programa. Esto es especialmente útil cuando estamos esperando respuestas externas, como una solicitud a un servidor.

> Por ejemplo: Cuando le pides algo a una API, JavaScript puede continuar ejecutando otras tareas mientras espera que el servidor responda.

## Promesas: ¿Qué son y cómo funcionan?

Una **promesa** en JavaScript es un objeto que representa la eventual finalización (o falla) de una operación asíncrona.  
Podemos imaginarla como una "promesa" de que algo sucederá:

1. **Pendiente**: La promesa está en curso.
2. **Resuelta**: La promesa se cumplió correctamente.
3. **Rechazada**: Hubo un error o fallo.

### Creando una promesa

```javascript
const miPromesa = new Promise((resolve, reject) => {
  const exito = true; // Cambia esto a false para probar el rechazo.

  if (exito) {
    resolve("¡La promesa fue resuelta con éxito!");
  } else {
    reject("Hubo un error al resolver la promesa.");
  }
});
```

## Métodos para manejar promesas

Las promesas se manejan con los métodos `.then()`, `.catch()` y `.finally()`.

- `.then()`: Se ejecuta si la promesa fue resuelta con éxito.
- `.catch()`: Se ejecuta si la promesa fue rechazada.
- `.finally()`: Se ejecuta siempre, sin importar si la promesa fue resuelta o rechazada.

### Ejemplo básico

```javascript
miPromesa
  .then((mensaje) => {
    console.log(mensaje); // "¡La promesa fue resuelta con éxito!"
  })
  .catch((error) => {
    console.error(error); // "Hubo un error al resolver la promesa."
  })
  .finally(() => {
    console.log("La promesa terminó, sin importar el resultado.");
  });
```

## Async/Await: Una forma moderna de trabajar con promesas

El enfoque `async/await` permite escribir código asíncrono que parece más síncrono, lo que lo hace más fácil de leer y entender.

### Ejemplo básico con async/await

```javascript
const manejarPromesa = async () => {
  try {
    const mensaje = await miPromesa; // Espera a que la promesa se resuelva.
    console.log(mensaje); // "¡La promesa fue resuelta con éxito!"
  } catch (error) {
    console.error(error); // "Hubo un error al resolver la promesa."
  } finally {
    console.log("La función terminó.");
  }
};
manejarPromesa();
```

> 🚀 **Siguiente paso:**  
> Avanza al tema de **[Módulos](./09-modulos.md)** para descubrir cómo organizar tu código en archivos reutilizables.

> 🖥️ **¿Prefieres aprender con ejemplos prácticos?**  
Echa un vistazo a los ejemplos:
> - **[1.CreandoPromesas.js](../2.Ejemplos/08-promesas-y-asincronismo/CreandoPromesas.js)**
> - **[2.ManejandoPromesas.js](../2.Ejemplos/08-promesas-y-asincronismo/ManejandoPromesas.js)**
> - **[3.AsyncAwait.js](../2.Ejemplos/08-promesas-y-asincronismo/AsyncAwait.js)**
