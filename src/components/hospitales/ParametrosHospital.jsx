import React, { Fragment } from 'react'

export const ParametrosHospital = ({parametrosH}) => {

    const { estatus_capacidad_hospitalaria , fecha , coordenadas , institucion , nombre_hospital , estatus_capacidad_uci  } = parametrosH

    return (
        <Fragment>
                <td>{estatus_capacidad_hospitalaria}</td>
                <td>{fecha}</td>
                <td>{coordenadas}</td>
                <td>{institucion}</td>
                <td>{nombre_hospital}</td>
                <td>{estatus_capacidad_uci}</td>
        </Fragment>
    )
}
