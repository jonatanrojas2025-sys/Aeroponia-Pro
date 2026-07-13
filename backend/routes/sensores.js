const express = require("express");
const router = express.Router();

const mqttClient = require("../mqtt/client");

router.get("/", (req, res) => {

    const datos = mqttClient.getUltimoDato();

    res.json({

        temperaturaAire: datos.temp_air,
        humedad: datos.hum,
        presion: datos.press,
        altitud: datos.alt,
        temperaturaAgua: datos.temp_water,
        ph: datos.ph,
        luminosidad: datos.lux,
        bomba: datos.pump,
        wifi: datos.wifi,

        fecha: new Date().toLocaleString("es-CO")

    });

});

module.exports = router;