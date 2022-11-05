import React, { useState } from 'react';
import "./TicketCounter.scss";
import Employees from './Employees';


const TicketCounter = (props) => {
    const [count, setCount] = useState(0);
        

  return (

    <>
        <h3 className="count-title">Counter</h3>
        <div className="button-container">
        <button onClick={()=> setCount(count + 1)}>+</button>
        <div>{count}</div>
        <button onClick={()=> ((count>0) && setCount(count - 1))}>-</button>
        </div>
        
    </>
  )
}

export default TicketCounter



