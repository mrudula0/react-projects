import React, { useState } from "react";
import "./style.css"
const Calculator = () => {
    const [result,setResult] = useState("");
  const handleInp = (e) => {
    setResult(result.concat(e.target.value))


  };
  const handleClear = () => {
setResult(" ")
  };
  const handleCalculate = () => {
    setResult(eval(result).toString())

  };
  return (
    <div className="cal"> 
        <input type="text" placeholder="0" value={result} id="inp" />
      <input type="button" value="9" className="btn" onClick={handleInp} />
      <input type="button" value="8" className="btn" onClick={handleInp} />
      <input type="button" value="7" className="btn" onClick={handleInp} />
      <input type="button" value="6" className="btn" onClick={handleInp} />
      <input type="button" value="5" className="btn" onClick={handleInp} />
      <input type="button" value="4" className="btn" onClick={handleInp} />
      <input type="button" value="3" className="btn" onClick={handleInp} />
      <input type="button" value="2" className="btn" onClick={handleInp} />
      <input type="button" value="1" className="btn" onClick={handleInp} />
      <input type="button" value="0" className="btn" onClick={handleInp} />
      <input type="button" value="." className="btn" onClick={handleInp} />
      <input type="button" value="+" className="btn" onClick={handleInp} />
      <input type="button" value="-" className="btn" onClick={handleInp} />
      <input type="button" value="*" className="btn" onClick={handleInp} />
      <input type="button" value="/" className="btn" onClick={handleInp} />
      <input type="button" value="%" className="btn" onClick={handleInp} />
      <input
        type="button"
        value="Clear"
        className="btn"
        onClick={handleClear}
      />
      <input
        type="button"
        value="="
        className="btn"
        onClick={handleCalculate}
      />
    </div>
  );
};

export default Calculator;
