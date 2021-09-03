import React from "react";

import "./boussole.scss";

export default function Boussole(props) {
    const data = props.children;

    const windSpeed = parseInt(data.wind_spd * 3.6);

    const direction = data.wind_dir - 45;

    const invertRotation = () => {
        if (direction > 0) {
            return -Math.abs(direction);
        } else if (direction < 0) {
            return Math.abs(direction);
        }
    };

    return (
        <>
            <div className="boussolePage">
                <div
                    className="boussole"
                    style={{ transform: `rotate(${direction}deg)` }}
                >
                    <div
                        className="informations"
                        style={{ transform: `rotate(${invertRotation()}deg)` }}
                    >
                        <h1>
                            le vent souffle à : <br />
                            {windSpeed}Km/h, vers :
                        </h1>
                        <h1>{data.wind_cdir_full}</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
