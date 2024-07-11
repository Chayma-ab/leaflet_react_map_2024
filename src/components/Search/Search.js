import React from 'react';
import './search.css';

import { Dropdown } from 'react-bootstrap';

function Search({ shapes, setShapes, selectedShapes, setSelectedShapes }) {
    const handleChange = (event) => {
        // const options = event.target.options;
        // const selected = [];
        // for (let i = 0, l = options.length; i < l; i++) {
        //     if (options[i].selected) {
        //         selected.push(options[i].value);
        //     }
        // }
        // setSelectedShapes(selected);
        console.log(event)
    };

    
    function HighlightShape(name){
        var selected = shapes.find(s=> s.name == name)
        console.log(selected)
    }

    const ToggleShape = (sh) => {
        sh.visible = !sh.visible
        setShapes([...shapes])
        console.log(shapes)
    }
    return (
        <div>
            {/* <select multiple={true} >
                <option value="all">All</option>
                {shapes.map((shape, key) => (
                    <option key={key} value={shape.name}>{shape.name}</option>
                ))}
            </select> */}
            <Dropdown className="mainDropdown" onSelect={function(evt){console.log(evt)}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    {shapes.map((shape, key) => (
                        <Dropdown.Item onClick={() => ToggleShape(shape)}  key={key}>{shape.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Search;
