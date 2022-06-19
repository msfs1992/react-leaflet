import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';
import { places } from '../assets/data';

const MapView = ()=>{
    const [state,setState] = useState({
        currentLocation: {lat:'52.52437', lng:'13.41053'}
    });

    return (
        <MapContainer center={state.currentLocation} zoom={13}>
            <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
            <Markers places={places} />
        </MapContainer>
    );
};

export default MapView;