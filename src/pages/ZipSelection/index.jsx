import React from 'react';

import './zipSelection.scss'

import ZipForm from '../../components/ZipForm';


export default function ZipSelection ({ zip, setZip }){

    return(

        <div className="inputPage">
            <ZipForm zip={zip} setZip={setZip}/>
        </div>

    )

}