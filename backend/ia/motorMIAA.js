const {

    calcularEstadisticas,
    limpiarBuffer

} = require("../services/estadisticasService");

const {

    guardarEstadisticas

} = require("../database/estadisticasRepository");

let ultimoMinuto = -1;

function iniciarMotor() {

    console.log("🤖 Motor MIAA iniciado");

    setInterval(async () => {

        const ahora = new Date();

        if (ahora.getMinutes() !== ultimoMinuto) {

            ultimoMinuto = ahora.getMinutes();

            const resumen = calcularEstadisticas();

            if (resumen) {

                resumen.minuto = ahora.toLocaleString();

                await guardarEstadisticas(resumen);

                console.log("");

                console.log("📊 Estadísticas del minuto");

                console.table(resumen);

                limpiarBuffer();

            }

        }

    }, 1000);

}

module.exports = {

    iniciarMotor

};