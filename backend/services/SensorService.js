const { guardarSensor } = require("../database/sensorRepository");

const { agregarLectura } = require("./estadisticasService");

const { calcularISSA } = require("./issaService");

const { generarDiagnostico } = require("../ia/diagnosticoService");

async function procesarLectura(datos) {

    if (!datos) {

        throw new Error("Datos inexistentes.");

    }

    await guardarSensor(datos);

    agregarLectura(datos);

    const issa = calcularISSA(datos);

    const diagnostico = generarDiagnostico(datos);



    console.log("======================================");
    console.log("🌱 MIAA - Motor Inteligente Aeropónico");
    console.log("======================================\n");

    console.log("ISSA:", issa.issa);

    console.log("");

    console.log("Estado:", diagnostico.estado);

    console.log("");

    if (diagnostico.problemas.length === 0) {

        console.log("✅ No se detectaron anomalías.");

    } else {

        diagnostico.problemas.forEach((problema, index) => {

            console.log(`Problema ${index + 1}`);

            console.log("Variable:", problema.variable);

            console.log("Valor:", problema.valor);

            console.log("Estado:", problema.estado);

            console.log("Impacto:", problema.impacto);

            console.log("Recomendación:", problema.recomendacion);

            console.log("--------------------------------");

        });

    }

    return datos;

}

module.exports = {

    procesarLectura

};