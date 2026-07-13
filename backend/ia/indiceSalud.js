const cultivo = require("../config/cultivoConfig");

/**
 * Calcula un puntaje de 0 a 100
 * según qué tan cerca esté el valor del ideal.
 */

function calcularPuntaje(valor, config) {

    if (valor < config.min) {

        return 0;

    }

    if (valor > config.max) {

        return 0;

    }

    const distanciaMax = Math.max(

        config.ideal - config.min,

        config.max - config.ideal

    );

    const distancia = Math.abs(valor - config.ideal);

    let puntaje = 100 - (distancia / distanciaMax) * 100;

    if (puntaje < 0) {

        puntaje = 0;

    }

    return Number(puntaje.toFixed(2));

}

/**
 * Evalúa toda la lectura.
 */

function evaluarSensores(datos) {

    return {

        temperaturaAire: calcularPuntaje(

            datos.temp_air,

            cultivo.temperaturaAire

        ),

        temperaturaAgua: calcularPuntaje(

            datos.temp_water,

            cultivo.temperaturaAgua

        ),

        humedad: calcularPuntaje(

            datos.hum,

            cultivo.humedad

        ),

        ph: calcularPuntaje(

            datos.ph,

            cultivo.ph

        ),

        luminosidad: calcularPuntaje(

            datos.lux,

            cultivo.luminosidad

        )

    };

}

module.exports = {

    evaluarSensores

};