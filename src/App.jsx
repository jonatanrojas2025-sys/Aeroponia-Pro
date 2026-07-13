import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import client from "./mqtt/MQTTService";

function App() {

    const [datos, setDatos] = useState({

        temp_air:0,
        hum:0,
        press:0,
        alt:0,
        temp_water:0,
        ph:0,
        lux:0,
        pump:false,
        wifi:0

    });

    useEffect(()=>{

        client.on("message",(topic,message)=>{

            const json=JSON.parse(message.toString());

            setDatos(json);

        });

    },[]);

    return <Dashboard datos={datos}/>;

}

export default App;