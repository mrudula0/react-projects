import React, { useEffect, useRef, useState } from 'react';
import './style.css';  // Assuming your CSS is in this file

const initialValue = new Array(5).fill('');

const OtpInput = () => {
  const [inputVal, setInputVal] = useState(initialValue);
  const inpRef = useRef([]); // Array to store references of inputs

  const handleInput = (value, index) => {
    const updateValue = value.trim();
    if (isNaN(updateValue)) return; // Allow only numeric input
    const newArr = [...inputVal];
    newArr[index] = updateValue.slice(-1); // Only take the last character if input exceeds
    setInputVal(newArr);
    
    // Move focus to the next input if input is valid
    if (updateValue && inpRef.current[index + 1]) {
      inpRef.current[index + 1].focus();
    }
  };

  useEffect(() => {
    inpRef.current[0]?.focus(); // Focus the first input when the component mounts
  }, []);

  return (
    <div className="otp-box">
      {inputVal.map((inp, index) => (
        <input
          key={index} // Add a key for list rendering
          className="input"
          value={inp}
          onChange={(e) => handleInput(e.target.value, index)}
          ref={(el) => inpRef.current[index] = el} // Assign ref correctly
        />
      ))}
    </div>
  );
};

export default OtpInput;
