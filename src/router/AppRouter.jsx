import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import { EstadosComponent } from '../components/EstadosComponent'

export const AppRouter = () => {
    return (
        <Router>
        <div>
        <Switch>

            <Route 
                exact 
                path="/estados" 
                component={ EstadosComponent }
            />

            <Redirect to="/" />   
        </Switch>
        </div>

        
        </Router>
    )
}
