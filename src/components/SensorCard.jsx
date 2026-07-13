function SensorCard({ icono, titulo, valor, unidad }) {
    return (
        <div className="sensor-card">

            <div className="sensor-title">
                {titulo}
            </div>

            <div className="sensor-info">

                <div className="sensor-icon">
                    {icono}
                </div>

                <div className="sensor-value">

                    {valor}

                    <span className="sensor-unit">
                        {unidad}
                    </span>

                </div>

            </div>

        </div>
    );
}

export default SensorCard;