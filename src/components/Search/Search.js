import React from 'react';
import './search.css';

function Search({ shapes, selectedShapes, setSelectedShapes }) {
    const handleChange = (event) => {
        const options = event.target.options;
        const selected = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                selected.push(options[i].value);
            }
        }
        setSelectedShapes(selected);
    };

    return (
        <div>
            <select multiple={true} value={selectedShapes} onChange={handleChange}>
                <option value="all">All</option>
                {shapes.map((shape, key) => (
                    <option key={key} value={shape.name}>{shape.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Search;
