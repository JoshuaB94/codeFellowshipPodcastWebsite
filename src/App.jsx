import React from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx';
import TopBar from './components/TopBar/TopBar.jsx';
import {Container} from '@chakra-ui/react';

function App() {
  return (
    <div className="app">
      <TopBar />
      <h1>codeFellowship( )</h1>

      <div className="video-container">
        <VideoPlayer />
      </div>

    </div>
  );
}

export default App;
