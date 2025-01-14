// Ejemplo de control de flujo: break y continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Sale del bucle cuando i es igual a 5
    }
    console.log("Número: " + i);
}

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;  // Omite la iteración cuando i es igual a 3
    }
    console.log("Número: " + i);
}
