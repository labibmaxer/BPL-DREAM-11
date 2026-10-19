import React, { useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
const Card = ({player , setcoin , coin, setselectedplayers, selectedPlayers}) => {
const [isSelected , setisSelected] = useState (false);
  const handleonclick = () => {
     setisSelected(true)
   setcoin ( coin - player.price)

     setselectedplayers([...selectedPlayers, player])
  }
  return (
    
   
      <div className="card bg-base-100 w-96 shadow-sm">
        
  <figure>
    <img
      src= {player.playerImage}
      alt="Shoes" />
  </figure>

  
  <div className="card-body">
    <h2 className="card-title"><FaCircleUser />{player.playerName}</h2>
    <div className='flex justify-between gap-2 items-center'>
        <div className='flex gap-2 items-center'>
        <FaFlag /> 
        <p>{player.playerCountry}</p>
        </div>
        <button className='btn'>{player.playerType} </button>
    </div>
    <div className="divider"></div>
    <h2>{player.rating}</h2>
    <div className='flex justify-between gap-4 font-bold'>
        <p>{player.battingStyle}</p>
        <p className='text-right'>{player.bowlingStyle}</p>
    </div>
    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
    <div className="card-actions justify-between font-semibold items-center">
        <p>Price :{player.price}</p>
      <button className="btn " onClick={ handleonclick} disabled={isSelected}>{ isSelected === (true) ? "selected" :  "Choose Player"}</button>
    </div>
  </div>
</div> 
  
  );
}



    

export default Card;