const logger = require("./loggerService");

const historial = [];

function registrar(tipo, origen, descripcion) {

    const evento = {
        fecha: new Date(),
        tipo,
        origen,
        descripcion
    };

    historial.push(evento);

    switch (tipo) {

        case "INFO":
            logger.info(`[${origen}] ${descripcion}`);
            break;

        case "MQTT":
            logger.mqtt(`[${origen}] ${descripcion}`);
            break;

        case "SENSOR":
            logger.sensor(`[${origen}] ${descripcion}`);
            break;

        case "MIAA":
            logger.miaa(`[${origen}] ${descripcion}`);
            break;

        case "ALERTA":
            logger.alerta(`[${origen}] ${descripcion}`);
            break;

        case "ERROR":
            logger.error(`[${origen}] ${descripcion}`);
            break;

        default:
            logger.info(`[${origen}] ${descripcion}`);
            break;

    }

}

function obtenerEventos() {

    return historial;

}

module.exports = {

    registrar,
    obtenerEventos

};