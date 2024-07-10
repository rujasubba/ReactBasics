// src/App.js
import React from 'react';
import Form from './components/form';

function App() {
  const handleSubmit = (formData) => {
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="simpleForm-app">
      <h1>Simple Form</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default App;

