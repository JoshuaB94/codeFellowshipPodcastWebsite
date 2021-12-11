import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css'

class ResponsiveVideoPlayer extends Component {
    render () {
        return (
            <div className='videoplayer-wrapper'>
                <ReactPlayer 
                className='videopodcast-player'
                url= 'https://youtu.be/_lAI4n6rODE'
                controls
                width= '100%'
                height='100%'
                />
            </div>
        )
    }
}

export default ResponsiveVideoPlayer;
