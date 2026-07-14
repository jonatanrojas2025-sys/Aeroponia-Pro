const express = require("express");
const router = express.Router();

const mqttClient = require("../mqtt/client");

router.get("/", (req, res) => {

    const datos = mqttClient.getUltimoDato();

    res.json({

        temperaturaAire: datos.temperaturaAire,
        humedad: datos.humedad,
        presion: datos.presion,
        altitud: datos.altitud,
        temperaturaAgua: datos.temperaturaAgua,
        ph: datos.ph,
        luminosidad: datos.luminosidad,
        bomba: datos.bomba,
        wifi: datos.wifi,

        fecha: new Date().toLocaleString("es-CO")

    });

});

module.exports = router;