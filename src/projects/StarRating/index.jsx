import React, { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [mouse, setMouse] = useState(0);
  const star = [1, 2, 3, 4, 5];

  function handleClick(value) {
    setRating(value);
  }

  function handleMouseOver(value) {
    setMouse(value);
  }

  function handleMouseOut() {
    setMouse(0);
  }

  return (
    <div>
      {star.map((item) => (
        <span
          key={item}
          onClick={() => handleClick(item)}
          onMouseOver={() => handleMouseOver(item)}
          onMouseOut={handleMouseOut}
          style={{
            cursor: "pointer",
            fontSize: "30px",
            color:
              item <= (mouse || rating) ? "#FFD700" : "#d3d3d3",
          }}
        >
          ★
        </span>
      ))}
      <p>Your rating: {rating}</p>
    </div>
  );
}

export default StarRating;
