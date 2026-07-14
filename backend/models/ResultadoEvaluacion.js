/**
 * ==========================================================
 * FDC124
 * Modelo ResultadoEvaluacion
 * ----------------------------------------------------------
 * Representa el resultado obtenido al evaluar una variable
 * del cultivo mediante el RuleEngine.
 * ==========================================================
 */

class ResultadoEvaluacion {

    constructor() {

        this.variable = "";

        this.valor = null;

        this.estado = "NORMAL";

        this.severidad = 0;

        this.criticidad = 0;

        this.participaISSA = false;

        this.rangoIdeal = {};

        this.rangoAceptable = {};

        this.rangoCritico = {};

        this.impacto = "";

        this.recomendacion = "";

    }

}

module.exports = ResultadoEvaluacion;