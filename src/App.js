import React, { useEffect, useState } from 'react';
import './App.css';  // If you have any custom styles
import config from './config.json'; // Import the config.json file

const App = () => {
  const [socials, setSocials] = useState({});

  useEffect(() => {
    // Set the social links from config.json
    setSocials(config.socials);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Check out my projects and get in touch!</p>
      </header>
      
      <section className="connect-section">
        <h2>Connect with Me</h2><br/>
        <a 
          href={socials.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          LinkedIn Profile
        </a>
      </section>
    </div>
  );
};

export default App;
