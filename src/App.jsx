import React from 'react';
import './App.css';
// import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx';
import TopBar from './components/TopBar/TopBar.jsx';
import {Container} from '@chakra-ui/react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <Container maxW='container.xl' className="app">
      <TopBar />
      <section className ='video-area'>
        <h1 className="text-logo">codeFellowship( )</h1> 

        <ReactPlayer className='videopodcast-player'
        url= 'https://youtu.be/_lAI4n6rODE' controls width='80%' height='80vh'/>

      </section>

      {/* <VideoPlayer /> */}
    </Container>
  );
}

export default App;