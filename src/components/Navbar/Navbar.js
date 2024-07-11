import React from 'react';
import './Navbar.css';
import Search from '../Search/Search';

function Navbar({ shapes, selectedShapes, setSelectedShapes }) {
    return (
        <div>
            <Search shapes={shapes} selectedShapes={selectedShapes} setSelectedShapes={setSelectedShapes} />
        </div>
    );
}

export default Navbar;
