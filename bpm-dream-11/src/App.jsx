import Navbar from './components.nav/Navbar'
import Banner from './components.banner/banner' // Capitalize component variable
import Player from './components.player/player'
import { Suspense } from 'react';
import Availableplayer from './components.Available players/Availableplayer';
 const fetchPlayer = async() => {
    const res = await fetch ("/data.json");
    return res.json();
 };
  const playerpromise = fetchPlayer();
function App() {
    
  
  return (
    <>
      <Navbar />
      <Banner > </Banner>
      <Suspense fallback= {<span className='loading loading-dots loading-xl'></span>}> 
      <Player playerpromise={playerpromise}></Player>
      </Suspense>
      
    </>
  )
}

export default App