import SensorCard from "./SensorCard";
import { FaTemperatureLow } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";

function SensorGrid({ datos }) {

    return (

        <div className="sensor-grid">

            <SensorCard
                icono={<FaTemperatureLow />}
                titulo="Temperatura Aire"
                valor={Number(datos.temperaturaAire ?? 0).toFixed(1)}
                unidad="°C"
            />

            <SensorCard
                icono={<WiHumidity />}
                titulo="Humedad"
                valor={Number(datos.humedad ?? 0).toFixed(1)}
                unidad="%"
            />

            <SensorCard
                icono={<IoSunnyOutline />}
                titulo="Luminosidad"
                valor={Number(datos.luminosidad ?? 0).toFixed(1)}
                unidad="lux"
            />

            <SensorCard
                icono={<MdOutlineWaterDrop />}
                titulo="Temperatura Agua"
                valor={Number(datos.temperaturaAgua ?? 0).toFixed(1)}
                unidad="°C"
            />

            <SensorCard
                icono="🧪"
                titulo="pH"
                valor={Number(datos.ph ?? 0).toFixed(2)}
                unidad=""
            />

            <SensorCard
                icono="📶"
                titulo="WiFi"
                valor={datos.wifi ?? 0}
                unidad="dBm"
            />

        </div>

    );

}

export default SensorGrid;