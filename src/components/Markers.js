import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation';

const Markers = (props) => {
    console.log(props)
    const places = props.places.places;
    const markers = places.map((place, i) =>(
        <Marker
            key={i}
            position={place.geometry} 
            icon={IconLocation}
        />
    ));
    return (
        markers
    )
}

export default Markers;