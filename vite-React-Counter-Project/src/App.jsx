import React from 'react';
import Counter from '../components/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      <Counter initialValue={0} />
    </div>
  );
}

export default App;

