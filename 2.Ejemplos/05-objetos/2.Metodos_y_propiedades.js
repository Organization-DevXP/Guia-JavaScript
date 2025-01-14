// Objeto con propiedades y un método que calcula el precio con impuesto
const producto = {
    nombre: "Laptop",
    precio: 1200,
    calcularImpuesto: function () {
        return this.precio * 0.16; // Calcula el impuesto del 16%
    }
};

console.log(producto.calcularImpuesto()); // Output: 192
