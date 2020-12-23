import React, { Fragment } from 'react'

export const Estado = (  {fields}  ) => {

    const estiloRojo = {
        backgroundColor : 'red',
        color: 'white'
    }
    const { sector , sospechosos , indigena , fecha_ingreso , fecha_def , inmusupr , id_registro , entidad_res , tipo_paciente , uci , cardiovascular , clasificacion_final , neumonia , hipertension , entidad_um , toma_muestra_antigeno , epoc , asma , origen , toma_muestra_lab , nacionalidad , pais_origen , rango_edad , embarazo , municipio_res , sexo , obesidad , habla_lengua_indi , intubado , fecha_actualizacion , fecha_sintomas , diabetes , edad , resultado_lab , clas_final_escrita , pais_nacionalidad , tabaquismo , otra_com , migrante , resultado_antigeno , entidad_nac , otro_caso , renal_cronica  } = fields
    return (
        <Fragment>
            <tr style={ fecha_def !== 'NA'?  estiloRojo : {}}>
                <td>{ sector }</td>
                <td>{ sospechosos }</td>
                <td>{ indigena }</td>
                <td>{ fecha_ingreso }</td>
                <td>{ fecha_def }</td>
                <td>{ inmusupr }</td>
                <td>{ id_registro }</td>
                <td>{ entidad_res }</td>
                <td>{ tipo_paciente }</td>
                <td>{ uci }</td>
                <td>{ cardiovascular }</td>
                <td>{ clasificacion_final }</td>
                <td>{ neumonia }</td>
                <td>{ hipertension }</td>
                <td>{ entidad_um }</td>
                <td>{ toma_muestra_antigeno }</td>
                <td>{ epoc }</td>
                <td>{ asma }</td>
                <td>{ origen }</td>
                <td>{ toma_muestra_lab }</td>
                <td>{ nacionalidad }</td>
                <td>{ pais_origen }</td>
                <td>{ rango_edad }</td>
                <td>{ embarazo }</td>
                <td>{ municipio_res }</td>
                <td>{ sexo }</td>
                <td>{ obesidad }</td>
                <td>{ habla_lengua_indi }</td>
                <td>{ intubado }</td>
                <td>{ fecha_actualizacion }</td>
                <td>{ fecha_sintomas }</td>
                <td>{ diabetes }</td>
                <td>{ edad }</td>
                <td>{ resultado_lab }</td>
                <td>{ clas_final_escrita }</td>
                <td>{ pais_nacionalidad }</td>
                <td>{ tabaquismo }</td>
                <td>{ otra_com }</td>
                <td>{ migrante }</td>
                <td>{ resultado_antigeno }</td>
                <td>{ entidad_nac }</td>
                <td>{ otro_caso }</td>
                <td>{ renal_cronica }</td>

            </tr>
        </Fragment>
    )
}
