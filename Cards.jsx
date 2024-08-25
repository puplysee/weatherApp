import React from 'react'
import "./Cards.css";


export default function Cards({ info }) {




  return (

    <div className=' container mt-5 '  >
      <div className="row">
      {info.map((item, index) => {
        return (
 
          <div key={index}  className="col-3 card border-success m-auto mt-2 " style={{width:"200px",height:"200px",marginRight:"5px",marginBottom:"5px"}}  >
            <div className="row">
              <div id="" className="card-header bg-transparent bodrer-success  ">{item.name}<button id="title3"><p id="ct">{item.sys.country}</p></button></div>
              <p id="" >{item.main.temp} C°</p>
              <img id="" alt=""  style={{height:"60px",width:"auto",margin:"auto"}}  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
              <div id="" className="card-body text-dark ">{item.weather[0].description}</div>
            </div>
          </div>
          
        )
      })}
</div>

    </div>

  )
}
