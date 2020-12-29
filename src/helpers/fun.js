import { moment } from 'moment';
import Axios from "axios"



export const removeRepeats = ( dataArray ) => {
    let setHelper = new Set( dataArray )
    let arreglo = Array.from(setHelper)
    return [
        arreglo
    ]
}


export const obtenerItem = ( nombreItem ) => {
        let res = {}
        if ( localStorage.getItem(nombreItem)) {
            res = localStorage.getItem(nombreItem)
        }


        
    return  res 
}

export const setValorLocal = ( nombreITem , valorItem ) => {
    let valorsito = JSON.stringify(valorItem)
    console.log( valorItem )
    localStorage.setItem( nombreITem , valorsito  )
}


export const convertString = ( ...valores ) => {
    let nuevosValores = valores.map( valor => {
        return JSON.stringify(valor)
    })
    return [
        nuevosValores
    ]
}


export const losDatos = async ( urlGeneral ) => {
    const { data } = await Axios.get( urlGeneral )
    console.log(data)
    return data
}


export const yaEstaEnBase = (arrayBase) => {
    let baseLimpia = arrayBase.filter(base=> {
        return base.fecha !== undefined && base.datos.length !== 0
    } )

    let set = new Set( baseLimpia.map( JSON.stringify ) )
    let arrSinDuplicaciones = Array.from( set ).map( JSON.parse );


    return {
        arrSinDuplicaciones
    }
        
    
}


export const fechaHoy = ( ) => {
    let hoy = moment().format('DD-MM-YYYY')
    return {
        hoy
    }
}
export  const alertas = (estatus_capacidad_hospitalaria)=> {
    
    switch (estatus_capacidad_hospitalaria) {
        case 'Crítica':
            return {
                backgroundColor : 'red',
                color: 'white'
            }
    
        case 'Media' : 
            return {
            backgroundColor : '#f0ad4e',
                color: 'black' 
        }        
        case 'Buena' : 
            return {
            backgroundColor : '#5cb85c',
                color: 'white' 
            }   
            
        default :
            return {}


    }
}




    export const convertirFecha = ( fechaInicial ) => {
        // 2020%2F12%2F20
    let tipoFecha = fechaInicial.replace(/-/g , '%2F')


        return [
            tipoFecha
        ]
    }

export const formatearFechas = ( fecha ) => {
    let nuevaFecha =  `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()}`  
    return [
        nuevaFecha
    ]
}




