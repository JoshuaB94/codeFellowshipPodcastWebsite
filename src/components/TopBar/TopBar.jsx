import './TopBar.css';
import React from 'react';
import { Button } from '@chakra-ui/react';

const TopBar = () => {
    return ( 
        <div className= "top-bar">
            <Button className="subscribe-cta">Subscribe</Button>
        </div>
     );
}
 
export default TopBar;