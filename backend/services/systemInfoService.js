const capacidades = require("../config/capacidadesSistema");
const proyecto = require("../config/proyecto");
function mostrarInformacionSistema() {

    console.log("");
    console.log("===================================================");
    console.log(`🌱 ${proyecto.nombre}`);
    console.log("===================================================");
    console.log("");
    console.log(proyecto.descripcion);
    
    console.log("Inicializando módulos...\n");

    console.log("✓ Base de Datos");
    console.log("✓ MQTT");
    console.log("✓ API REST");
    console.log("✓ MIAA");

    console.log("");
    console.log("---------------------------------------------------");
    console.log("Sensores Activos");
    console.log("---------------------------------------------------");

    Object.values(capacidades).forEach(sensor => {

        if(sensor.activo){

            console.log(`🟢 ${sensor.nombre}`);

        }

    });

    console.log("");
    console.log("---------------------------------------------------");
    console.log("Sensores Preparados");
    console.log("---------------------------------------------------");

    Object.values(capacidades).forEach(sensor => {

        if(!sensor.activo){

            console.log(`🟡 ${sensor.nombre}`);

        }

    });

    console.log("");
    console.log("===================================================");
    console.log("Sistema listo.");
    console.log("===================================================");
    console.log("");

}

module.exports = {

    mostrarInformacionSistema

};