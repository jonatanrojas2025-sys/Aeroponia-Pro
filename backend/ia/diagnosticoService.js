const cultivo = require("../config/cultivoConfig");

function revisarVariable(nombre, valor, config, impacto) {

    if (valor < config.min) {

        return {

            variable: nombre,

            estado: "BAJO",

            gravedad: "ALTA",

            valor,

            rango: `${config.min} - ${config.max}`,

            descripcion: `${nombre} por debajo del rango recomendado.`,

            impacto,

            recomendacion: `Incrementar ${nombre}.`

        };

    }

    if (valor > config.max) {

        return {

            variable: nombre,

            estado: "ALTO",

            gravedad: "ALTA",

            valor,

            rango: `${config.min} - ${config.max}`,

            descripcion: `${nombre} por encima del rango recomendado.`,

            impacto,

            recomendacion: `Disminuir ${nombre}.`

        };

    }

    return null;

}

function generarDiagnostico(datos) {

    const problemas = [];

    const temperaturaAire = revisarVariable(

        "Temperatura del aire",

        datos.temp_air,

        cultivo.temperaturaAire,

        "Puede generar estrés térmico en la planta."

    );

    if (temperaturaAire) problemas.push(temperaturaAire);

    const temperaturaAgua = revisarVariable(

        "Temperatura del agua",

        datos.temp_water,

        cultivo.temperaturaAgua,

        "Puede disminuir el oxígeno disuelto."

    );

    if (temperaturaAgua) problemas.push(temperaturaAgua);

    const humedad = revisarVariable(

        "Humedad",

        datos.hum,

        cultivo.humedad,

        "Puede afectar la transpiración del cultivo."

    );

    if (humedad) problemas.push(humedad);

    const ph = revisarVariable(

        "pH",

        datos.ph,

        cultivo.ph,

        "Puede impedir una correcta absorción de nutrientes."

    );

    if (ph) problemas.push(ph);

    const luz = revisarVariable(

        "Luminosidad",

        datos.lux,

        cultivo.luminosidad,

        "Puede limitar la fotosíntesis."

    );

    if (luz) problemas.push(luz);

    return {

        estado: problemas.length === 0 ? "SALUDABLE" : "REQUIERE ATENCIÓN",

        problemas

    };

}

module.exports = {

    generarDiagnostico

};