import React, { useEffect, useState } from 'react'
import './style.css';
const DigitalClock = () => {
    let timw = new Date().toLocaleTimeString();
    const [cTime,setCTime] = useState(timw);
const updateTym =()=>{
    let timw = new Date().toLocaleTimeString();
    setCTime(timw)

}
useEffect(()=>{
    setInterval(updateTym,1000)
},[])
  return (
    <div className="clock-container">
        <h1>{cTime}</h1>
    </div>
  )
}

export default DigitalClock