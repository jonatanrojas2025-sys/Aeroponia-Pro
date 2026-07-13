const conocimiento = require("../baseConocimiento");

function obtenerVariable(nombre) {

    return conocimiento[nombre];

}

function obtenerTodas() {

    return conocimiento;

}

module.exports = {

    obtenerVariable,

    obtenerTodas

};