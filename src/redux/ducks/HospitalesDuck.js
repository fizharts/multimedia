import { datosFijos } from './../../helpers/datosFijos';
import { formatearFechas, convertirFecha } from './../../helpers/fun';
import { parametrosHospitales } from '../../helpers/parametrosHopitales';
import { types } from './../types/types';

const initialState = {
    datosH : []  ,
    parametrosH : [] ,
    fechaH : {} ,
    fechaHInput: {},
    numeroRegistrosH : 50,
    nombresHospitales : []
}

export const hospitalesReducer = ( state = initialState , action ) => {
    switch ( action.type ){
        case types.datosGeneralesHospitales:
            return {
                ...state , 
                datosH : action.payload
            }

        case types.fechaDHoyHospitales : 
            return {
                ...state ,
                fechaH : action.payload
            }

        case types.parametrosHospitales : 
            return {
                ...state ,
                parametrosH : action.payload
            }
        case types.numeroRegistrosHospitales :
            return {
                ...state ,
                numeroRegistrosH : action.payload
            }
        case types.nombreHospitales :
            return {
                ...state ,
                nombresHospitales : action.payload.nombres

            }
        case types.fechaInput :
            return {
                ...state ,
                fechaHInput : action.payload
            }
    
        
    
        default:
            return state;
    }
}



export const getDatosH = ( datosCompletos )=> {

    const { records } = datosFijos
    console.log(records)
    return async( dispatch , getState  )=> {

        
            dispatch( putDatos( records ) ) 

            dispatch( setParametros(parametrosHospitales) )

    

    
    
    }
}

export const setInputFechaDuck = ( fechaI ) => {
    

    const [ fechaFormateada ] = convertirFecha(fechaI)

    return async ( dispatch ) => {
        dispatch( 
            setFechaInput( {
                fechaI,
                fechaFormateada
            } )
        )
    }
}

export const setNombreHospitales = ( nombres ) => (
    {
        type: types.nombreHospitales ,
        payload: {
            nombres
        }
    }
)

export const fechaStageH = ( ) => {
    let fecha = new Date() 
    let [hoy] = formatearFechas( fecha )
    let [hoyF] = convertirFecha(hoy)

    return async( dispatch , getState  )=> {
        dispatch(
            diaHoy({
                hoy,
                hoyF
            })
        )
    }
    
}




const setParametros = ( facet ) => ({
    type : types.parametrosHospitales ,
    payload :facet
})

export const diaHoy = ( hoy , hoyF )=> ({
    type : types.fechaDHoyHospitales ,
    payload: {hoy , hoyF} 
})



export const putDatos = ( dGenerales )=> ({
    type : types.datosGeneralesHospitales,
    payload: dGenerales
})

export const setNumeroRegistros = ( numero ) => ({
    type : types.numeroRegistrosHospitales,
    payload : numero
})

export const setFechaInput = ( fecha ) => ({
    type: types.fechaInput ,
    payload: {fecha}
})

