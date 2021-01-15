import React, { useEffect, useState } from 'react'
import { Marker } from './Marker'

export const CMarker = ({ markers, selectedItemIndex, onNavigationItemClicked, markers2 }) => {

    const [markerNow, setmarkerNow] = useState([])

    useEffect(() => {
        if (markers2.length > 1) {
            setmarkerNow(
                markers2
            )

        }

    }, [markers2])

    return (
        <group>
            {
                markerNow.length > 1 ? (
                    markerNow.map(maker => (
                        <Marker
                            key={maker.id + 1}
                            position={maker.position}
                            name={maker.name}
                            cameraPos={maker.cameraPos}
                            id={maker.id}
                            loc={maker.loc}
                            selected={selectedItemIndex}
                            onMarkerClicked={onNavigationItemClicked}
                        />

                    )
                    )
                ) : null
            }
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
