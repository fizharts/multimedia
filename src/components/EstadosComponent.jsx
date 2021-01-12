
import React, { Fragment, useEffect } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import { useDispatch, useSelector } from 'react-redux'
import { yaEstaEnBase } from '../helpers/fun'
import { setNumeroRegistros } from '../redux/ducks/EstadosDuck'
import { Estado } from './Estado'
import Parametros from './Parametros'




export const EstadosComponent = () => {

    const db = useIndexedDB('covFechas')
    const dispatch = useDispatch()
    const { datos , fecha:{ fechaServidor } , parametros , numeroRegistros  } = useSelector(state => state.datos)

    
    
    if (datos.length === 0) {
        console.log( 'no llegaron' );
    }

    const handleChange = ( e )=> {
        console.log(e.target.value)
        dispatch(
            setNumeroRegistros( e.target.value )
        )
        
    }


    useEffect(() => {
        if ( fechaServidor !== '' ||  datos.length > 0) {
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

        console.log(numeroRegistros)



    }, [datos, db, fechaServidor, numeroRegistros])




    return (
        <div className="m-5">
    
            <h1>Estados</h1>
                <div className="row">
                <input 
                    type="number" 
                    name="Numberr" 
                    id="inputNumberr" 
                    className="form-control" 
                    defaultValue 
                    min={ 100 } 
                    max={ 1000 } 
                    step={ 100 } 
                    required="required"
                    onChange={ (e)=> handleChange(e) }

                    />

                </div>
            <div className="table-responsive" style={ {
                height: '80vh'
            } }>
            <table className="table table-hover  table-dark ">
            <thead style={{
            
                backgroundColor:'#01599d'
            }}>
                <tr>
                    { 
                        <Fragment>
                            <Parametros  parametros={ parametros }  />
                        </Fragment>
                    
                    }
                </tr>
            
            </thead>
            <tbody>

            {
                datos.map(({ recordid  , fields }) => {

                    return (
                        <Fragment key={ recordid }>
                            <Estado fields={ fields } />
                        </Fragment>
                    )
                })
            }
                
                
            </tbody>
        </table>
            </div>
            
        

        </div>
    )
}
