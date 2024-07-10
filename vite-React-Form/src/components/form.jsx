
import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label >
        Name:
        <input id="name-field" type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      
      <label >
        Email:
        <input id ="email-field" type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      
      <label>
        Message:
        <textarea id="message-field" name="message" value={formData.message} onChange={handleChange} />
      </label>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
