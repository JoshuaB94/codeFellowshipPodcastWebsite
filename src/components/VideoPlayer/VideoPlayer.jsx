import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css'
import {AspectRatio} from '@chakra-ui/react';
import {Center} from '@chakra-ui/react';

class ResponsiveVideoPlayer extends Component {
    render () {
        return (
            <div className='videoplayer-wrapper'>
                <AspectRatio maxW='50%' ratio={16 / 9}>
                    <Center>
                        <ReactPlayer 
                        className='videopodcast-player'
                        url= 'https://youtu.be/_lAI4n6rODE'
                        controls
                        width= '100%'
                        height='100%'
                        />
                    </Center>
                </AspectRatio>
                
            </div>
        )
    }
}

export default ResponsiveVideoPlayer;
