const monedas = [
    {id: 1, nombre: "Dólar", tasa: 1009.38},
    {id: 2, nombre: "Euro", tasa: 1065.20}
];

function convertir() {
    const valor = parseFloat(prompt("Ingresa el monto en pesos:"));
    let resultado = 0;
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, ingresa un monto válido.");
        return;
    }
    const monedaSeleccionada = document.getElementById("moneda").value;
    const moneda = monedas.find(m => m.id == monedaSeleccionada)
    if (moneda) {
        resultado = valor / moneda.tasa;
        if (moneda.nombre === "Dólar") {
            alert("El cambio de Pesos a Dólares es: $" + resultado.toFixed(2));
        } else if (moneda.nombre === "Euro") {
            alert("El cambio de Pesos a Euros es: €" + resultado.toFixed(2));
        }
    } else {
        alert("Por favor, selecciona una moneda.");
    }
}

