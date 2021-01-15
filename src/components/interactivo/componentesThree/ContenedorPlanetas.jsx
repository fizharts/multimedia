import { useEffect } from 'react';
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { losDatos } from '../../../helpers/fun'
import { urlHospitales } from '../../../helpers/urls'
import { getHospitalesP, setFechaPlanetas } from '../../../redux/ducks/PlanetasDuck'
import { CPlanetas } from '../CPlanetas'
import '../../../planetaStyle.css'
import { useDate } from '../../../helpers/hooks/useDate'

export const ContenedorPlanetas = () => {

    const hoy = new Date()
    // console.log(hoy)
    const dispatch = useDispatch()
    // const [ fechaHoy ] = formatearFechas( new Date() )
    // const [fechaHoyF] = convertirFecha( fechaHoy )
    // console.log( fechaHoy )
    const [ fecha , handleChangeDate ] = useDate()
    console.log(fecha)
    const url = urlHospitales( 50 , fecha)
    useEffect(() => {
        dispatch(
            setFechaPlanetas(fecha)
        )
        losDatos( url ).then(res => {
            console.log(res)
            dispatch(
                getHospitalesP( res )
            )
        })
    }, [fecha , url])

    return (
        <div>
            <CPlanetas
                handleChangeDate={handleChangeDate}
            />
        </div>
    )
}
