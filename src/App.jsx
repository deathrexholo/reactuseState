import { useState } from 'react'
import React from 'react';

function Counter() {
  const [prevCount, setCount] = useState(0);
  
  const increment = () => {
     setCount(prevCount => prevCount < 10 ? prevCount + 1 : 20);
  };

  // const increment =() {
  //   setCount(prevCount + 1);
  // }

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

return (
    <div>
      <h1>count: {prevCount}</h1>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;