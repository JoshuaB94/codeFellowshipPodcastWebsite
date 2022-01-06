import React from 'react';
import './App.css';
import { FaDiscord, FaTwitter, FaSpotify } from 'react-icons/fa'
import { SiAnchor } from 'react-icons/si';
import YoutubePlayer from './components/YoutubePlayer/YoutubePlayer';

function App() {
  return (
    <div className="app-container">
      <div className="text-logo">Logo Goes Here</div>

      <YoutubePlayer embedId='m6v3vARKZ8g' />

      <div className='icons'>
        <FaDiscord size={35} className="discord-icon" /> 
        <FaTwitter size={35} className="twitter-icon" /> 
        <FaSpotify size={35} className="spotify-icon" /> 
        <SiAnchor size={35} className="anchor-icon"/>
      </div>

      <h2>// FULL SITE COMING</h2>

      <div className="copyright">
        <p>© 2022 - codeFellowship( ) &#123; the podcast &#125;</p>
      </div>

    </div>
  );
}

export default App;