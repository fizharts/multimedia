import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Button, Nav } from 'react-bootstrap';
import React, { Fragment } from 'react'
import { NavH } from './NavH';
// import { Howl } from 'howler';
import { Play, useHowl } from 'rehowl'

import fondo from '../../../../sounds/fondo.mp3';


export const NavsHospitales = ({ markers, onNavigationItemClicked , handleChangeDate }) => {
    const { titulo } = useSelector(state => state.planetas)
    const [bton, setBton] = useState(true)
    
    
    // const fondoS = new Howl({
    //     src: fondo
    // })
    const { howl } = useHowl({ src: fondo })


    // bton? fondoS.play() : fondoS.stop()

    const handleClick = ( ) => {
        let b = !bton
        setBton(
            b
        )
    }

    useEffect(() => {
        
        return () => {
            let b = !bton
        setBton(
            b
        )
        }
    }, [bton])
    
    return (
        <Fragment>
            <h2 className="title animate__animated animate__bounce"
                onClick={() => onNavigationItemClicked(0 , [0,0,0],[400,400,400])}>
                {
                    titulo
                }
            </h2>   
            <div className="row">
                <div className="col-4 animate__animated animate__bounce">
                    
                        <Link to="/Info">
                        <button className="btn  btn-outline-info btn-block">
                            Info
                            </button>
                        </Link> 
                    
                </div>
                <div className="col-4">
                <Link to="/hospitales">
                    <button className="btn  btn-outline-warning btn-block">
                        Datos
                    </button>
                    </Link>
                </div>
                <div className="col-4">
                <Play howl={howl} pause={bton} />
                    <button className={
                        `btn  ${
                            bton? 'btn-outline-success' : 'btn-outline-danger'
                        } btn-block`
                    }
                            onClick={(e)=>handleClick(e)}>
                        Sonido
                    </button>
                </div>
            </div>

            <div className="form-group">
                <input
                    type="date"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={ (e)=> handleChangeDate(e) }/>
            </div>

            <div className="cH">
            
            <Nav defaultActiveKey="/home" className="flex-column">
                
                <NavH
                    markers={markers}
                    onNavigationItemClicked={onNavigationItemClicked}
                />
            </Nav>
            </div>

        </Fragment>
    )
}
