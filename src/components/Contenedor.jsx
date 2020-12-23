import { losDatos } from './../helpers/fun';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react'
import { EstadosComponent } from './EstadosComponent';
import { getDatos } from '../redux/ducks/EstadosDuck';
import { urlGeneral } from '../helpers/urls';

export const Contenedor = () => {
    const dispatch = useDispatch()
    const { numeroRegistros } = useSelector(state => state.datos)
    

    useEffect(() => {
        try {
            console.log(numeroRegistros)
            const url = urlGeneral( numeroRegistros )
            console.log( url )
            losDatos( url ).then( res => {
                dispatch(
                    getDatos( res )
                )
        
            })
            
        } catch (e) {
            
        } 


    }, [dispatch, numeroRegistros])


    return (
        <div>
            <EstadosComponent />
            
        </div>
    )
}
