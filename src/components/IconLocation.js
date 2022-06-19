import L from 'leaflet';

export const IconLocation = L.icon({
    iconUrl: require('../assets/location.png'),
    iconRetinaUrl: require('../assets/location.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [32,32],
    className: "leaflet-venue-icon"
});
