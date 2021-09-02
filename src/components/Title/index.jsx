import React, { useRef, useState } from 'react';
import './title.scss'

export default function Title (){


    const [load, setLoad] = useState(false)

    const title = useRef()

    
    window.addEventListener('load', () => {
        
        setLoad(true)

    })

    return(

        <h1 className={load ? "title" : "title underlined"}>
            NUBIBUS&co
        </h1>

    )

}