import React, { Fragment } from 'react'

export const Hospital = ( {fields} ) => {
    const { estatus_capacidad_hospitalaria , fecha , coordenadas , institucion , nombre_hospital , estatus_capacidad_uci  } = fields
      const estiloRojo = {
        backgroundColor : 'red',
        color: 'white'
    }
      const estiloAmarillo = {
        backgroundColor : 'yellow',
        color: 'white'
    }

    const alertas = (estatus_capacidad_hospitalaria)=> {
    
        switch (estatus_capacidad_hospitalaria) {
            case 'Crítica':
                return {
                    backgroundColor : 'red',
                    color: 'white'
                }
                break;
           
            case 'Media' : 
                return {
                   backgroundColor : 'yellow',
                    color: 'black' 
                }        
            case 'Buena' : 
                return {
                   backgroundColor : 'green',
                    color: 'white' 
                }        

        }
    }


    return (
        <Fragment>
        <tr style={ 
            alertas( estatus_capacidad_hospitalaria )
        }>
                <td>{estatus_capacidad_hospitalaria}</td>
                <td>{fecha}</td>
                <td>{coordenadas}</td>
                <td>{institucion}</td>
                <td>{nombre_hospital}</td>
                <td>{estatus_capacidad_uci}</td>
        </tr>
        </Fragment>
    )
}
