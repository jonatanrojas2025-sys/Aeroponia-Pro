
import mqtt from "mqtt";
console.log("MQTTService cargado");

const options = {
    username: "ESP32_AEROPONIA",
    password: "Aeroponia2026",
    protocol: "wss",
};

const client = mqtt.connect(
    "wss://80e94aa7902f4088820aafa1ee8afc60.s1.eu.hivemq.cloud:8884/mqtt",
    options
);

client.on("connect", () => {

    console.log("✅ Conectado a HiveMQ");

    client.subscribe("aeroponia/sensores");

});

client.on("message", (topic, message) => {

    console.log("Mensaje recibido:");

    console.log(topic);

    console.log(message.toString());

});
client.on("connect", () => {
    console.log("✅ Conectado a HiveMQ");
    alert("Conectado a HiveMQ");   // SOLO PARA LA PRUEBA
    client.subscribe("aeroponia/sensores");
});

client.on("error", (err) => {
    console.log(err);
    alert("Error MQTT: " + err.message);
});

client.on("close", () => {
    alert("MQTT desconectado");
});
export default client;