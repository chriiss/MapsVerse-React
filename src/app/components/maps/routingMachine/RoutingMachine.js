import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "/node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = () => {
  const geocoder = L.Control.Geocoder.nominatim();
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(48.85337, 2.35034),
      L.latLng(46.39248, 0.16387)
    ],
    lineOptions: {
      styles: [{ color: "rgb(30, 96, 250)", weight: 4 }]
    },
    show: true,
    collapsible: true,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    geocoder: geocoder,
  });
  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;