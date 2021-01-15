import { mapsApiKey } from './../../../helpers/mapsApiKey';

import {React ,useEffect , useState} from 'react'
import { useGoogleMaps } from "react-hook-google-maps";
export const Maps = ({loc}) => {
    const [value, setValue] = useState(0);
    console.log(loc)
    let lat , lng
    if (loc!== undefined) {
        lat = loc[0]
        lng = loc[1]
    }else {
        lat = 0
        lng = 0
    }
    
    const { ref , map , google } = useGoogleMaps(
        mapsApiKey.credentials,
        {
            center: {lat , lng},
            zoom : 10
        }
    )

   useEffect(() => {
    if (!map) {
      return;
    }
    setValue(map.getZoom());

    const listener = map.addListener("zoom_changed", () => {
      setValue(map.getZoom());
    });
    return () => google.maps.event.removeListener(listener);
  }, [map, google]);
  

  const handleZoomUpdate = (zoomChange = 1) => {
    const nextZoom = value + zoomChange;
    if (nextZoom < 0) {
      return;
    }
    map.setZoom(nextZoom);
  };
    // console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
    // console.log(google)
     return (
      <div>
      <span>External zoom controls example</span>
      <div ref={ref} style={{ width: 50, height: 25 }} />
      <button onClick={() => handleZoomUpdate(1)}>Zoom In</button>
      <button onClick={() => handleZoomUpdate(-1)} disabled={value < 1}>
        Zoom Out
      </button>
      <div>{value}</div>
    </div>
  );
}

