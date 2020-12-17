import Axios from "axios";
import { urlGeneral } from "../../helpers/urls";
import { types } from "../types/types";

const initialState = {
    datos : {}
}

export const estadoReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case types.datosGenerales:
            return {
                ...state , 
                datos : action.payload
            }
        
    
        default:
            return state;
    }
}

export const getDatos = ()=> {
    return async( dispatch )=> {
        const {data} = await Axios.get(urlGeneral)
        console.log(data)
        dispatch(
            putDatos( data )
        )
    }
}

const putDatos = ( dGenerales )=> ({
    type : types.datosGenerales,
    payload: dGenerales
})

