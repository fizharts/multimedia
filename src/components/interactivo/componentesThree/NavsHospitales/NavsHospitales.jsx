import { useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { NavLink } from './../NavLink/NavLink';
import React, { Fragment } from 'react'

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
            <Nav defaultActiveKey="/home" className="flex-column">

                <NavLink
                    id={1}
                    name={markers[1].name}
                    onNavLinkClicked={onNavigationItemClicked}>
                </NavLink>
                <NavLink
                    id={2}
                    name={markers[2].name}
                    onNavLinkClicked={onNavigationItemClicked}>
                </NavLink>
                <NavLink
                    id={3}
                    name={markers[3].name}
                    onNavLinkClicked={onNavigationItemClicked}>
                </NavLink>
            </Nav>

        </Fragment>
    )
}
