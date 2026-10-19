import React, { useState } from 'react';
import { use } from 'react';
import Availableplayer from '../components.Available players/Availableplayer';
const Player = ({playerpromise}) => {
    console.log(playerpromise);
    
    const players = use(playerpromise);
    console.log(players); 
    const [selectedType , setselectedType ] = useState ("available  ");
    console.log(selectedType , 'selectedType');
    
    return (
        
        <div className='container mx-auto'>
            <div>
                <div>Available players</div>
                <div className='align-right text-right gap-3 mb-[20px]'>
                    <button onClick= { () => setselectedType('available')} className={`btn text-black rounded-r-none rounded-l-xl ${
    selectedType === "available" ? "bg-[#E7FE29]" : ""
  }`}>Available</button>
               
                    <button onClick= { () => setselectedType('selected')} className={`btn text-black rounded-l-none rounded-r-xl ${
    selectedType === "selected" ? "bg-[#E7FE29]" : ""
  }`}>Selected</button>
                </div>
        <Availableplayer players={players}></Availableplayer>
        </div>
          </div>
    );
};

export default Player;