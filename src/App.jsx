import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from "react-router-dom";
import ForgotPassword from './pages/ForgotPassword';
import AddEventForm from './component/AddEventForm';
import Event from './component/Event';


function App() {
  const [count, setCount] = useState(0)
  const [events, setEvents] = useState([]);
  const handleLike = (eventId, liked) => {
    // Update liked status in the events array
    const updatedEvents = events.map(event => {
      if (event.id === eventId) {
        return { ...event, liked: liked };
      }
      return event;
    });
    setEvents(updatedEvents);
  };

  const handleAddEvent = (formData) => {
    // Add new event to the events array
    setEvents([...events, { id: events.length + 1, ...formData, liked: false }]);
  };

  return (
    <>
    {/* <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes> */}
     {/* <Register/> */}
     {/* <Login/> */}
     {/* <ForgotPassword/> */}
     {/* <AddEventForm/> */}
     <h1>Events</h1>
      {events.map(event => (
        <Event key={event.id} event={event} onLike={handleLike} />
      ))}
      <AddEventForm onAdd={handleAddEvent} />
     
     {/* <Event/> */}
    </>
  )
}

export default App
