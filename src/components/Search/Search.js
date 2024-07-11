import React from 'react';
import './search.css';

import { Dropdown } from 'react-bootstrap';

function Search({ shapes, selectedShapes, setSelectedShapes }) {
    const handleChange = (event) => {
        // const options = event.target.options;
        // const selected = [];
        // for (let i = 0, l = options.length; i < l; i++) {
        //     if (options[i].selected) {
        //         selected.push(options[i].value);
        //     }
        // }
        // setSelectedShapes(selected);
        console.log("change value of dropdown")
    };

    return (
        <div>
            {/* <select multiple={true} >
                <option value="all">All</option>
                {shapes.map((shape, key) => (
                    <option key={key} value={shape.name}>{shape.name}</option>
                ))}
            </select> */}
            <Dropdown className="mainDropdown">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu value={selectedShapes} onChange={handleChange}>
                    {shapes.map((shape, key) => (
                        <Dropdown.Item value={shape.name}>{shape.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Search;
