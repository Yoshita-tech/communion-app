import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import EventListing from "./EventListing";
import "./App.css";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
      <img src="/images/logo.jpg" alt="logo" className="logo-image" ></img>
        <h1 className="logo">Communion App</h1>
        <div className="nav-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/events" className="nav-item">Events</Link>
          <Link to="/about" className="nav-item">About</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventListing />} />
      </Routes>
    </Router>
  );
}


