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


