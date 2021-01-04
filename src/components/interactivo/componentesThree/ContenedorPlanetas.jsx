import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatearFechas, losDatos , convertirFecha } from '../../../helpers/fun'
import { urlHospitales } from '../../../helpers/urls'
import { getHospitalesP, setFechaPlanetas } from '../../../redux/ducks/PlanetasDuck'
import { CPlanetas } from '../CPlanetas'
import '../../../planetaStyle.css'

export const ContenedorPlanetas = () => {

    const hoy = new Date()
    console.log(hoy)
    
    const dispatch = useDispatch()
    // const [ fechaHoy ] = formatearFechas( new Date() )
    // const [fechaHoyF] = convertirFecha( fechaHoy )
    // console.log( fechaHoy )
    const fechaHoy = '2020%2F12%2F30'
    dispatch(
        setFechaPlanetas(fechaHoy)
    )

    const url = urlHospitales( 50 , fechaHoy)
    losDatos( url ).then(res => {
        console.log(res)
        dispatch(
            getHospitalesP( res )
        )
    })
    



    return (
        <div>
            <CPlanetas/>
        </div>
    )
}
