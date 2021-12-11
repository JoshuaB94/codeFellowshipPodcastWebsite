import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css'
import {AspectRatio, Container, Box} from '@chakra-ui/react';

class VideoPlayer extends Component {
    render () {
        return (
            <Container maxW='container.md' centerContent className='video-wrapper'>
                <Box>
                    <AspectRatio maxW='100%' ratio={16 / 9}>
                        <ReactPlayer 
                        className='videopodcast-player'
                        url= 'https://youtu.be/_lAI4n6rODE'
                        controls/>
                    </AspectRatio>
                </Box>
            </Container>
        )
    }
}

export default VideoPlayer;
