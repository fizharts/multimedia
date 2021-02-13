import { fechaStageH } from './../../redux/ducks/HospitalesDuck';
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { formatearFechas, losDatos } from '../../helpers/fun'
import { urlHospitales } from '../../helpers/urls'
import { getDatosH } from '../../redux/ducks/HospitalesDuck'
import { HospitalesComponent } from './HospitalesComponent';

export const ContenedorHospitales = () => {


    const dispatch = useDispatch()


    const { numeroRegistrosHospitales } = useSelector(state => state.hospitales)

    useEffect(() => {

        const hoy = new Date()
        const [hoyF] = formatearFechas(hoy)
        console.log(hoyF);
        try {
            dispatch(
                fechaStageH()
            )
            const url = urlHospitales(numeroRegistrosHospitales, '2020%2F1%2F1')
            console.log(url)
            losDatos(url).then(result => {

                dispatch(
                    getDatosH(result)
                )


            })
        } catch (e) {

        }
    }, [dispatch, numeroRegistrosHospitales])


    return (

        <div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <HospitalesComponent />

                </div>
                <div className="col-2"></div>


            </div>


        </div>
    )
}
