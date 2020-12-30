import React from 'react'
import { useDispatch } from 'react-redux'
import { losDatos } from '../../../helpers/fun'
import { urlHospitales } from '../../../helpers/urls'
import { getHospitalesP } from '../../../redux/ducks/PlanetasDuck'
import { CPlanetas } from '../CPlanetas'

export const ContenedorPlanetas = () => {


    const url = urlHospitales( 50 , '2020%2F12%2F09')
    const dispatch = useDispatch()
    
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
