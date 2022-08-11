import React from 'react';
import AnimateView from './animateView/AnimateView';
import Location from './location/Location';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Styles from '../../styles/App.module.css';
import L from 'leaflet';


const Maps = (props) => {
    const position = [51.505, -0.09];
    const icon = L.icon({
        "iconUrl": require("../../assets/marker.png"),
        "iconSize": [42,38]
    });

    const {selectPosition } = props;
    const locationPosition = [selectPosition?.lat, selectPosition?.lon];
    const locationPositionPopup = [selectPosition?.display_name];

    return(
        <div>
            <MapContainer center={position} zoom={6} scrollWheelZoom={false} zoomControl={false} className={Styles.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Ygi2dI5zadQPjtiELtIx"
                />
                {selectPosition && (
                    <Marker position={locationPosition} icon={icon}>
                        <Popup>
                            {locationPositionPopup}
                        </Popup>
                    </Marker>
                )}
                <ZoomControl position="bottomright"/>
                <Location />
                <AnimateView selectPosition={selectPosition}/>
            </MapContainer>
        </div>
    )
}

export default Maps;