import React, { useEffect } from 'react';
import { useParams } from 'react-router';

import { fetchAPI } from '../../services/fetchAPI'

export default function Dashboard (){

    const { zipSlug } = useParams()

    const fetch = async () => {
        try {
            const reponse = fetchAPI(`https://api.weatherbit.io/v2.0/current?key=${process.env.REACT_APP_API_KEY}&postal_code=${zipSlug}&country=FR`)
        } catch (error) {
            console.error(error)
        }
    }

    return(

        <div>
            Dashboard for {zipSlug}
            <button onClick={fetch}>bla</button>
        </div>

    )

}