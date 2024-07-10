import React ,{ useState , useEffect } from 'react';

import L, { latLng } from "leaflet";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import {Marker, Popup} from 'react-leaflet';


//import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";




L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  });

function Draw() {

 //   const [drawnFeature, setDrawnFeature] = useState([]);
    // const [position , setPosition] = useState([{ lat: null, lng: null }]);
    const [shapes , setShapes] = useState([]);


   //  const [position, setPosition] = useState({ lat: 0, lng: 0 });
   

     

    // const features = (drawnFeatures) => {
    //     drawnFeatures = [...drawnFeature,setDrawnFeature]
    //  }

   // const _created = (e) => console.log([e.layer._map._lastCenter.lat,e.layer._map._lastCenter.lng]);

    const _created = (e) => {
        console.log(e);
        e.layer.bindPopup('Hello');
        

        var name = prompt("what is the object name :", "write name here");
        var obj = new Shape(e.layerType, name, e.layer)
        setShapes((prevShapes) => [...prevShapes, obj] );
        console.log(shapes)




    }

    useEffect(() => {
        console.log('Shapes updated:', shapes);
        // localStorage.setItem("Shapes", JSON.stringify(shapes))
      }, [shapes]);

    // const defineposition = (e) => {
    //       setPosition([
    //         e.layer._map._lastCenter.lat,
    //         e.layer._map._lastCenter.lng
    //       ])

    // } 




    return (
        <div>
             <FeatureGroup>
                <EditControl
                  position="topright"
                  onCreated={_created} 
                  
                 />
                  {/* <Marker position={defineposition}>    

                        <Popup>
                           A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>

                        <input
                        type="text"
                        FeatureName= "FeatureName"
                        onChange={(e) => setFeatureName(e.target.value)}
                        
                    />    

                </Marker> */}
              </FeatureGroup>
              
        </div>
    );
}

export default Draw;




class Shape {
    type =  "";
    name  = "";
    layer = null;

    constructor(type, name, layer){
        this.type = type;
        this.name = name;
        this.layer = layer;
    }
}