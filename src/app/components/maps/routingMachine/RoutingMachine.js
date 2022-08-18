import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "/node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css";

const createRoutineMachineLayer = (props) => {
  const geocoder = L.Control.Geocoder.nominatim();
  const icon = L.icon({
    "iconUrl": require("../../../assets/marker.png"),
    "iconSize": [42,38]
});
  const instance = L.Routing.control({
    geocoder: geocoder,
    lineOptions: {
      styles: [{ color: "rgb(30, 96, 250)", weight: 4 }]
    },
    show: true,
    collapsible: true,
    routeWhileDragging: true,
    router: new L.Routing.osrmv1({
      language: "fr",
      profile: "car"
    }),
    createMarker: function (i, waypoint, n) {
      const marker = L.marker(waypoint.latLng, {
        draggable: true,
        icon: icon
      });
      return marker;
    }
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;