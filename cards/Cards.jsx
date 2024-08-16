import React from 'react'


export default function Cards({info,setInfo}) {
 return (

 <div className='info'>
  <div className="card text-bg-dark mb-3" >
  <div id="sehir" className="card-header">{info.name}</div>
  <div id="logo" className="card-body">
    <h5 id="hissedilen "className="card-title">Dark card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      
    </div>
  )
}
