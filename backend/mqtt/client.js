const mqtt = require("mqtt");
const config = require("../config/mqttConfig");

// Variable donde guardaremos la última lectura recibida
let ultimoDato = {
    temperatura: 0,
    humedad: 0,
    ph: 0,
    caudal: 0,
    nivel: 0
};

// Conectar al broker MQTT
const client = mqtt.connect(config.url, {
    username: config.username,
    password: config.password,
    protocol: "wss"
});

// Conexión exitosa
client.on("connect", () => {

    console.log("✅ Backend conectado a HiveMQ");

    client.subscribe(config.topic);

});

// Mensajes recibidos
client.on("message", (topic, message) => {

    try {

        const datos = JSON.parse(message.toString());

        ultimoDato = datos;

        console.log("📩 Datos recibidos:");
        console.log(ultimoDato);

    } catch (error) {

        console.log("❌ Error leyendo JSON MQTT");
        console.log(error.message);

    }

});

client.on("error", (err) => {
    console.log("========== ERROR MQTT ==========");
    console.log(err);
    console.log("===============================");
});

module.exports = {

    getUltimoDato() {
        return ultimoDato;
    }

};