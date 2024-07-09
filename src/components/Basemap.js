import  React from 'react';
import {MapContainer, TileLayer,Marker, Popup} from 'react-leaflet'


function Basemap () {
    const position = [36.805, 10.189]
          
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
    </MapContainer>
      </div>
    );
  }

export default Basemap;