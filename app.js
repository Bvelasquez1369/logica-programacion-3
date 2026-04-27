document.addEventListener('DOMContentLoaded', function () {

    const campoNumero = document.getElementById('numeroIngresado');
    const botonCalcular = document.getElementById('botonCalcular');
    const contenedorResultado = document.getElementById('contenedorResultado');
    const mensajeError = document.getElementById('mensajeError');

    function validarEntrada(texto) {
        const numero = parseInt(texto, 10);
        if (isNaN(numero) || numero < 0 || texto.trim() === '') {
            return null;
        }
        return numero;
    }

    function calcularFactorialConDesglose(n) {
        if (n === 0) {
            return { factorial: 1, desglose: '0! = 1 (por definición)' };
        }
        let factorial = 1;
        const factores = [];
        for (let i = 1; i <= n; i++) {
            factorial *= i;
            factores.push(i);
        }
        const desglose = factores.join(' × ') + ' = ' + factorial;
        return { factorial, desglose };
    }

    function mostrarResultado(numero, resultado) {// Mostrar resultado con formato y animación
        contenedorResultado.innerHTML = `
            <span class="simbolo-factorial">${numero}!</span> = 
            <strong>${resultado.factorial.toLocaleString('es-CO')}</strong>
            <div class="desglose">${resultado.desglose}</div>
        `;
        contenedorResultado.classList.remove('resultado-oculto');
        // Reiniciar animación
        contenedorResultado.style.animation = 'none';
        contenedorResultado.offsetHeight;
        contenedorResultado.style.animation = null;
        contenedorResultado.classList.add('resultado-visible');
    }

    function mostrarError(texto) {
        mensajeError.textContent = texto;
        mensajeError.style.display = 'block';
        contenedorResultado.classList.add('resultado-oculto');
    }

    function limpiarMensajes() {
        mensajeError.style.display = 'none';
        contenedorResultado.classList.add('resultado-oculto');
    }

    function manejarCalculo() {
        limpiarMensajes();
        const valor = campoNumero.value.trim();
        const numeroValido = validarEntrada(valor);

        if (numeroValido === null) {
            mostrarError('❌ Ingresa un número entero positivo (ej: 4).');
            return;
        }

        const resultado = calcularFactorialConDesglose(numeroValido);
        mostrarResultado(numeroValido, resultado);
    }

    // Eventos
    botonCalcular.addEventListener('click', manejarCalculo);
    campoNumero.addEventListener('keypress', function (evento) {
        if (evento.key === 'Enter') {
            evento.preventDefault();
            manejarCalculo();
        }
    });

});