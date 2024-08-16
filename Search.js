import React from 'react'
import {useEffect,useState} from "react"
import axios from "axios"

export default function Search({info,setInfo}) {
  const [city,setCity] = useState("")
  // usestate ile giridğim sehrin değerini güncel olarak yazdırdık

 const handleChange = () => {
   const api = "f53f4e32fa8b1c5dbc2de6cba39bba76";
   const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
   axios(baseUrl).then(res => setInfo(res.data))
 }
  // // içerisine yazacağımız c,ty değeri  her yasam dongusune girdiğinde onu update etmemizi sağlar sanırım
  return (
<div className="App">
 
  <form className="form-inline" onSubmit={(e)=>{e.preventDefault(); handleChange()}}>
    <input onChange={(e)=>setCity(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search for a city" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  {/* onchange ile city değerim her değiştiğinde güncellenen city değerini  e.target.value ile yazdırmış olduk */}

</div>
  )
}
