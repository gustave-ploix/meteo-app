import React, { useRef, useState } from 'react';
import './title.scss'

export default function Title (){


    const [load, setLoad] = useState(false);

    
    window.addEventListener('load', () => {
        
        setLoad(true);

    })

    return(

        <h1 className={load ? "title" : "title underlined"}>
            <span className="nubi">NUBI</span><span className="bus">BUS</span>&co
        </h1>

    )

}