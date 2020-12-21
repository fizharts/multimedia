import moment from 'moment';
import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crearDB, crearRegistro, removeRepeats, setValorLocal , convertString } from '../helpers/fun';
import { diaHoy, getDatos } from '../redux/ducks/EstadosDuck';
import { useIndexedDB } from 'react-indexed-db'



export const EstadosComponent = () => {

    const { datos , fecha:{ayer} } = useSelector( state => state.datos )

    
    const dispatch = useDispatch();
    const now = moment()
    const yesterday = moment().subtract(1 , 'd')
    const db = useIndexedDB('covFechas')
    
   

    useEffect(() => {
        
        console.log( db )
        dispatch( getDatos() )
        dispatch( diaHoy( now , yesterday ) )
        const [  fechaHoy ] = removeRepeats( (datos.map( dato => dato.record_timestamp )) )
        const fechaRest = moment(fechaHoy[0]).format('DD-MM-YYYY')
        const dechaAyer = moment( ayer ).format('DD-MM-YYYY')
        const [ convertido ] = convertString( datos )
            console.log( datos )
        db.add({
            'fecha' : '10-12-2020',
            'datos' : convertido
        }).then(e => {
            console.log(e)
        })
        

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
