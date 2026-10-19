import React, { useState } from 'react';
import { use } from 'react';
import Availableplayer from '../components.Available players/Availableplayer';
import SelectedPlayers from '../components.selectedPlayers/SelectedPlayers';
const Player = ({playerpromise , setcoin, coin }) => {
    console.log(playerpromise);
    const  [selectedPlayers , setselectedplayers ] = useState ([])
    const players = use(playerpromise  );
    // console.log(selectedPlayers.length);
    console.log(selectedPlayers);
     console.log(players); 
    const [selectedType , setselectedType ] = useState ("available  ");
    console.log(selectedType , 'selectedType');
    
    return (
        
        <div className='container mx-auto'>
            <div>
                <div> 
              { selectedType === "available" ? <h2>Available players </h2> : <h2>selected players ({ selectedPlayers.length }/ {Player.length}) </h2>                  }   
              </div>
                <div className='align-right text-right gap-3 mb-[20px]'>
                    <button onClick= { () => setselectedType('available')} className={`btn text-black rounded-r-none rounded-l-xl ${
    selectedType === "available" ? "bg-[#E7FE29]" : ""
  }`}>Available</button>
               
                    <button onClick= { () => setselectedType('selected')} className={`btn text-black rounded-l-none rounded-r-xl ${
    selectedType === "selected" ? "bg-[#E7FE29]" : ""
  }`}>Selected({selectedPlayers.length})</button>
                </div>
{selectedType === "available" ? (
  <Availableplayer
    players={players}
    coin={coin}
    setcoin={setcoin}
    selectedPlayers={selectedPlayers}
    setselectedplayers={setselectedplayers}
  />
) : (
  <SelectedPlayers selectedPlayers={selectedPlayers} setselectedplayers={setselectedplayers}/>
)}
        </div>
 
          </div>
    );
};

export default Player;