import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDatos } from '../redux/ducks/EstadosDuck';

export const EstadosComponent = () => {
    const { datos } = useSelector( state => state.datos )
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDatos())
    }, [dispatch])
    // https://bluuweb.github.io/react-udemy/10-redux/
    return (
        <div>
            <h1>Estados</h1>
        </div>
    )
}
