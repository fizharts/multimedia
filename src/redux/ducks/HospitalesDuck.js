import { formatearFechas, convertirFecha } from './../../helpers/fun';
import { parametrosHospitales } from '../../helpers/parametrosHopitales';
import { types } from './../types/types';

const initialState = {
    datosH : []  ,
    parametrosH : [] ,
    fechaH : {} ,
    fechaHInput: {},
    numeroRegistrosH : 50
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
        case types.fechaINput :
            return {
                ...state ,
                fechaHInput : action.payload
            }
        
    
        default:
            return state;
    }
}



export const getDatosH = ( datosCompletos )=> {

    const { records } = datosCompletos
    console.log(records)
    return async( dispatch , getState  )=> {

        
            dispatch( putDatos( records ) ) 

            dispatch( setParametros(parametrosHospitales) )

    

    
    
    }
}


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

export const setFechaInput =( vInput ) => {
    console.log(vInput)
    let [diaInput] = formatearFechas( vInput )
    let [diaInputF] = convertirFecha(diaInput)
    console.log(diaInput)
    console.log(diaInputF)

    return async( dispatch , getState ) => {
        dispatch(
            setDiaInput({
                diaInput,
                diaInputF
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

export const setDiaInput = ( fechaInput , fechaInputF ) => ({
    type : types.fechaINput ,
    payload: {
        fechaInput,
        fechaInputF
    }
})

const putDatos = ( dGenerales )=> ({
    type : types.datosGeneralesHospitales,
    payload: dGenerales
})

export const setNumeroRegistros = ( numero ) => ({
    type : types.numeroRegistrosHospitales,
    payload : numero
})

