import React, { Fragment } from 'react'
import { NavLink } from '../NavLink/NavLink';

export const NavH = ( { markers , onNavigationItemClicked} ) => {
    const onMouseLeaveS=() =>{
        console.log("Event:MouseLeave");
    }
    
    return (
    <Fragment>
        {
            markers ? (
                markers.map(marker =>(
                <NavLink
                key = { marker.id } 
                        id = { marker.id }
                        name = { `${ marker.id }- ${ marker.name }` }
                        cameraPos={marker.cameraPos}
                        position={ marker.position }
                        onNavLinkClicked= { onNavigationItemClicked}
                        onMouseEnter={onMouseLeaveS}
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
