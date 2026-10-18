import React from 'react';
import { use } from 'react';
import Availableplayer from '../components.Available players/Availableplayer';
const Player = ({playerpromise}) => {
    console.log(playerpromise);
    
    const players = use(playerpromise);
    console.log(players);
    
    return (
        <div className='container mx-auto'>
        Player : {players.length };
        <Availableplayer players={players}></Availableplayer>
        </div>
    );
};

export default Player;