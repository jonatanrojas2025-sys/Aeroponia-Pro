module.exports = {

    id: "humedad",

    nombre: "Humedad Relativa",

    unidad: "%",

    sensor: "BMP280 / Sensor Ambiental",

    descripcion:
        "Representa la cantidad de vapor de agua presente en el ambiente.",

    importancia: "Alta",

    rangoIdeal: {

        minimo: 65,

        maximo: 85

    },

    rangoAceptable: {

        minimo: 60,

        maximo: 90

    },

    rangoCritico: {

        minimo: 50,

        maximo: 95

    },

    impacto:
        "Una humedad inadecuada afecta la transpiración y el intercambio gaseoso.",

    recomendacionBajo:
        "Incrementar la humedad mediante nebulización.",

    recomendacionAlto:
        "Mejorar la ventilación del sistema.",

    participaISSA: true,

    activo: true

};