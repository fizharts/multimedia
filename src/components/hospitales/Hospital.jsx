import React, { Fragment } from 'react'
import { alertas } from '../../helpers/fun'

export const Hospital = ( {fields} ) => {
    const { estatus_capacidad_hospitalaria , fecha , coordenadas , institucion , nombre_hospital , estatus_capacidad_uci  } = fields

    return (
        <Fragment>
        <tr >
                <td style={ 
            alertas( estatus_capacidad_hospitalaria )
        }>{estatus_capacidad_hospitalaria}</td>
                <td>{fecha}</td>
                <td>{coordenadas}</td>
                <td>{institucion}</td>
                <td>{nombre_hospital}</td>
                <td>{estatus_capacidad_uci}</td>
        </tr>
        </Fragment>
    )
}
