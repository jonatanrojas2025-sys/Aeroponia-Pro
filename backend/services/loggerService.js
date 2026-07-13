function obtenerHora() {

    return new Date().toLocaleTimeString("es-CO");

}

function escribir(tipo, mensaje) {

    console.log(`[${obtenerHora()}] ${tipo} ${mensaje}`);

}

function info(mensaje) {

    escribir("ℹ️ INFO", mensaje);

}

function mqtt(mensaje) {

    escribir("📡 MQTT", mensaje);

}

function sensor(mensaje) {

    escribir("📥 SENSOR", mensaje);

}

function miaa(mensaje) {

    escribir("🧠 MIAA", mensaje);

}

function alerta(mensaje) {

    escribir("🚨 ALERTA", mensaje);

}

function error(mensaje) {

    escribir("❌ ERROR", mensaje);

}

module.exports = {

    info,
    mqtt,
    sensor,
    miaa,
    alerta,
    error

};