import { types } from "../types/types";

const initialState = {
    "titulo" : '' ,
    "datos" : [],
    "nombreHospitales" : [] ,
    "parametros" : []
}

export const PlanetasDuck = ( state = initialState , action) => {
    switch ( action.type ) {
        case  types.datosPlanetas :
            return {
                ...state ,
                datos : action.payload 
            }
        case types.tituloPlanetas :
            return {
                ...state ,
                titulo : action.payload
                
            }
        case types.nombreHospitalesPlanetas :
            return {
                ...state ,
                nombreHospitales : action.payload
                
            }
        case types.parametrosPlanetas :
            return {
                ...state ,
                parametros : action.payload
            }
        

        default: 
        return state
    }
}

export const getHospitalesP = ( datos )=> {
    
    const { records , parameters:{facet} } = datos
        const nombresH = records.map(record=> {
            return record.fields.nombre_hospital
        })
        
        let titulo = (records[0].datasetid).replace(/-/g , ' ')
        console.log( titulo )
    
    return async( dispatch )=> {
        
        
        dispatch(
            setHospitalesp( records )
        )

        dispatch(
            setTitulo(titulo)
        )

        dispatch(
            setNombresH( nombresH )
        )
        dispatch(
            setParametrosH( facet )
        )
    }
}

const setHospitalesp = ( hospitales ) =>({
    type: types.datosPlanetas ,
    payload : hospitales
})

const setTitulo = ( titulo ) => (
    {
        type : types.tituloPlanetas,
        payload : titulo
    }
)

const setNombresH = ( nombres ) => (
    {
        type: types.nombreHospitalesPlanetas ,
        payload : nombres
    }
)

const setParametrosH = ( parametros ) => (
    {
        type : types.parametrosPlanetas ,
        payload : parametros
    }
)


