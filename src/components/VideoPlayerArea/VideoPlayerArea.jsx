import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayerArea = () => {
    return (
        <div>
            <div>Subscribe Button</div>
            
            <div>
                <ReactPlayer url='https://youtu.be/m6v3vARKZ8g' />
            </div>

        </div>
    );
}

export default VideoPlayerArea;