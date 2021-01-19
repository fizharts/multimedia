import { colores } from './colores';
import { Random } from 'random-js';
import { moment } from 'moment';
import Axios from "axios"
import { datosFijos } from './datosFijos';

const random = new Random()

export const removeRepeats = (dataArray) => {
    let setHelper = new Set(dataArray)
    let arreglo = Array.from(setHelper)
    return [
        arreglo
    ]
}


export const obtenerItem = (nombreItem) => {
    let res = {}
    if (localStorage.getItem(nombreItem)) {
        res = localStorage.getItem(nombreItem)
    }



    return res
}

export const setValorLocal = (nombreITem, valorItem) => {
    let valorsito = JSON.stringify(valorItem)
    console.log(valorItem)
    localStorage.setItem(nombreITem, valorsito)
}


export const convertString = (...valores) => {
    let nuevosValores = valores.map(valor => {
        return JSON.stringify(valor)
    })
    return [
        nuevosValores
    ]
}


export const losDatos = async (urlGeneral) => {
    const { data } = await Axios.get(urlGeneral)
    console.log(data)
    let dataF
    if (data) {
        dataF = data
    }else{
        dataF = datosFijos
    }
    return dataF
}


export const yaEstaEnBase = (arrayBase) => {
    let baseLimpia = arrayBase.filter(base => {
        return base.fecha !== undefined && base.datos.length !== 0
    })

    let set = new Set(baseLimpia.map(JSON.stringify))
    let arrSinDuplicaciones = Array.from(set).map(JSON.parse);


    return {
        arrSinDuplicaciones
    }


}


export const fechaHoy = () => {
    let hoy = moment().format('DD-MM-YYYY')
    return {
        hoy
    }
}
export const alertas = (estatus_capacidad_hospitalaria) => {

    switch (estatus_capacidad_hospitalaria) {
        case 'Crítica':
            return {
                backgroundColor: 'red',
                color: 'white'
            }

        case 'Media':
            return {
                backgroundColor: '#f0ad4e',
                color: 'black'
            }
        case 'Buena':
            return {
                backgroundColor: '#5cb85c',
                color: 'white'
            }

        default:
            return {}


    }
}




export const convertirFecha = (fechaInicial) => {
    // 2020%2F12%2F20
    let tipoFecha = fechaInicial.replace(/-/g, '%2F')


    return [
        tipoFecha
    ]
}

export const formatearFechas = (fecha) => {
    let mes
    if ((fecha.getMonth() + 1).length === 1) {
        mes = `0${fecha.getMonth() + 1}`
    } else {
        mes = fecha.getMonth() + 1
    }

    let nuevaFecha = `${fecha.getFullYear()}-${mes}-${fecha.getDate()}`
    return [
        nuevaFecha
    ]
}




export const crearMaker = (datos) => {
    let markers2 = [{
        position: [0, 0, 0],
        cameraPos: [18, 18, 18],
        id: 0,
        name: "camaraCentral",
        loc: []
    }]
    let id = 1
    datos.forEach(dato => {
        let uno = random.integer(-100, 100)
        let dos = random.integer(-100, 100)
        let tres = random.integer(-100, 100)

        markers2 = [
            ...markers2,
            {
                position: [uno, dos, tres],
                cameraPos: [uno, dos, tres + 10],
                name: dato.fields.nombre_hospital,
                id: id,
                loc: dato.fields.coordenadas
            }
        ]
        id++
    })

    return [
        markers2
    ]
}


export const colorH = (col) => {
    let colorPlaneta
    switch (col) {
        case 'Crítica':
        colorPlaneta = colores.rojo
        break;
        case 'Media':
        colorPlaneta = colores.amarillo
        break;
        case 'Buena':
        colorPlaneta = colores.verde
        break;
        default:
        colorPlaneta = colores.verde
        break;
    }


    return colorPlaneta
}




