import Axios from "axios";
import { urlGeneral } from "../../helpers/urls";
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
        
    
        default:
            return state;
    }
}

export const getDatos = ()=> {
    return async( dispatch  )=> {
        const { data:{ records } } = await Axios.get(urlGeneral)
        
        console.log(records)
        dispatch(
            putDatos( records )
        )
    }
}

export const diaHoy = ( hoy , ayer )=> ({
    type : types.fechaDHoy ,
    payload: { hoy , ayer}
})

const putDatos = ( dGenerales )=> ({
    type : types.datosGenerales,
    payload: dGenerales
})

