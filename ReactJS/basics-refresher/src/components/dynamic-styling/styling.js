import './styling.css';
import React, { useState } from 'react';


function Styling() {
    const [className, setClassName] = useState('');

    const handleClick = () => {
        setClassName(className === '' ? 'active' : '');    
    };
    return (
    <div>
      <button className={className} onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default Styling;
