
require("dotenv").config();

console.log("MQTT_URL:", process.env.MQTT_URL);
console.log("MQTT_USERNAME:", process.env.MQTT_USERNAME);

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Importar rutas
const sensoresRoute = require("./routes/sensores");

// Ruta principal
app.get("/", (req, res) => {
    res.send("🚀 Servidor Aeroponía funcionando");
});

// API
app.use("/api/sensores", sensoresRoute);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});