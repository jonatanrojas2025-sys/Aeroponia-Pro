module.exports = {

    id: "nivel",

    nombre: "Nivel del Tanque",

    unidad: "%",

    sensor: "HC-SR04",

    descripcion:
        "Monitorea la cantidad de solución nutritiva disponible en el tanque.",

    importancia: "Muy Alta",

    rangoIdeal: {

        minimo: 70,

        maximo: 100

    },

    rangoAceptable: {

        minimo: 40,

        maximo: 100

    },

    rangoCritico: {

        minimo: 20,

        maximo: 100

    },

    impacto:
        "Un nivel bajo puede provocar funcionamiento en seco de la bomba.",

    recomendacionBajo:
        "Recargar el tanque con solución nutritiva.",

    recomendacionAlto:
        "No aplica.",

    participaISSA: true,

    activo: false

};