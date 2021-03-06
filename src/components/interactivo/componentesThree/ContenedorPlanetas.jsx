import { useEffect } from 'react';
import React from 'react'
import { useDispatch } from 'react-redux'
import { getStorage, losDatos, setStorage } from '../../../helpers/fun'
import { urlHospitales } from '../../../helpers/urls'
import { getHospitalesP, setFechaPlanetas, defunciones } from '../../../redux/ducks/PlanetasDuck'
import { CPlanetas } from '../CPlanetas'
import '../../../planetaStyle.css'
import { useDate } from '../../../helpers/hooks/useDate'

export const ContenedorPlanetas = () => {

    const dispatch = useDispatch()
    
    const [fecha, handleChangeDate] = useDate()
    const url = urlHospitales(50, fecha)
    useEffect(() => {
        try {
            losDatos(url).then(res => {
                if (res) {
                    // alert()
                    dispatch(
                        getHospitalesP(res)
                    )
                    setStorage('datos', res)
                } else {
                    // alert()
                    const [datosS] = getStorage('datos')
                    console.log(datosS)
                    datosS &&
                    dispatch(
                        getHospitalesP(datosS)
                    )
                }

                losDatos('https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=actas-de-defuncion-en-el-registro-civil-de-la-ciudad-de-mexico&q=&rows=10&facet=sexo&facet=fec_defuncion&facet=estado&facet=causa&facet=alcaldia&facet=lugarmuerte')
                    .then(res => {
                        // console.log(res.nhits)
                        if( res ){
                            dispatch(
                                defunciones(
                                    res.nhits
                                ) 
                                )
                        }
                        
                    })

            })

            dispatch(
                setFechaPlanetas(fecha)
            )
        } catch (error) {
            console.log(error)
        }

    }, [fecha, url, dispatch])

    return (
        <div>
            <CPlanetas
                handleChangeDate={handleChangeDate}
            />
        </div>
    )
}
