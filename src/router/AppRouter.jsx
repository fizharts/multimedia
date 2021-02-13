import { Info } from './../components/info/Info';
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Contenedor } from '../components/Contenedor';
import { ContenedorHospitales } from '../components/hospitales/ContenedorHospitales';
import { ContenedorPlanetas } from '../components/interactivo/componentesThree/ContenedorPlanetas';


export const AppRouter = () => {
    return (
        <Router>
            <div >
                <Switch>

                    <Route
                        exact
                        path="/estados"
                        component={Contenedor}
                    />
                    <Route
                        exact
                        path="/hospitales"
                        component={ContenedorHospitales}
                    />

                    <Route
                        exact
                        path="/planetas"
                        component={ContenedorPlanetas}
                    />
                    <Route
                        exact
                        path="/"
                        component={ContenedorPlanetas}
                    />
                    <Route
                        exact
                        path="/Info"
                        component={Info} />

                    <Route path='/cdmxinfo' component={() => {
                        window.location.href = 'https://paginas.datos.cdmx.gob.mx/plan-accion#carta';
                        return null;
                    }} />
                    <Route path='/gitHub' component={() => {
                        window.location.href = 'https://github.com/fizharts/multimedia';
                        return null;
                    }} />
                    <Route path='/datos' component={() => {
                        window.location.href = 'https://datos.cdmx.gob.mx/dataset/?q=covid&groups=covid-19';
                        return null;
                    }} />

                    <Redirect to="/" />
                </Switch>
            </div>


        </Router>
    )
}
