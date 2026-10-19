import React from 'react';
import Card from './component.card/Card';

const Availableplayer = ({ players , setcoin, coin, setselectedplayers, selectedPlayers}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {players.map((player, index) => (
      

        <Card key={index} player={player} setcoin= {setcoin} coin={coin} selectedPlayers = {selectedPlayers} setselectedplayers={setselectedplayers}/>
      ))}
    </div>
  );
};

export default Availableplayer;