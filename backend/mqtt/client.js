const mqtt = require("mqtt");
const SensorReading = require("../models/LecturaSensor");
const config = require("../config/mqttConfig");
const { procesarLectura } = require("../services/sensorService");
const LecturaSensor = require("../models/LecturaSensor");

// Variable donde guardaremos la última lectura
let ultimoDato = {
    temp_air: 0,
    hum: 0,
    press: 0,
    alt: 0,
    temp_water: 0,
    ph: 0,
    lux: 0,
    pump: false,
    wifi: 0
};

// Conectar al broker
const client = mqtt.connect(config.url, {
    username: config.username,
    password: config.password,
    protocol: "wss"
});

// Conexión
client.on("connect", () => {

    console.log("✅ Backend conectado a HiveMQ");

    client.subscribe(config.topic);

});

// Mensajes recibidos
client.on("message", async (topic, message) => {

    try {

        const datos = JSON.parse(message.toString());

        ultimoDato = new LecturaSensor(datos);

        await procesarLectura(datos);

        console.log("📥 Nueva lectura procesada por MIAA");

    }

    catch (error) {

        console.log("❌ Error procesando lectura");

        console.log(error);

    }

});

client.on("error", (err) => {

    console.log(err);

});

module.exports = {

    getUltimoDato() {

        return ultimoDato;

    }

};