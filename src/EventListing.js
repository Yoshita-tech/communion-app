import { useState } from "react";
import "./App.css";

export default function EventListing() {
  const [events, setEvents] = useState([
    { id: 1, name: "Community Meetup", date: "2025-03-15", location: "City Hall", category: "Social", description: "A gathering to connect and share ideas." },
    { id: 2, name: "Charity Drive", date: "2025-03-20", location: "Community Center", category: "Charity", description: "Fundraiser to support underprivileged children." },
    { id: 3, name: "Interfaith Dialogue", date: "2025-03-25", location: "University Hall", category: "Religious", description: "A panel discussion on faith and unity." },
  ]);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [newEvent, setNewEvent] = useState({ name: "", date: "", location: "", category: "", description: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // Filter events based on search & selected filters
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase()) &&
    (categoryFilter === "" || event.category === categoryFilter) &&
    (dateFilter === "" || event.date === dateFilter)
  );

  // Function to add a new event
  const addEvent = () => {
    if (!newEvent.name || !newEvent.date || !newEvent.location || !newEvent.category || !newEvent.description) {
      setErrorMessage("All fields are required!");
      return;
    }

    setEvents([...events, { id: events.length + 1, ...newEvent }]);
    setNewEvent({ name: "", date: "", location: "", category: "", description: "" });
    setErrorMessage(""); // Clear error message
  };

  const backgroundStyle = {
    backgroundImage: "url('/images/background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: "20px",
    color: "black",
  };
  
  return (
    <div style={backgroundStyle}>
    <div className="event-container">
      <h1>📅 Upcoming Events</h1>

      {/* Search and Filter Options */}
      <div className="filters">
        <input type="text" placeholder="🔍 Search events..." className="input-field" onChange={(e) => setSearch(e.target.value)} />
        <select className="input-field" onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <input type="date" className="input-field" onChange={(e) => setDateFilter(e.target.value)} />
      </div>

      {/* Event Listings */}
      <ul className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <li key={event.id} className="event-item">
              <h2>{event.name}</h2>
              <p>📅 {event.date} | 📍 {event.location} | 🏷️ {event.category}</p>
              <p>{event.description}</p>
            </li>
          ))
        ) : (
          <p className="no-events">❌ No events found!</p>
        )}
      </ul>

      {/* Add New Event Form */}
      <div className="event-form">
        <h2>➕ Add New Event</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
  <label>Event Name:</label>
  <input type="text" className="input-field" placeholder="Enter event name" value={newEvent.name} onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} />
</div>

<div className="form-group">
  <label>Date:</label>
  <input type="date" className="input-field" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
</div>

<div className="form-group">
  <label>Location:</label>
  <input type="text" className="input-field" placeholder="Enter location" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
</div>

<div className="form-group">
  <label>Category:</label>
  <select className="input-field" value={newEvent.category} onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}>
    <option value="">Select Category</option>
    <option value="Religious">Religious</option>
    <option value="Social">Social</option>
    <option value="Charity">Charity</option>
  </select>
</div>

<div className="form-group">
  <label>Description:</label>
  <textarea className="input-field" placeholder="Enter event details" value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}></textarea>
</div>

        <button className="cta-button" onClick={addEvent}>Add Event</button>
      </div>
    </div>
    </div>
  );
}
