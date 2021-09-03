import React, { useEffect, useState } from 'react';

import './horloge.scss'

export default function Horloge({ timeInformation }) {

    const [time, setTime] = useState();

    useEffect(() => {

        const interval = setInterval(() => {
            const date = new Date();
            let hour = date.getHours();
            hour = ("0" + hour).slice(-2);
            let minuts = date.getMinutes();
            minuts = ('0' + minuts).slice(-2);
            let seconds = date.getSeconds();
            seconds = ('0' + seconds).slice(-2)
            const timeConstruct = hour + ":" + minuts + ":" + seconds;
            setTime(timeConstruct);
        }, 1000)
        return () => clearInterval(interval);
    }, [])


    return (

        <h1 className={`${timeInformation}`}
            id="horloge">
            {time}
        </h1>

    )

}