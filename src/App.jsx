import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import { obtenerSensores } from "./mqtt/MQTTService";

function App() {

    const [datos, setDatos] = useState({

        temperaturaAire: 0,
        humedad: 0,
        presion: 0,
        altitud: 0,
        temperaturaAgua: 0,
        ph: 0,
        luminosidad: 0,
        bomba: false,
        wifi: 0

    });

    useEffect(() => {

        async function actualizar() {

            const nuevosDatos = await obtenerSensores();

            if (nuevosDatos) {

                setDatos(nuevosDatos);

            }

        }

        // Primera lectura
        actualizar();

        // Actualizar cada segundo
        const intervalo = setInterval(actualizar, 1000);

        return () => clearInterval(intervalo);

    }, []);

    return <Dashboard datos={datos} />;

}

export default App;