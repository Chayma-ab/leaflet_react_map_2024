import React from 'react';
import L from 'leaflet';
import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
});

class Shape {
    visible = false;

    constructor(type, name, layer) {
        this.type = type;
        this.name = name;
        this.layer = layer;
    }
}

function Draw({ shapes, setShapes }) {
    const _created = (e) => {
        const name = prompt('What is the object name:', 'write name here');
        const obj = new Shape(e.layerType, name, e.layer);
        e.layer.remove()
        setShapes((prevShapes) => [...prevShapes, obj]);
    };

    return (
        <div>
            <FeatureGroup>
                <EditControl position="topright" onCreated={_created} />
            </FeatureGroup>
        </div>
    );
}

export default Draw;
