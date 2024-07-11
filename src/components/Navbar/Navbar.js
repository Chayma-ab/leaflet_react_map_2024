import React from 'react';
import './Navbar.css';
import Search from '../Search/Search';

function Navbar({ shapes, setShapes, selectedShapes, setSelectedShapes }) {
    return (
        <div>
            <Search shapes={shapes} setShapes={setShapes} selectedShapes={selectedShapes} setSelectedShapes={setSelectedShapes} />
        </div>
    );
}

export default Navbar;
