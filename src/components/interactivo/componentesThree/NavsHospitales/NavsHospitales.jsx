import { useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { NavLink } from './../NavLink/NavLink';
import React, { Fragment } from 'react'
import { NavH } from './NavH';

export const NavsHospitales = ({ markers, onNavigationItemClicked }) => {
    const { titulo } = useSelector(state => state.planetas)

    return (
        <Fragment>
            <h2 className="title" 
                onClick={() => onNavigationItemClicked(0)}>
                {
                    titulo
                }
            </h2>
            <div className="form-group">
                <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
