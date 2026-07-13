import SensorCard from "./SensorCard";
import { FaTemperatureLow } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";

function SensorGrid({ datos }) {

    return (

        <div className="sensor-grid">

            <SensorCard
                icono={<FaTemperatureLow />}
                titulo="Temperatura "
                valor={datos.temp_air.toFixed(1)}
                unidad="°C"
            />
            <SensorCard
                icono={<WiHumidity />}
                titulo="Humedad"
                valor={datos.hum.toFixed(1)}
                unidad="%"
            />
            <SensorCard
                icono="☀"
                titulo="Luz"
                valor={datos.lux.toFixed(1)}
                unidad="lux"
            />
            <SensorCard
                icono={<FaTemperatureLow />}
                titulo="Temperatura Agua"
                valor={datos.temp_water.toFixed(1)}
                unidad="°C"
            />
            <SensorCard
                icono="🧪"
                titulo="pH"
                valor={datos.ph.toFixed(2)}
                unidad=""
            />

            {/* <SensorCard
                icono="📶"
                titulo="WiFi"
                valor={datos.wifi}
                unidad="dBm"
            /> */}
        </div>
    );
}

export default SensorGrid;