import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Contenedor } from '../components/Contenedor';
import { ContenedorHospitales } from '../components/hospitales/ContenedorHospitales';
import { CPlanetas } from '../components/interactivo/CPlanetas';


export const AppRouter = () => {
    return (
        <Router>
        <div>
        <Switch>

            <Route 
                exact 
                path="/estados" 
                component={ Contenedor }
            />
            <Route 
                exact
                path="/hospitales"
                component={ ContenedorHospitales }
            />

            <Route 
                exact
                path="/planetas"
                component={ CPlanetas }
            />

            <Redirect to="/" />   
        </Switch>
        </div>

        
        </Router>
    )
}
