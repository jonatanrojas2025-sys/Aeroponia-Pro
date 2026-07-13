let buffer = [];

/**
 * Agrega una nueva lectura al buffer.
 */

function agregarLectura(datos) {

    buffer.push({

        fecha: new Date(),

        temperatura: datos.temp_air,

        humedad: datos.hum,

        ph: datos.ph,

        luminosidad: datos.lux

    });

}

/**
 * Devuelve todas las muestras almacenadas.
 */

function obtenerBuffer() {

    return buffer;

}

/**
 * Limpia el buffer.
 */

function limpiarBuffer() {

    buffer = [];

}

/**
 * Calcula estadísticas básicas.
 */

function calcularEstadisticas() {

    if (buffer.length === 0) {

        return null;

    }

    const temperaturas = buffer.map(x => x.temperatura);

    const humedades = buffer.map(x => x.humedad);

    const ph = buffer.map(x => x.ph);

    const lux = buffer.map(x => x.luminosidad);

    const promedio = arr =>
        arr.reduce((a, b) => a + b, 0) / arr.length;

    return {

        muestras: buffer.length,

        temperaturaProm: promedio(temperaturas),

        temperaturaMin: Math.min(...temperaturas),

        temperaturaMax: Math.max(...temperaturas),

        humedadProm: promedio(humedades),

        phProm: promedio(ph),

        luminosidadProm: promedio(lux)

    };

}

module.exports = {

    agregarLectura,

    obtenerBuffer,

    limpiarBuffer,

    calcularEstadisticas

};