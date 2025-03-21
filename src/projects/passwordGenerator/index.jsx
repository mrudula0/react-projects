import React, { useState } from "react";
export default function PasswordGenerator(){
    const [randomVal,setRandomVal] = useState(0);
    const handleGenerate=()=>{
setRandomVal(Math.random())
    }
return(
    <>
    <button onClick={handleGenerate}>Generate</button>
    <h3>{randomVal}</h3>
    </>
)
}