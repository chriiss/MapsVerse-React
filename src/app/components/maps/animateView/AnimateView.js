import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';



const AnimateView= (props) => {
    const {selectPosition } = props;
    const map = useMap();

    useEffect(()=> {
        if(selectPosition) {
            map.setView(
                L.latLng(selectPosition?.lat, selectPosition?.lon),
                15,
                {
                    animate: true
                }
            )
        }
    })
    return null;
}

export default AnimateView;