import React from 'react';
import Card from './component.card/Card';

const Availableplayer = ({ players }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {players.map((player, index) => (
      

        <Card key={index} player={player} />
      ))}
    </div>
  );
};

export default Availableplayer;