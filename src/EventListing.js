import { useState, useEffect } from "react";
import "./App.css";

export default function EventListing() {
  const [events, setEvents] = useState([]);
  const [tempEvents, setTempEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", date: "", location: "", category: "", description: "" });
  const [errorMessage, setErrorMessage] = useState("");

  // Load saved events from localStorage
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);
  }, []);

  // Save event to localStorage (permanent)
  const saveEvent = (eventToSave) => {
    const updatedEvents = [...events, eventToSave];
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));

    // Remove from temp list
    setTempEvents(tempEvents.filter(e => e.id !== eventToSave.id));
  };

  // Add event (temporary)
  const addEvent = () => {
    if (!newEvent.name || !newEvent.date || !newEvent.location || !newEvent.category || !newEvent.description) {
      setErrorMessage("All fields are required!");
      return;
    }
    const newId = Date.now();
    const temp = { id: newId, ...newEvent };
    setTempEvents([...tempEvents, temp]);
    setNewEvent({ name: "", date: "", location: "", category: "", description: "" });
    setErrorMessage("");
  };

  // Delete event (from saved or temp)
  const deleteEvent = (id, isSaved) => {
    if (isSaved) {
      const updated = events.filter(e => e.id !== id);
      setEvents(updated);
      localStorage.setItem("events", JSON.stringify(updated));
    } else {
      setTempEvents(tempEvents.filter(e => e.id !== id));
    }
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

        <ul className="event-list">
          {[...events, ...tempEvents].map(event => (
            <li key={event.id} className="event-item">
              <h2>{event.name}</h2>
              <p>📅 {event.date} | 📍 {event.location} | 🏷️ {event.category}</p>
              <p>{event.description}</p>
              <button className="delete-button" onClick={() => deleteEvent(event.id, events.some(e => e.id === event.id))}>🗑️ Delete</button>
              {!events.some(e => e.id === event.id) && (
                <button className="save-button" onClick={() => saveEvent(event)}>💾 Save</button>
              )}
            </li>
          ))}
          {events.length === 0 && tempEvents.length === 0 && (
            <p className="no-events">❌ No events found!</p>
          )}
        </ul>

        {/* Add Event Form */}
        <div className="event-form">
          <h2>➕ Add New Event</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="form-group">
            <label>Event Name:</label>
            <input type="text" className="input-field" value={newEvent.name} onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input type="date" className="input-field" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input type="text" className="input-field" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
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
            <textarea className="input-field" value={newEvent.description} onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}></textarea>
          </div>
          <button className="cta-button" onClick={addEvent}>➕ Add Event</button>
        </div>
      </div>
    </div>
  );
}