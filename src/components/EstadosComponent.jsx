import moment from 'moment';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crearDB, crearRegistro, removeRepeats, setValorLocal } from '../helpers/fun';
import { diaHoy, getDatos } from '../redux/ducks/EstadosDuck';

let DB
const createDB = ()=> {
    const crearDB = window.indexedDB.open('cov',1)
    crearDB.onerror = () => {
        console.log('hubo un error')
    }

    crearDB.onsuccess=()=> {
        console.log('base de datosCreada')
        DB = crearDB.result
        console.log(DB)
    }
}

export const EstadosComponent = () => {
    const { datos , fecha:{ayer} } = useSelector( state => state.datos )
    
    const dispatch = useDispatch();
    const now = moment()
    const yesterday = moment().subtract(1 , 'd')

    


    useEffect(() => {
        createDB()
        dispatch( getDatos() )
        dispatch( diaHoy( now , yesterday ) )
        const [  fechaHoy ] = removeRepeats( (datos.map( dato => dato.record_timestamp )) )
        const fechaRest = moment(fechaHoy[0]).format('DD-MM-YYYY')
        const dechaAyer = moment( ayer ).format('DD-MM-YYYY')

        setValorLocal( 'datos' ,  datos )

        if ( fechaRest === dechaAyer ) {
            console.log( dechaAyer )
            console.log( fechaRest )
        }
    


    }, [dispatch])

    



    
    // https://bluuweb.github.io/react-udemy/10-redux/
    return (
        <div>
            <h1>Estados</h1>
        </div>
    )
}
