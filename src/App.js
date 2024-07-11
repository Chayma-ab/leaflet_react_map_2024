import React, { useState } from 'react';
import './App.css';
import Basemap from './components/Basemap';
import Navbar from './components/Navbar/Navbar';

function App() {
    const [shapes, setShapes] = useState([]);
    const [selectedShapes, setSelectedShapes] = useState([]);

    return (
        <div>
            <Navbar shapes={shapes} selectedShapes={selectedShapes} setSelectedShapes={setSelectedShapes} />
            <Basemap shapes={shapes} setShapes={setShapes} selectedShapes={selectedShapes} />
        </div>
    );
}

export default App;
