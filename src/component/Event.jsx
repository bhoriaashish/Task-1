// Event.js

import React, { useState } from 'react';

const Event = ({ event, onLike }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
    onLike(event.id, !liked); // Pass event id and updated like status to parent component
  };

  return (
    <div className="event">
      <h3>{event.name}</h3>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <img src={event.image} alt={event.name} />
      <button onClick={handleLikeToggle}>
        {liked ? 'Unlike' : 'Like'} {/* Toggle like/unlike text based on current state */}
      </button>
    </div>
  );
};

export default Event;
