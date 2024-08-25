import React, { useState } from 'react'
import Search from './components/Search';
import Cards from './components/cards/Cards.jsx';
import "./App.css"
import Navbar from './components/Navbar.js';




function App() {
  const[info,setInfo] = useState([]);

  return (
 <> 
 <Navbar></Navbar>
 <Search setInfo={setInfo}/>
 <Cards info={info}/>

 </>
  )
}
export default App;
