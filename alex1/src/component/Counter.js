import React from "react";
import { useState } from "react"   ;
import "./Co.css";

const Fun1=()=>{

  var [counter,setCounter]=useState(" ");
  
  
  <p>{counter}</p>
  


  var datax=()=>{

      Fun1(counter)

  }

    return( 

      <>
      
        
  <form  onSubmit={datax}>
  <div className="card text-center container">
  <div className="card-header">
    NOTES 
  </div>
  <div className="card-body">
    <h5 className="card-title">{counter}</h5>

    <input className="card-text"  type="text"   value={counter} onChange={(x)=>{setCounter(x.target.value)}} />
    <button onClick={datax} className="btn btn-primary">Add Notes</button>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
</form>

        </>

    )
};



 export default Fun1;