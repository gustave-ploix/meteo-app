import React, { useState } from 'react';

import './zipForm.scss'

export default function ZipForm ({ zip, setZip }){

    const zipRegex = new RegExp(/[0-9]{5}/g)

    const [valid, setValid] = useState(true)

    const handleChange = (e) => {
        setZip(e.target.value);
    }
    
    const handleSubmit = (e) => {
        
        if(zipRegex.test(zip)){
            console.log("ok");
            setValid(true)
        } else {
            e.preventDefault()
            console.log("nope");
            setValid(false)
        }
    }

    return(

        <form action={`/dashboard/` + zip}
         onSubmit={handleSubmit}>

            <input
            className={valid ? "input" : "input error"}
            placeholder="entrez votre code postal"
            onChange={handleChange}
            type="text" />

            <input className="submit"
            type="submit" value="=>" />
            <p className={valid ? "invisible" : "visible"}>Veuillez entrer un code postal valide</p>
        
        </form>

    )

}