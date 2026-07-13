const express = require("express");

const router = express.Router();

const { obtenerHistorial } = require("../database/sensorRepository");

router.get("/", async (req, res) => {

    try {

        const datos = await obtenerHistorial(100);

        res.json(datos);

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            error: "Error obteniendo historial"

        });

    }

});

module.exports = router;