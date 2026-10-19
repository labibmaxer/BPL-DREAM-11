import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const SelectedPlayers = ({ selectedPlayers , setselectedplayers }) => {
  console.log(selectedPlayers, 'selectedPlayers');
  const handleDeletedSelectedPlayer = (player) => {
    console.log(player , 'player');
    const filterplayer = selectedPlayers.filter(selectedplayer => selectedPlayers.playerName !== player.playerName)
    console.log(filterplayer , 'filterplayer');
    setselectedplayers (filterplayer);
  }
  return (
    <div className="space-y-5">
      {selectedPlayers.map((player) => (
        <div key={player.id} className="flex items-center gap-6 justify-between p-10 rounded-2xl border">
            <div className='flex  items-center gap-6'>
          <img src={player.playerImage} alt={player.playerName} />
          {/* <div className=''> */}
          <h2 className="card-title"><FaUserCircle />
{player.playerName}</h2>
          <p>{player.playerType}</p>
          <p>Price: {player.price}</p>
          </div>
          <div>
            <button className='btn text-red-500' onClick={() =>handleDeletedSelectedPlayer (player)}><AiFillDelete />
</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedPlayers;