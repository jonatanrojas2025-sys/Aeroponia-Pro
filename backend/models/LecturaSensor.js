class LecturaSensor {

    constructor(datos = {}) {

        this.temperaturaAire = datos.temp_air ?? 0;

        this.humedad = datos.hum ?? 0;

        this.presion = datos.press ?? 0;

        this.altitud = datos.alt ?? 0;

        this.temperaturaAgua = datos.temp_water ?? 0;

        this.ph = datos.ph ?? 0;

        this.luminosidad = datos.lux ?? 0;

        this.bomba = datos.pump ?? false;

        this.wifi = datos.wifi ?? 0;

        // Sensores preparados para futuras versiones

        this.nivel = datos.nivel ?? null;

        this.caudal = datos.caudal ?? null;

        this.conductividad = datos.ce ?? null;

        this.oxigenoDisuelto = datos.od ?? null;

        this.fecha = new Date();

    }

}

module.exports = LecturaSensor;