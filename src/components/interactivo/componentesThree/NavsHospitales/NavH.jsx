import { useSelector } from 'react-redux';
import React, { Fragment } from 'react'
import { NavLink } from '../NavLink/NavLink';

export const NavH = ( { markers , onNavigationItemClicked} ) => {

    const { markersRedux } = useSelector(state => state.planetas)
    return (
    <Fragment>
        {
            markers ? (
                markers.map(marker =>(
                <NavLink 
                key = { marker.id } 
                        id = { marker.id }
                        name = { marker.name }
                        cameraPos={marker.cameraPos}
                        position={ marker.position }
                        onNavLinkClicked= { onNavigationItemClicked}
                />
            ))
        ) : null
    }
    </Fragment>

    //     <Fragment>
    //         <NavLink
    //     id={1}
    //     name={markers[1].name}
    //     onNavLinkClicked={onNavigationItemClicked}>
    // </NavLink>
    // <NavLink
    //     id={2}
    //     name={markers[2].name}
    //     onNavLinkClicked={onNavigationItemClicked}>
    // </NavLink>
    // <NavLink
    //     id={3}
    //     name={markers[3].name}
    //     onNavLinkClicked={onNavigationItemClicked}>
    // </NavLink>
    //     </Fragment>
    
    )
}
