import Navbar from './components.nav/Navbar'
import Banner from './components.banner/banner' // Capitalize component variable
import Player from './components.player/player'
import { Suspense, useState } from 'react';
import Availableplayer from './components.Available players/Availableplayer';
import Card from './components.Available players/component.card/Card';
 const fetchPlayer = async() => {
    const res = await fetch ("/data.json");
    return res.json();
 };
  const playerpromise = fetchPlayer();
function App() {
    const [coin, setcoin] = useState(50000)
  
  return (
    <>
      <Navbar coin ={coin } />
      <Banner > </Banner>
      <Suspense fallback= {<span className='loading loading-dots loading-xl'></span>}> 
      <Player playerpromise={playerpromise} setcoin={setcoin} coin={coin}></Player>
      </Suspense>
      
    </>
  )
}

export default App