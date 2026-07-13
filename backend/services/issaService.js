const {

    evaluarSensores

} = require("../ia/indiceSalud");

/**
 * Calcula el Índice de Salud
 * del Sistema Aeropónico (ISSA).
 */

function calcularISSA(datos) {

    const puntajes = evaluarSensores(datos);

    const pesos = {

        temperaturaAire: 0.15,

        temperaturaAgua: 0.25,

        humedad: 0.15,

        ph: 0.30,

        luminosidad: 0.15

    };

    let issa = 0;

    for (const variable in pesos) {

        issa += puntajes[variable] * pesos[variable];

    }

    return {

        issa: Number(issa.toFixed(2)),

        puntajes

    };

}

module.exports = {

    calcularISSA

};