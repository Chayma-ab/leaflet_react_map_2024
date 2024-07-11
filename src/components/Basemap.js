import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Circle, Polygon, Polyline, Rectangle } from 'react-leaflet';
import Draw from './Draw';
import ExportButton from './ExportButton';  // Import the new ExportButton component

function Basemap({ shapes, setShapes, selectedShapes }) {
    const position = [36.805, 10.189];

    const filteredShapes = selectedShapes.length === 0 || selectedShapes.includes('all')
        ? shapes
        : shapes.filter(shape => selectedShapes.includes(shape.name));

    const renderShape = (shape) => {
        switch (shape.type) {
            case 'marker':
                return <Marker key={shape.name} position={shape.layer.getLatLng()}><Popup>{shape.name}</Popup></Marker>;
            case 'circle':
                return <Circle key={shape.name} center={shape.layer.getLatLng()} radius={shape.layer.getRadius()} />;
            case 'polygon':
                return <Polygon key={shape.name} positions={shape.layer.getLatLngs()} />;
            case 'polyline':
                return <Polyline key={shape.name} positions={shape.layer.getLatLngs()} />;
            case 'rectangle':
                return <Rectangle key={shape.name} bounds={shape.layer.getBounds()} />;
            default:
                return null;
        }
    };

    return (
        <div className="App">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Draw shapes={shapes} setShapes={setShapes} />
                
                <ExportButton />  {/* Add the ExportButton component */}
            </MapContainer>
        </div>
    );
}

export default Basemap;
