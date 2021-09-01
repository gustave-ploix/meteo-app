import React, { useState } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import ZipSelection from './pages/ZipSelection';
import Dashboard from './pages/Dashboard'

import './app.scss'

export default function App (){

    const [zip, setZip] = useState()

    return(

        <Router>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <ZipSelection zip={zip} setZip={setZip}/>
                    </Route>
                    <Route path="/dashboard/:zipSlug">
                        <Dashboard />
                    </Route>
                </Switch>
            </main>
        </Router>

    )

}