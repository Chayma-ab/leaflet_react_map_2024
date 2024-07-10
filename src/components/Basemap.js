import  React from 'react';
import {MapContainer, TileLayer,Marker, Popup} from 'react-leaflet';
//import Draw from './components/Draw';
//import Draw from './components/Draw';
import Draw from './Draw';


var Shapes;

function Basemap () {
    const position = [36.805, 10.189]
    console.log(position)
          
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

       <Draw />

    </MapContainer>
      </div>
    );
  }

export default Basemap;