import { setFechaInput } from './../../redux/ducks/HospitalesDuck';
/* eslint-disable no-unused-vars */
import { fechaStageH } from './../../redux/ducks/HospitalesDuck';
import { useSelector, useDispatch } from 'react-redux';
import React, { Fragment } from 'react'
import { Hospital } from './Hospital';
import { ParametrosHospital } from './ParametrosHospital';
import { convertirFecha } from '../../helpers/fun';


export const HospitalesComponent = () => {

    
    const {datosH , parametrosH} = useSelector(state => state.hospitales)
    const dispatch = useDispatch()
    const handleChange = ( e ) => {
        // (e.target.value)
    
        try {
            dispatch(
                setFechaInput(
                    e.target.value
                )
            )
        } catch (error) {
            
        }

    }

    console.log( parametrosH )
    return (
        <div className="m-5">
    
            <h1>Hospitales</h1>
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
                    // onChange={ (e)=> handleChange(e) }

                    />

                    <input className="form-control" onChange={(e)=> handleChange(e) }  type="date" />

                </div>
            <div className="table-responsive" style={ {
                height: '80vh'
            } }>
            <table className="table table-hover   table-dark ">
            <thead style={{
            
                backgroundColor:'#292b2c'
            }}>
                <tr>
                    { 
                        <Fragment>
                            <ParametrosHospital  parametrosH={ parametrosH }  />
                        </Fragment>
                    
                    }
                </tr>
            
            </thead>
            <tbody>

            {
                datosH.map(({ recordid  , fields }) => {

                    return (
                        <Fragment key={ recordid }>
                            <Hospital fields={ fields } />
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
