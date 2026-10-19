import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import Card from './component.card/Card';

const Availableplayer = ({ players }) => {
    console.log(players, 'players');
    
  return (
   <Card player={player}></Card>
  );
};

export default Availableplayer;