console.log("APIService cargado");

export async function obtenerSensores() {

    try {

        const respuesta = await fetch("http://localhost:3001/api/sensores");

        if (!respuesta.ok) {
            throw new Error("Error al obtener sensores");
        }

        return await respuesta.json();

    } catch (error) {

        console.error(error);

        return null;

    }

}