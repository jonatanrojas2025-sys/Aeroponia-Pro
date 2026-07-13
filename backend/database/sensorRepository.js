const conectarDB = require("./sqlite");

async function guardarSensor(datos) {

    const db = await conectarDB();

    await db.run(

        `
        INSERT INTO sensores(

            fecha,
            temperaturaAire,
            humedad,
            presion,
            altitud,
            temperaturaAgua,
            ph,
            luminosidad,
            bomba,
            wifi

        )

        VALUES(?,?,?,?,?,?,?,?,?,?)
        `,

        [

            new Date().toISOString(),

            datos.temp_air,

            datos.hum,

            datos.press,

            datos.alt,

            datos.temp_water,

            datos.ph,

            datos.lux,

            datos.pump ? 1 : 0,

            datos.wifi

        ]

    );

}

async function obtenerHistorial(limite = 100) {

    const db = await conectarDB();

    const filas = await db.all(

        `
        SELECT *

        FROM sensores

        ORDER BY id DESC

        LIMIT ?
        `,

        [limite]

    );

    return filas;

}

module.exports = {

    guardarSensor,

    obtenerHistorial

};