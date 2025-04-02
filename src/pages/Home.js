import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

function Home() {
  const [date, setDate] = useState(new Date());

  const events = [
    { date: new Date(2023, 2, 25), name: 'Woodworking Workshop' },
    { date: new Date(2023, 2, 26), name: 'Cooking Class' },
    { date: new Date(2023, 3, 1), name: 'Community Cleanup Drive' },
    { date: new Date(2023, 3, 7), name: 'Music Jam Session' },
  ];

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const event = events.find(
        (event) =>
          event.date.getDate() === date.getDate() &&
          event.date.getMonth() === date.getMonth() &&
          event.date.getFullYear() === date.getFullYear()
      );
      return event ? <div className="event-marker">{event.name}</div> : null;
    }
  };

  return (
    <div className="page-content">
      <h1>Home</h1>
      <p>Building a Conscious and Creative Community</p>
      <p>
        In a fast-paced world filled with distractions, ForRest Of Us is a space to slow down, reconnect, and create with purpose. Through hands-on experiences in woodworking, crafting, cooking, music, and repair, we cultivate self-reliance, sustainability, and joy in making. Join us in building a community that values creativity, mindful living, and shared knowledge.
      </p>

      <h2>Event Calendar</h2>
      <p>Stay updated with the latest activities happening at ForRest Of Us:</p>
      <ul>
        <li><strong>Woodworking Workshop:</strong> Saturday, March 25th, 10:00 AM - 1:00 PM</li>
        <li><strong>Cooking Class:</strong> Sunday, March 26th, 2:00 PM - 4:00 PM</li>
        <li><strong>Community Cleanup Drive:</strong> Saturday, April 1st, 9:00 AM - 12:00 PM</li>
        <li><strong>Music Jam Session:</strong> Friday, April 7th, 6:00 PM - 8:00 PM</li>
      </ul>
      <div>
        <Calendar onChange={setDate} value={date} tileContent={tileContent} />
      </div>
    </div>
  );
}

export default Home;
