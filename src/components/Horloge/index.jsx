import React, { useEffect, useState } from 'react';

export default function  (){

    const [time, setTime] = useState()
    
    useEffect(() => {
        
        const interval = setInterval(()=> {
            const date = new Date()
            const hour = date.getHours();
            const minuts = date.getMinutes();
            const seconds = date.getSeconds();
            const timeConstruct = hour + ":" + minuts + ":" + seconds
            setTime(timeConstruct)
        }, 1000)
        return () => clearInterval(interval)
    },[])


    return(

        <h1>
            {time}
        </h1>

    )

}