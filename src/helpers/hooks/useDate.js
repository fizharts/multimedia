import { useState } from 'react';
// import React from 'react'

let fecha = new Date()
let mes
if ((fecha.getMonth() + 1).length === 1) {
    mes = (`${fecha.getMonth() + 1}`).padStart(2, 0)
    console.log(mes)
} else {
    mes = (`${fecha.getMonth() + 1}`).padStart(2, 0)
    console.log(mes)
}

let nuevaFecha = `${fecha.getFullYear()}-${mes}-${(fecha.getDate()) - 1}`


export const useDate = (initialDate = nuevaFecha) => {

    let tipoFecha = initialDate.replace(/-/g, '%2F')
    const [fechaHoy, setfechaHoy] = useState(tipoFecha)

    const handleInputChange = ({ target }) => {

        setfechaHoy(target.value);

    }

    return [
        fechaHoy, handleInputChange
    ]
}


