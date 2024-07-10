
import React, { useState,useEffect } from 'react';
import  './search.css'


function Search({shapes}) {
  const [selectedValue, setSelectedValue] = useState('option1'); // Initial selected value

    var shapes = []

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    
    
  }, [shapes]);

  setInterval(()=>{
    if(localStorage.getItem("Shapes")){
        shapes = JSON.parse(localStorage.getItem("Shapes"))
        console.log(shapes)
    }
  }, 1000)

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        {
            shapes?.map((val, key)=> (
                <option value={val}>{val}</option>
            ))
        }
      </select>
    </div>
  );

}

export default Search;