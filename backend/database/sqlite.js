const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");
const path = require("path");

let db = null;

async function conectarDB() {

    if (db) {
        return db;
    }

    db = await open({

        filename: path.join(__dirname, "aeroponia.db"),

        driver: sqlite3.Database

    });

    await db.exec(`

        CREATE TABLE IF NOT EXISTS sensores (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            fecha TEXT,

            temperaturaAire REAL,
            humedad REAL,
            presion REAL,
            altitud REAL,
            temperaturaAgua REAL,
            ph REAL,
            luminosidad REAL,

            bomba INTEGER,

            wifi INTEGER

        );

        CREATE TABLE IF NOT EXISTS estadisticas_minuto(

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            minuto TEXT,

            muestras INTEGER,

            temperaturaProm REAL,
            temperaturaMin REAL,
            temperaturaMax REAL,

            humedadProm REAL,

            phProm REAL,

            luminosidadProm REAL

        );

    `);

    console.log("✅ SQLite listo");

    return db;

}

module.exports = conectarDB;