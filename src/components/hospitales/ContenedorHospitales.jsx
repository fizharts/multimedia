import { moment } from 'moment';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { losDatos } from '../../helpers/fun'
import { urlHospitales } from '../../helpers/urls'
import { diaHoy, getDatosH } from '../../redux/ducks/HospitalesDuck'
import { HospitalesComponent } from './HospitalesComponent';

export const ContenedorHospitales = () => {


    const dispatch = useDispatch()

    const { numeroRegistrosHospitales } = useSelector(state => state.hospitales)
    
    useEffect(() => {
        try {
            const url = urlHospitales( numeroRegistrosHospitales , '2020%2F12%2F09')
            console.log(url )
            losDatos( url ).then(result => {
                const hoy = new Date()
                
                dispatch(
                    getDatosH( result )
                )

                dispatch(
                    diaHoy(
                        hoy
                    )
                )
            })
        } catch (e) {
        
        }
    },[dispatch , numeroRegistrosHospitales])


    return (
        <Fragment>
            <HospitalesComponent/>
        </Fragment>
    )
}
