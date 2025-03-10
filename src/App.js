import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import EventListing from "./EventListing";
import logo from "./logo.svg"; 
import "./App.css";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo-image" />
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
      
      <footer className="App-footer">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </Router>
  );
}


