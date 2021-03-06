
export const urlGeneral = ( cantidad = 100 ) => {
    return  `https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=casos-asociados-a-covid-19&q=&rows=${cantidad}&facet=fecha_actualizacion&facet=id_registro&facet=sector&facet=entidad_um&facet=sexo&facet=entidad_nac&facet=entidad_res&facet=municipio_res&facet=tipo_paciente&facet=fecha_ingreso&facet=fecha_def&facet=edad&facet=nacionalidad&facet=rango_edad&facet=resultado_lab&facet=clasificacion_final&facet=clas_final_escrita&facet=confirmados&facet=sospechosos&facet=negativos&refine.entidad_res=CIUDAD+DE+M%C3%89XICO`;
}
export const urlHospitales = ( cantidad = 100 , fecha = '2020%2F12%2F20') => {
    return  `https://datos.cdmx.gob.mx/api/records/1.0/search/?dataset=capacidad-hospitalaria&q=&rows=${cantidad}&facet=fecha&facet=nombre_hospital&facet=institucion&facet=estatus_capacidad_hospitalaria&facet=estatus_capacidad_uci&refine.fecha=${fecha}`;
}

