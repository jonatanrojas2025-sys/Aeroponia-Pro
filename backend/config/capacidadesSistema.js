module.exports = {

    temperaturaAire: {

        activo: true,
        nombre: "Temperatura del Aire",
        unidad: "°C",
        participaISSA: true,
        participaDiagnostico: true

    },

    humedad: {

        activo: true,
        nombre: "Humedad",
        unidad: "%",
        participaISSA: true,
        participaDiagnostico: true

    },

    presion: {

        activo: true,
        nombre: "Presión Atmosférica",
        unidad: "hPa",
        participaISSA: false,
        participaDiagnostico: false

    },

    altitud: {

        activo: true,
        nombre: "Altitud",
        unidad: "m",
        participaISSA: false,
        participaDiagnostico: false

    },

    temperaturaAgua: {

        activo: true,
        nombre: "Temperatura del Agua",
        unidad: "°C",
        participaISSA: true,
        participaDiagnostico: true

    },

    ph: {

        activo: true,
        nombre: "pH",
        unidad: "",
        participaISSA: true,
        participaDiagnostico: true

    },

    luminosidad: {

        activo: true,
        nombre: "Luminosidad",
        unidad: "lux",
        participaISSA: true,
        participaDiagnostico: true

    },

    bomba: {

        activo: true,
        nombre: "Estado de la Bomba",
        unidad: "",
        participaISSA: false,
        participaDiagnostico: false

    },

    wifi: {

        activo: true,
        nombre: "Señal WiFi",
        unidad: "dBm",
        participaISSA: false,
        participaDiagnostico: false

    },

    nivel: {

        activo: false,
        nombre: "Nivel del Tanque",
        unidad: "%",
        participaISSA: true,
        participaDiagnostico: true

    },

    caudal: {

        activo: false,
        nombre: "Caudal",
        unidad: "L/min",
        participaISSA: true,
        participaDiagnostico: true

    },

    conductividad: {

        activo: false,
        nombre: "Conductividad Eléctrica",
        unidad: "mS/cm",
        participaISSA: true,
        participaDiagnostico: true

    },

    oxigenoDisuelto: {

        activo: false,
        nombre: "Oxígeno Disuelto",
        unidad: "mg/L",
        participaISSA: true,
        participaDiagnostico: true

    }

};