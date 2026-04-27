// Solicitar número al usuario mediante prompt
let entrada = prompt("Ingrese un número entero positivo para calcular su factorial:");

// Convertir la entrada a número entero
let numero = parseInt(entrada);

// Validar que sea un número válido y positivo
if (isNaN(numero) || numero < 0) {
    alert("Error: Debe ingresar un número entero positivo.");
    console.error("Entrada no válida:", entrada);
} else {
    // Calcular factorial de forma iterativa
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;   // multiplicar acumulativamente
    }

    // Mostrar resultado en consola
    console.log(`El factorial de ${numero} es ${factorial}`);

    // Mostrar resultado en el DOM
    const divResultado = document.getElementById("resultado");
    divResultado.innerHTML = `<p>${numero}! = <strong>${factorial}</strong></p>`;
}