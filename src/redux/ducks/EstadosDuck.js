import { removeRepeats } from './../../helpers/fun';
import moment from "moment";
import { types } from "../types/types";
import { parametros } from '../../helpers/parametros';

const initialState = {
    datos : []  ,
    parametros : [] ,
    fecha : {} ,
    numeroRegistros : 50 
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
        case types.numeroRegistros :
            return {
                ...state ,
                numeroRegistros : action.payload
            }
        
    
        default:
            return state;
    }
}

export const getDatos = ( datosCompletos )=> {

    const { records } = datosCompletos
    return async( dispatch , getState  )=> {

            const hoy = moment().format('DD-MM-YYYY')
            const ayer  = moment().subtract(1 , 'd').format('DD-MM-YYYY')
            const [ fechaHoy ] = removeRepeats( (records.map( dato => dato.record_timestamp )) )
            console.log( fechaHoy )
            const fechaRest = moment(fechaHoy[0]).format('DD-MM-YYYY')
    
            dispatch( putDatos( records ) ) 
            dispatch( diaHoy( hoy , ayer ,fechaRest ) )
            dispatch( setParametros(parametros) )

    

    
    
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

export const setNumeroRegistros = ( numero ) => ({
    type : types.numeroRegistros,
    payload : numero
})

