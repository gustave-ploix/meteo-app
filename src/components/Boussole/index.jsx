import React from 'react';

import './boussole.scss'

export default function Boussole (props){

    const data = props.children

    const windSpeed = parseInt(data.wind_spd * 3.6)

    console.log(data);

    return(

        <>
        <div
        className="boussolePage">
            <div className="boussole"
             style={{transform: `rotate(${data.wind_dir - 45}deg)`}}></div>
        </div>

        <div className="informations">
            <h1>le vent souffle à : <br />{windSpeed}Km/h, vers :</h1>
            <h1>{data.wind_cdir_full}</h1>
            <h1></h1>
        </div>

        </>
    )

}