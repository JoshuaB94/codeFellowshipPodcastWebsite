import React from 'react';
import './App.css';
// import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx';
import {Container, Button} from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import {FaDiscord, FaTwitter, FaTwitch , FaYoutube} from 'react-icons/fa'

function App() {
  return (
    <Container maxW='container.xl' className="app">

      {/* Subscribe Button and YouTube icon*/}
      <Button className="subscribe-cta">Subscribe</Button> <FaYoutube size={50} />

      {/* Main Content */}
      <section className ='video-area'>
        <h1 className="text-logo">codeFellowship( )</h1> 

        {/* Video Player */}
        <ReactPlayer className='videopodcast-player'
        url= 'https://youtu.be/_lAI4n6rODE' controls width='80%' height='80vh'/>

        {/* icons */}
        <div className='icons'>
          <FaDiscord size={35} /> <FaTwitter size={40} /> <FaTwitch size={35} />
        </div>

        {/* Main Body Text */}
        <h1 className='text-body'>// FULL SITE COMING SOON</h1>

      </section>
      

      {/* <VideoPlayer /> */}
    </Container>
  );
}

export default App;