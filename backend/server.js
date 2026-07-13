require("dotenv").config();

console.log("MQTT_URL:", process.env.MQTT_URL);
console.log("MQTT_USERNAME:", process.env.MQTT_USERNAME);
const { mostrarInformacionSistema } = require("./services/systemInfoService");
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3001;

const iniciarMotor = require("./ia/motorMIAA").iniciarMotor;
const eventos = require("./services/eventService");

eventos.registrar(
    "INFO",
    "Sistema",
    "FDC124 iniciado correctamente."
);
// Middleware
app.use(cors());
app.use(express.json());

// Rutas
const sensoresRoute = require("./routes/sensores");

app.get("/", (req, res) => {

    res.send("🚀 Backend Aeroponía funcionando");

});

app.use("/api/sensores", sensoresRoute);

// Iniciar MIAA
iniciarMotor();
mostrarInformacionSistema();

// Servidor
app.listen(PORT, () => {

    console.log(`Servidor iniciado en http://localhost:${PORT}`);

});