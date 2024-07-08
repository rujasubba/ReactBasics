import React, { useState } from 'react';

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
      
    </div>
  );
}

export default Counter;
