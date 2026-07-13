const conectarDB = require("./sqlite");

async function guardarEstadisticas(datos) {

    const db = await conectarDB();

    await db.run(

        `
        INSERT INTO estadisticas_minuto(

            minuto,
            muestras,

            temperaturaProm,
            temperaturaMin,
            temperaturaMax,

            humedadProm,

            phProm,

            luminosidadProm

        )

        VALUES(?,?,?,?,?,?,?,?)
        `,

        [

            datos.minuto,

            datos.muestras,

            datos.temperaturaProm,
            datos.temperaturaMin,
            datos.temperaturaMax,

            datos.humedadProm,

            datos.phProm,

            datos.luminosidadProm

        ]

    );

}

module.exports = {

    guardarEstadisticas

};