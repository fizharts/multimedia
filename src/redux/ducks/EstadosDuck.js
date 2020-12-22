import { removeRepeats } from './../../helpers/fun';
import moment from "moment";
import { types } from "../types/types";

const initialState = {
    datos : []  ,
    parametros : [] ,
    fecha : {}
}

export const estadoReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case types.datosGenerales:
            return {
                ...state , 
                datos : action.payload
            }

        case types.fechaDHoy : 
            return {
                ...state ,
                fecha : action.payload
            }

        case types.parametros : 
            return {
                ...state ,
                parametros : action.payload
            }
        
    
        default:
            return state;
    }
}

export const getDatos = ( datosCompletos )=> {

    const { records , parameters:{ facet } } = datosCompletos
    return async( dispatch , getState  )=> {

            const hoy = moment().format('DD-MM-YYYY')
            const ayer  = moment().subtract(1 , 'd').format('DD-MM-YYYY')
            const [ fechaHoy ] = removeRepeats( (records.map( dato => dato.record_timestamp )) )
            console.log( fechaHoy )
            const fechaRest = moment(fechaHoy[0]).format('DD-MM-YYYY')
    
            dispatch( putDatos( records ) ) 
            dispatch( diaHoy( hoy , ayer ,fechaRest ) )
            dispatch( setParametros(facet) )

    

    
    
    }
}


const setParametros = ( facet ) => ({
    type : types.parametros ,
    payload :facet
})

const diaHoy = ( hoy , ayer , fechaServidor )=> ({
    type : types.fechaDHoy ,
    payload: { hoy , ayer , fechaServidor}
})

const putDatos = ( dGenerales )=> ({
    type : types.datosGenerales,
    payload: dGenerales
})

