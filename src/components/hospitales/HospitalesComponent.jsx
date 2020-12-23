import { useDispatch, useSelector } from 'react-redux';
import React, { Fragment } from 'react'
import { Hospital } from './Hospital';
import { ParametrosHospital } from './ParametrosHospital';

export const HospitalesComponent = () => {


    const {datosH , parametrosH} = useSelector(state => state.hospitales)

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
