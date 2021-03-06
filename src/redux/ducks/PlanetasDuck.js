import { datosFijos } from './../../helpers/datosFijos';
import { types } from "../types/types";

const initialState = {
    "titulo": '',
    "datos": [],
    "nombreHospitales": [],
    "parametros": [],
    "fecha": {},
    "markersRedux": [],
    "defunciones": {},
    "sonido" : false
}

export const PlanetasDuck = (state = initialState, action) => {
    switch (action.type) {
        case types.datosPlanetas:
            return {
                ...state,
                datos: action.payload
            }
        case types.tituloPlanetas:
            return {
                ...state,
                titulo: action.payload

            }
        case types.nombreHospitalesPlanetas:
            return {
                ...state,
                nombreHospitales: action.payload

            }
        case types.parametrosPlanetas:
            return {
                ...state,
                parametros: action.payload
            }
        case types.fechaPlanetas:
            return {
                ...state,
                fecha: action.payload
            }
        case types.makers:
            return {
                ...state,
                markersRedux: action.payload
            }
        case types.defunciones:
            return {
                ...state,
                defunciones: action.payload
            }
        case types.sound :
            return {
                ...state ,
                sonido : action.payload
            }


        default:
            return state
    }
}

export const getHospitalesP = (datos) => {
    const { records, parameters: { facet } } = datosFijos

    const nombresH = records.map(record => {
        return record.fields.nombre_hospital
    })



    return async (dispatch) => {


        dispatch(
            setHospitalesp(records)
        )

        dispatch(
            setTitulo('Datos Hospitalarios')
        )

        dispatch(
            setNombresH(nombresH)
        )
        dispatch(
            setParametrosH(facet)
        )
    }
}

export const defunciones = (defunciones) => ({
    type: types.defunciones,
    payload: {
        defunciones
    }
})

export const setSound = (sound) => ({
    type : types.sonidos,
    payload:{
        sound
    }
})

export const setFechaPlanetas = (fecha) => ({
    type: types.fechaPlanetas,
    payload: fecha
})

export const setMakers = (makers) => ({
    type: types.makers,
    payload: makers
})

export const setHospitalesp = (hospitales) => ({
    type: types.datosPlanetas,
    payload: hospitales
})

export const setTitulo = (titulo) => (
    {
        type: types.tituloPlanetas,
        payload: titulo
    }
)

const setNombresH = (nombres) => (
    {
        type: types.nombreHospitalesPlanetas,
        payload: nombres
    }
)

const setParametrosH = (parametros) => (
    {
        type: types.parametrosPlanetas,
        payload: parametros
    }
)


