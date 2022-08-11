import React, { useState } from 'react';
import { useMapEvents, Marker, Popup } from 'react-leaflet';
import Styles from "../../../styles/App.module.css";
import LocationIcon from "./locationIcon/LocationIcon";
import L from 'leaflet';


const Location = () => {
    const [position, setPosition] = useState(null);
    const icon = L.icon({
        "iconUrl": require("../../../assets/marker_location.png"),
        "iconSize": [42,38]
    });

    const map = useMapEvents({
        locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
        },
    })

    const localClick = () => {
        map.locate();
        map.setZoom(map.getZoom() + 10);
    }

    return position === null ? (
        <div><button type="button" className={Styles.location} onClick={localClick}><LocationIcon/></button></div>
    ) :
    (
        <div>
            <Marker position={position} icon={icon}>
                <Popup>You are here</Popup>
            </Marker>
            <div><button type="button" className={Styles.location} onClick={localClick}><LocationIcon/></button></div>
        </div>
    )
}

export default Location;