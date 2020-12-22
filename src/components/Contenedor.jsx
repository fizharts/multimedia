import { losDatos } from './../helpers/fun';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { EstadosComponent } from './EstadosComponent';
import { urlGeneral } from '../helpers/urls';
import { getDatos } from '../redux/ducks/EstadosDuck';

export const Contenedor = () => {
    const dispatch = useDispatch()
    const {datos , fecha:{ayer} } = useSelector( state => state.datos)

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
