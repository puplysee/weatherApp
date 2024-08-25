import React from 'react'
import { useState } from "react"
import axios from "axios"
import Alert from "./Alerts.js"







export default function Search({ info, setInfo }) {
  const [city, setCity] = useState([])
  const [showAlert, setShowAlert] = useState(null)
  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState("black")







const handleChange = async () => {
  const api = "f53f4e32fa8b1c5dbc2de6cba39bba76";
  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`;
  
   
try {
   const res =  await axios.get(baseUrl)
   if(res.status ===200){
   setInfo(info=>[...info,res.data])
   console.log("başarılı")
  }

} catch (error) {
   setShowAlert(true)
   setTimeout(() => {
    console.log("time out")
    setShowAlert(false)
  }, 3000);
   console.log(error)
} 

  

}



return (
  <div className="container">
   <h2 style={{marginLeft:"530px",fontSize:"32px",color:"white",position:"absolute",marginTop:"-60px"}} id=''>Weather App</h2>
    <form id="" className="form-inline" onSubmit={(e) => { e.preventDefault(); handleChange() }}>
    
      <div className='input-group' style={{width:"30em",margin:"auto",marginTop:"15em"}}>
      <input  id='' onChange={(e) => setCity(e.target.value)} className="form-control" type="search" placeholder="Search for a city" aria-label="Search" />
      <button id="" className="btn btn-success" type="submit">Search</button></div> 
      { showAlert && (<Alert message={alertMessage} type={alertType} />)} 
    </form>
  

  </div>


) 
}