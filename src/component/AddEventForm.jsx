// AddEventForm.js

import React, { useState } from 'react';

const AddEventForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields before submitting
    if (formData.name && formData.date && formData.time && formData.location && formData.image) {
      // Pass form data to parent component for adding the new event
      onAdd(formData);
      // Reset form after submission
      setFormData({ name: '', date: '', time: '', location: '', image: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Event Name" value={formData.name} onChange={handleChange} />
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <input type="time" name="time" value={formData.time} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
