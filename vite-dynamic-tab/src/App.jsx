// src/App.js
import React from 'react';
import Mytabs from './components/Mytabs';
import './App.css';

const App = () => {
  const tabs = [
    {
      header: 'Home',
      content: <div>All contents for Home goes here.</div>,
    },
    {
      header: 'About Us',
      content: <div>All contents for About Us goes here.</div>,
    },
    {
      header: 'Contact Us',
      content: <div>All contents for Contact Us goes here.</div>,
    },
  ];

  return (
    <div className="App">
      <h1>Dynamic Tabs</h1>
      <Mytabs tabs={tabs} />
    </div>
  );
};

export default App;

