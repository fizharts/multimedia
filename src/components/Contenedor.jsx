import { losDatos } from './../helpers/fun';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react'
import { EstadosComponent } from './EstadosComponent';
import { urlGeneral } from '../helpers/urls';
import { getDatos } from '../redux/ducks/EstadosDuck';

export const Contenedor = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        try {
            losDatos( urlGeneral ).then( res => {
                dispatch(
                    getDatos( res )
                )
        
            })
            
        } catch (e) {
            
        } 


    }, [ dispatch ])


    return (
        <div>
            <EstadosComponent />
        </div>
    )
}
