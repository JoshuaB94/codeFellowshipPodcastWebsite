import React from 'react';
import './App.css';
import {Container, Button} from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import {FaDiscord, FaTwitter, FaTwitch , FaYoutube} from 'react-icons/fa'

function App() {
  return (
    <Container maxW='container.xl' className="app">

      {/* Subscribe Button*/}
      <Button className="subscribe-cta">Subscribe</Button> 
      
      {/* youtube icon */}
      <div className='youtube-icon'>
        <FaYoutube style={{color: 'red', fontSize:'50px'}} />
      </div>

      {/* Main Content */}
      <section className ='video-area'>
        <h1 className="text-logo">codeFellowship( )</h1> 

        {/* Video Player */}
        <div className='player'>
          <ReactPlayer className='videopodcast-player'
          url= 'https://youtu.be/_lAI4n6rODE' controls width='80%' height='80vh'/>
        </div>

        {/* icons */}
        <div className='icons'>
          <FaDiscord size={35} /> <FaTwitter size={40} /> <FaTwitch size={35} />
        </div>

        {/* Main Body Text */}
        <h1 className='text-body'>// FULL SITE COMING SOON</h1>

        {/* copyright */}
        <div className='copyright' >
          <p>© 2021 - codeFellowship( ) &#123; the podcast &#125;</p>
        </div>
      </section>
      

      {/* <VideoPlayer /> */}
    </Container>
  );
}

export default App;