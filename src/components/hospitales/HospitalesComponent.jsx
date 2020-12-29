/* eslint-disable no-unused-vars */
import { setInputFechaDuck, setNombreHospitales , putDatos} from './../../redux/ducks/HospitalesDuck';
import { useSelector, useDispatch } from 'react-redux';
import React, { Fragment, useEffect, useState } from 'react'
import { Hospital } from './Hospital';
import { ParametrosHospital } from './ParametrosHospital';
import { convertirFecha, losDatos } from '../../helpers/fun';
import { urlHospitales } from '../../helpers/urls';


export const HospitalesComponent = () => {

    // https://github.com/dieguezguille/ThreeAct-Test
    const {datosH , parametrosH , nombresHospitales , fechaHInput} = useSelector(state => state.hospitales)
    const dispatch = useDispatch()
    const [fechaInputS, setFechaIntputS] = useState('');

    const handleChange = ( e ) => {
        let fecha = e.target.value
        
        setFechaIntputS( fecha )

    }

    useEffect(()=> {
        
        let nombresDeLosHospitales = datosH.map((datoH) => {
                    return datoH.fields.nombre_hospital
                })

                
        dispatch(
            setNombreHospitales(
                nombresDeLosHospitales
            )
        )

        dispatch(
            setInputFechaDuck(fechaInputS)
        )

    },[fechaInputS , datosH , dispatch ])



    return (
        <div className="m-5">
    
            <h1>Hospitales</h1>
                                <div className="row">
                    <div className="form-group">
                        <label htmlFor="exampleSelect">Buscar por hospital</label>
                        <select className="custom-select" id="exampleSelect">
                            {
                                nombresHospitales.map(nombre=>{
                                    return(
                                        <Fragment key={nombre}>
                                            <option value={nombre}>{nombre}</option>
                                        </Fragment>
                                    )
                                })
                            }
                        </select>
                    </div>

    

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
