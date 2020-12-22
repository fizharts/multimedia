
import React, { Fragment, useEffect , useState } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import { useSelector } from 'react-redux'
import { yaEstaEnBase } from '../helpers/fun'




export const EstadosComponent = () => {

    const db = useIndexedDB('covFechas')
    const [datosBase, setDatosBase] = useState([])


    const { datos , fecha:{ hoy , ayer , fechaServidor } } = useSelector(state => state.datos)
    let losdatos = []
    let fechServ = ''
    console.log( hoy , ayer , fechaServidor )

    
    
    if (datos.length === 0) {
        console.log( 'no llegaron' );
    }else{
        losdatos = datos
        fechServ = fechaServidor

    }


    useEffect(() => {
        if ( fechaServidor != '' ||  datos.length > 0) {
            db.add({
                'fecha' : fechaServidor,
                'datos' : datos
            }).then(e => {
                console.log(e)
            })
        }

        db.getAll().then(res => {
            
        const { arrSinDuplicaciones } =  yaEstaEnBase( res )
            console.log( arrSinDuplicaciones );
        })

    }, [fechaServidor])




    return (
        <div>
    
            <h1>Estados</h1>
            {
                datos.map(({ recordid }) => {
                    return (
                        <Fragment key={ recordid }>
                        <small >Prueba</small><br/>
                        </Fragment>
                    )
                })
            }

        </div>
    )
}
