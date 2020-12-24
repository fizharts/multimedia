import { fechaStage, fechaStageH } from './../../redux/ducks/HospitalesDuck';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { losDatos } from '../../helpers/fun'
import { urlHospitales } from '../../helpers/urls'
import { getDatosH } from '../../redux/ducks/HospitalesDuck'
import { HospitalesComponent } from './HospitalesComponent';

export const ContenedorHospitales = () => {


    const dispatch = useDispatch()
  

    const { numeroRegistrosHospitales } = useSelector(state => state.hospitales)
    
    useEffect(() => {
        
        const hoy = new Date()

        try {
            dispatch(
                fechaStageH()
            )
            const url = urlHospitales( numeroRegistrosHospitales , '2020%2F12%2F09')
            console.log(url )
            losDatos( url ).then(result => {
                    
                dispatch(
                    getDatosH( result )
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
