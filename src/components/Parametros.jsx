import React, { Fragment } from 'react'

const Parametros = ({ parametros }) => {


const { sector , sospechosos , indigena , fecha_ingreso , fecha_def , inmusupr , id_registro , entidad_res , tipo_paciente , uci , cardiovascular , clasificacion_final , neumonia , hipertension , entidad_um , toma_muestra_antigeno , epoc , asma , origen , toma_muestra_lab , nacionalidad , pais_origen , rango_edad , embarazo , municipio_res , sexo , obesidad , habla_lengua_indi , intubado , fecha_actualizacion , fecha_sintomas , diabetes , edad , resultado_lab , clas_final_escrita , pais_nacionalidad , tabaquismo , otra_com , migrante , resultado_antigeno , entidad_nac , otro_caso , renal_cronica  } = parametros

    return (
        <Fragment>
        
                <th>{ sector }</th>
                <th>{ sospechosos }</th>
                <th>{ indigena }</th>
                <th>{ fecha_ingreso }</th>
                <th>{ fecha_def }</th>
                <th>{ inmusupr }</th>
                <th>{ id_registro }</th>
                <th>{ entidad_res }</th>
                <th>{ tipo_paciente }</th>
                <th>{ uci }</th>
                <th>{ cardiovascular }</th>
                <th>{ clasificacion_final }</th>
                <th>{ neumonia }</th>
                <th>{ hipertension }</th>
                <th>{ entidad_um }</th>
                <th>{ toma_muestra_antigeno }</th>
                <th>{ epoc }</th>
                <th>{ asma }</th>
                <th>{ origen }</th>
                <th>{ toma_muestra_lab }</th>
                <th>{ nacionalidad }</th>
                <th>{ pais_origen }</th>
                <th>{ rango_edad }</th>
                <th>{ embarazo }</th>
                <th>{ municipio_res }</th>
                <th>{ sexo }</th>
                <th>{ obesidad }</th>
                <th>{ habla_lengua_indi }</th>
                <th>{ intubado }</th>
                <th>{ fecha_actualizacion }</th>
                <th>{ fecha_sintomas }</th>
                <th>{ diabetes }</th>
                <th>{ edad }</th>
                <th>{ resultado_lab }</th>
                <th>{ clas_final_escrita }</th>
                <th>{ pais_nacionalidad }</th>
                <th>{ tabaquismo }</th>
                <th>{ otra_com }</th>
                <th>{ migrante }</th>
                <th>{ resultado_antigeno }</th>
                <th>{ entidad_nac }</th>
                <th>{ otro_caso }</th>
                <th>{ renal_cronica }</th>
        
        </Fragment>
    )
}

export default Parametros
