import React, { useEffect } from "react";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    // Access the element with the class 'home-header'
    const homeHeader = document.querySelector('.home-header');

    // Dynamically set the background image and other properties using JavaScript
    homeHeader.style.backgroundImage = 'url("/images/home.jpg")'; // Set background image
    homeHeader.style.backgroundSize = 'cover'; // Ensure the image covers the section
    homeHeader.style.backgroundPosition = 'center center'; // Center the background image
    homeHeader.style.minHeight = '100vh'; // Set the height to cover the full page
    homeHeader.style.display = 'flex';
    homeHeader.style.flexDirection = 'column';
    homeHeader.style.alignItems = 'center';
    homeHeader.style.justifyContent = 'center';
    homeHeader.style.textAlign = 'center';
    homeHeader.style.color = 'black'; // Optional: change text color for contrast
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to <span className="highlight">Communion App</span></h1>
        <p>Bringing people together through shared values, events, and community support.</p>
        <a href="/events" className="explore-button">🌟 Explore Events</a>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Connecting People Across Faiths & Interests</h2>
          <p>
            Communion App is your one-stop platform for discovering and participating in meaningful events.  
            Whether you're looking for spiritual gatherings, social initiatives, or charity drives,  
            we help you connect with like-minded people who share your interests.
          </p>
          <ul className="features-list">
            <li>📅 Discover & Join Events Tailored to Your Interests</li>
            <li>🌎 Connect with a Global Community</li>
            <li>🤝 Foster Stronger Relationships Through Shared Activities</li>
            <li>🎉 Create & Promote Your Own Events</li>
          </ul>
          <a href="/events" className="cta-button">📅 Browse Events</a>
        </div>
        <img src="/images/community-gathering.jpg" alt="Community Gathering" className="community-image" />
      </section>

      <section className="about-section">
        <h2>Why Join Communion App?</h2>
        <p>
          We believe in the power of togetherness. Our platform is designed to help individuals and  
          organizations create impactful experiences that bring people closer.
        </p>
        <div className="benefits-container">
          <div className="benefit">
            <h3>📌 Find Meaningful Events</h3>
            <p>Explore a wide range of events that align with your faith, interests, and values.</p>
          </div>
          <div className="benefit">
            <h3>🌍 Build a Supportive Community</h3>
            <p>Connect with like-minded people and grow your network.</p>
          </div>
          <div className="benefit">
            <h3>🎯 Make a Difference</h3>
            <p>Join social and charity initiatives to give back to your community.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

