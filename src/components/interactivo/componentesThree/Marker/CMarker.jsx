import React from 'react'
import { Marker } from './Marker'

export const CMarker = ({markers, selectedItemIndex , onNavigationItemClicked}) => {
    console.log(
        markers
    )
    return (
        <group>
            {/* {
                markers.map((marker , i) => {
                    console.log(marker)
                    return(
                    <Marker
                    key={marker.id}
                    position={marker[i].position}
                    name={marker[i].name}
                    id={marker.id}
                    selected={selectedItemIndex}
                    onMarkerClicked={onNavigationItemClicked} />
                    )
                })
            } */}
                <Marker
                    position={markers[1].position}
                    name={markers[1].name}
                    id={1}
                    selected={selectedItemIndex}
                    onMarkerClicked={onNavigationItemClicked} />
                <Marker
                    position={markers[2].position}
                    name={markers[2].name}
                    id={2}
                    selected={selectedItemIndex}
                    onMarkerClicked={onNavigationItemClicked} />
                <Marker
                    position={markers[3].position}
                    name={markers[3].name}
                    id={3}
                    selected={selectedItemIndex}
                    onMarkerClicked={onNavigationItemClicked} />
                </group>

    )
}
