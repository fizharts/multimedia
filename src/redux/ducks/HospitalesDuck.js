import { moment } from 'moment';
import { parametrosHospitales } from '../../helpers/parametrosHopitales';
import { types } from './../types/types';

const initialState = {
    datosH : []  ,
    parametrosH : [] ,
    fechaH : {} ,
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
        
    
        default:
            return state;
    }
}



export const getDatosH = ( datosCompletos )=> {

    const { records } = datosCompletos
    console.log(records)
    return async( dispatch , getState  )=> {

            
            // const ayer  = moment().subtract(1 , 'd').format('DD-MM-YYYY')
            // const [ fechaHoy ] = removeRepeats( (records.map( dato => dato.record_timestamp )) )
            // console.log( fechaHoy )
            // const fechaRest = moment(fechaHoy[0]).format('DD-MM-YYYY')
            dispatch( putDatos( records ) ) 
            // dispatch( diaHoy( hoy , ayer ,fechaRest ) )
            dispatch( setParametros(parametrosHospitales) )

    

    
    
    }
}


const setParametros = ( facet ) => ({
    type : types.parametrosHospitales ,
    payload :facet
})

export const diaHoy = ( hoy )=> ({
    type : types.fechaDHoyHospitales ,
    payload: { hoy }
})

const putDatos = ( dGenerales )=> ({
    type : types.datosGeneralesHospitales,
    payload: dGenerales
})

export const setNumeroRegistros = ( numero ) => ({
    type : types.numeroRegistrosHospitales,
    payload : numero
})

