import React, {useEffect, useState, useRef} from 'react';
import AnimateView from './animateView/AnimateView';
import Location from './location/Location';
import RoutingMachine from './routingMachine/RoutingMachine';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Styles from '../../styles/App.module.css';
import L from 'leaflet';


const Maps = (props) => {
    const [map, setMap] = useState(null);
    const routingMachineRef = useRef();
    const pluginRef = useRef();
    const position = [51.505, -0.09];
    const icon = L.icon({
        "iconUrl": require("../../assets/marker.png"),
        "iconSize": [42,38]
    });

    const {selectPosition } = props;
    const locationPosition = [selectPosition?.lat, selectPosition?.lon];
    const locationPositionPopup = [selectPosition?.display_name];

    useEffect(() => {
        if (!map) return;
        const controlContainer = routingMachineRef.current.onAdd(map);
        pluginRef.current.appendChild(controlContainer);
      }, [map]);


    return(
        <div>
            <MapContainer center={position} zoom={6} scrollWheelZoom={true} zoomControl={false} className={Styles.map} whenCreated={setMap}>
                <TileLayer
                    attribution='© OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {selectPosition && (
                    <Marker position={locationPosition} icon={icon}>
                        <Popup>
                            {locationPositionPopup}
                        </Popup>
                    </Marker>
                )}
                <ZoomControl position="bottomright" />
                <Location />
                <AnimateView selectPosition={selectPosition}/>
                <RoutingMachine ref={routingMachineRef} />
            </MapContainer>
            <div style={{ border: "1px solid black" }} ref={pluginRef} />
        </div>
    )
}

export default Maps;