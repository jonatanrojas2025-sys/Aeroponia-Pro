module.exports = {

    id: "ph",

    nombre: "pH",

    unidad: "",

    sensor: "Sensor Analógico de pH",

    descripcion:
        "Determina la acidez o alcalinidad de la solución nutritiva.",

    importancia: "Muy Alta",

    rangoIdeal: {

        minimo: 5.5,

        maximo: 6.5

    },

    rangoAceptable: {

        minimo: 5.0,

        maximo: 7.0

    },

    rangoCritico: {

        minimo: 4.5,

        maximo: 7.5

    },

    impacto:
        "Valores fuera del rango reducen la absorción de nutrientes y afectan el desarrollo de las raíces.",

    recomendacionBajo:
        "Agregar solución reguladora para incrementar el pH.",

    recomendacionAlto:
        "Agregar solución reguladora para disminuir el pH.",

    participaISSA: true,

    activo: true

};