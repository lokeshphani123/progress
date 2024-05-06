import React, { useState } from 'react';

function Conditional() {
  const [isTrue, setIsTrue] = useState(false);

  const handleClick = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div>
      {isTrue ? <p>This is example for Conditional rendering. For example, click button and check me: <h1>True</h1></p> : <p>This is example for Conditional rendering. For example, click button and check me: <h1>False</h1></p>}
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}

export default Conditional;
