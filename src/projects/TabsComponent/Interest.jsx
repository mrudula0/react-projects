import React from "react";
import { ErrorMessage } from "./Profile";

function Interest({ data, setData, errors }) {
  const { interests } = data;
  const handleChange =(e) => {
    const {value, checked} = e.target;
    console.log("change:::", value, checked)
    setData(prev => ({
        ...prev,
        interests:  checked ? [...prev.interests, value]: prev.interests.filter(intrst => intrst !== value)
    }))
  }
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={interests.includes("Coding")}
            value="Coding"
            onChange={handleChange}
          />
          Coding
        </label>
          
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={interests.includes("Music")}
            value="Music"
            onChange={handleChange}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={interests.includes("Roaming")}
            value="Roaming"
            onChange={handleChange}
          />
          Roaming
        </label>
      </div>
      <ErrorMessage message={errors["interests"]} />
    </div>
  );
}

export default Interest;
