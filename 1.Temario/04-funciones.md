# 4. Funciones

Las funciones son bloques de código diseñados para realizar tareas específicas. Son fundamentales en JavaScript porque nos permiten reutilizar código, modularizar nuestra lógica y mantener un flujo más organizado.

## ¿Qué es una función?

Una función es una pieza de código que se puede ejecutar llamándola por su nombre. Las funciones aceptan **parámetros** (datos de entrada) y pueden devolver un resultado.

### Tipos de funciones

1. **Funciones declaradas**  
   Estas son definidas utilizando la palabra clave `function` y tienen un nombre.

   - **Ventaja**: Pueden ser llamadas antes de ser declaradas, gracias al concepto de hoisting.

2. **Funciones expresadas**  
   Estas son asignadas a una variable.

   - **Ventaja**: Permiten usar funciones anónimas y son útiles en programación funcional.

3. **Funciones flecha**  
   Introducidas en ES6, son más concisas y no vinculan su propio contexto (`this`).
   - **Ventaja**: Ideales para callbacks y funciones anónimas.

## Consejos para usar funciones eficazmente

- **Nombres descriptivos**: Usa nombres que describan claramente lo que hace la función.
- **Funciones puras**: Siempre que sea posible, asegúrate de que las funciones dependan únicamente de sus argumentos y no de variables externas.
- **Divide y vencerás**: Prefiere varias funciones pequeñas y específicas en lugar de una grande y compleja.

> 🚀 **Siguiente paso:**  
> Avanza al tema de **[Objetos](./05-objetos.md)** para aprender cómo trabajar con colecciones de datos y estructuras clave en JavaScript.

> 🖥️ **¿Prefieres aprender con ejemplos prácticos?**  
> Echa un vistazo a los ejemplos prácticos:
> - **[1.Funciones_declaradas.js](../2.Ejemplos/04-funciones/1.Funciones_declaradas.js)**
> - **[2.Funciones_expresadas.js](../2.Ejemplos/04-funciones/2.Funciones_expresadas.js)**
> - **[3.Funciones_flecha.js](../2.Ejemplos/04-funciones/3.Funciones_flecha.js)**
