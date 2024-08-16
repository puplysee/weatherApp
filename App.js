import React, { useState } from 'react'
import Search from './components/Search';
import Cards from './components/cards/Cards.jsx'



// use positionı enlem ve boylam degerlerını  almak için indirdik


function App() {
  const[info,setInfo] = useState([]);

  return (
 <>
 <Search info={info} setInfo={setInfo}/>
 <Cards info={info}/>
 </>
  )
}
export default App;
