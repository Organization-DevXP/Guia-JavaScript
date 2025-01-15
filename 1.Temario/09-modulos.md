# Módulos: Organizando y Reutilizando Código

Cuando trabajamos en proyectos más grandes, la organización y la reutilización del código se vuelven esenciales. Los módulos en JavaScript nos permiten dividir nuestro código en archivos independientes, facilitando su mantenimiento y reutilización.

## ¿Qué son los módulos?

Un módulo es un archivo que contiene código relacionado que puede ser exportado y utilizado en otros archivos. Esto permite:

- Organizar mejor el código.
- Reutilizar funciones, clases y variables en múltiples lugares.
- Facilitar la colaboración en proyectos grandes.

## Ventajas de usar módulos

1. **Mantenimiento más sencillo:** Divide el código en piezas pequeñas y manejables.
2. **Reutilización:** Evita duplicar código.
3. **Escalabilidad:** Maneja proyectos más grandes con facilidad.
4. **Encapsulación:** Protege el código dentro de su contexto.

## Tipos de módulos en JavaScript

1. **ES Modules (ESM):**  
   Introducidos en ES6, estos son el estándar moderno. Utilizan las palabras clave `import` y `export`.
2. **CommonJS:**  
   Utilizado principalmente en Node.js, utiliza `require` y `module.exports`.

## Usando ES Modules

### 1. Exportar elementos

Puedes exportar funciones, objetos, variables o clases de un archivo.

```javascript
// archivo.js
export const saludo = "Hola, mundo";

export function suma(a, b) {
  return a + b;
}
```

### 2. Importar elementos

Importa lo que necesites en otro archivo.

```javascript
// principal.js
import { saludo, suma } from "./archivo.js";

console.log(saludo); // "Hola, mundo"
console.log(suma(2, 3)); // 5
```

### 3. Exportación por defecto

Útil cuando quieres exportar un único valor principal.

```javascript
// calculadora.js
export default function multiplicar(a, b) {
  return a * b;
}
```

```javascript
// principal.js
import multiplicar from "./calculadora.js";

console.log(multiplicar(4, 5)); // 20
```

## Consejos para trabajar con módulos

- Usa nombres descriptivos para tus módulos y funciones.
- Mantén cada archivo enfocado en una funcionalidad específica.
- Organiza los archivos en carpetas según su funcionalidad o dominio.

> 🚀 **Siguiente paso:**  
> Avanza al tema de **[Clases y Prototipos](./10-clases-y-prototipos.md)** para profundizar en la programación orientada a objetos.

> 🖥️ **¿Prefieres aprender con ejemplos prácticos?**  
> Echa un vistazo a los ejemplos:
>
> - **[1.ESModules.js](../2.Ejemplos/09-modulos/ESModules.js)**
> - **[2.CommonJS.js](../2.Ejemplos/09-modulos/CommonJS.js)**
> - **[3.ExportDefault.js](../2.Ejemplos/09-modulos/ExportDefault.js)**
