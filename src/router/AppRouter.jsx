import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Contenedor } from '../components/Contenedor';


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

            <Redirect to="/" />   
        </Switch>
        </div>

        
        </Router>
    )
}
