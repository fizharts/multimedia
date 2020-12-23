
import React, { Fragment, useEffect } from 'react'
import { useIndexedDB } from 'react-indexed-db'
import { useSelector } from 'react-redux'
import { yaEstaEnBase } from '../helpers/fun'




export const EstadosComponent = () => {

    const db = useIndexedDB('covFechas')
  


    const { datos , fecha:{ hoy , ayer , fechaServidor } , parametros } = useSelector(state => state.datos)
 
    console.log( hoy , ayer , fechaServidor )

    const { asma , cardiovascular , clas_final_escrita , clasificacion_final , confirmados , diabetes , edad , embarazo , entidad_nac , entidad_res , entidad_um , epoc , fecha_actualizacion , fecha_def , fecha_ingreso , fecha_sintomas , habla_lengua_indi , hipertension , id_registro , indigena , inmusupr , intubado , migrante , municipio_res , nacionalidad , neumonia , obesidad , origen , otra_com , otro_caso , pais_nacionalidad , pais_origen , rango_edad , renal_cronica , resultado_antigeno , resultado_lab , sector , sexo , tabaquismo , tipo_paciente , toma_muestra_antigeno , toma_muestra_lab , uci } = parametros
    
    
    if (datos.length === 0) {
        console.log( 'no llegaron' );
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

   

    }, [datos, db, fechaServidor])




    return (
        <div>
    
            <h1>Estados</h1>
            
            <div>
            <table className="table table-hover">
            <thead>
                <tr>
                    { 
                        <Fragment>
                        <th> { asma } </th>
                        <th> { cardiovascular } </th>
                        <th> { clas_final_escrita } </th>
                        <th> { clasificacion_final } </th>
                        <th> { confirmados } </th>
                        <th> { diabetes } </th>
                        <th> { edad } </th>
                        <th> { embarazo } </th>
                        <th> { entidad_nac } </th>
                        <th> { entidad_res } </th>
                        <th> { entidad_um } </th>
                        <th> { epoc } </th>
                        <th> { fecha_actualizacion } </th>
                        <th> { fecha_def } </th>
                        <th> { fecha_ingreso } </th>
                        <th> { fecha_sintomas } </th>
                        <th> { habla_lengua_indi } </th>
                        <th> { hipertension } </th>
                        <th> { id_registro } </th>
                        <th> { indigena } </th>
                        <th> { inmusupr } </th>
                        <th> { intubado } </th>
                        <th> { migrante } </th>
                        <th> { municipio_res } </th>
                        <th> { nacionalidad } </th>
                        <th> { neumonia } </th>
                        <th> { obesidad } </th>
                        <th> { origen } </th>
                        <th> { otra_com } </th>
                        <th> { otro_caso } </th>
                        <th> { pais_nacionalidad } </th>
                        <th> { pais_origen } </th>
                        <th> { rango_edad } </th>
                        <th> { renal_cronica } </th>
                        <th> { resultado_antigeno } </th>
                        <th> { resultado_lab } </th>
                        <th> { sector } </th>
                        <th> { sexo } </th>
                        <th> { tabaquismo } </th>
                        <th> { tipo_paciente } </th>
                        <th> { toma_muestra_antigeno } </th>
                        <th> { toma_muestra_lab } </th>
                        <th> { uci } </th>
                        </Fragment>
                      
                     }
                </tr>
             
            </thead>
            <tbody>

            {
                datos.map(({ recordid }) => {
                    return (
                        <Fragment key={ recordid }>
                            <tr>
                            <td>{ asma }</td>
                            <td>{ cardiovascular }</td>
                            <td>{ clas_final_escrita }</td>
                            <td>{ clasificacion_final }</td>
                            <td>{ confirmados }</td>
                            <td>{ diabetes }</td>
                            <td>{ edad }</td>
                            <td>{ embarazo }</td>
                            <td>{ entidad_nac }</td>
                            <td>{ entidad_res }</td>
                            <td>{ entidad_um }</td>
                            <td>{ epoc }</td>
                            <td>{ fecha_actualizacion }</td>
                            <td>{ fecha_def }</td>
                            <td>{ fecha_ingreso }</td>
                            <td>{ fecha_sintomas }</td>
                            <td>{ habla_lengua_indi }</td>
                            <td>{ hipertension }</td>
                            <td>{ id_registro }</td>
                            <td>{ indigena }</td>
                            <td>{ inmusupr }</td>
                            <td>{ intubado }</td>
                            <td>{ migrante }</td>
                            <td>{ municipio_res }</td>
                            <td>{ nacionalidad }</td>
                            <td>{ neumonia }</td>
                            <td>{ obesidad }</td>
                            <td>{ origen }</td>
                            <td>{ otra_com }</td>
                            <td>{ otro_caso }</td>
                            <td>{ pais_nacionalidad }</td>
                            <td>{ pais_origen }</td>
                            <td>{ rango_edad }</td>
                            <td>{ renal_cronica }</td>
                            <td>{ resultado_antigeno }</td>
                            <td>{ resultado_lab }</td>
                            <td>{ sector }</td>
                            <td>{ sexo }</td>
                            <td>{ tabaquismo }</td>
                            <td>{ tipo_paciente }</td>
                            <td>{ toma_muestra_antigeno }</td>
                            <td>{ toma_muestra_lab }</td>
                            <td>{ uci }</td>
                            </tr>
                       
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
