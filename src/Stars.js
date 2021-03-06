import React, { useState } from "react";
import './Stars.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        
        if (!rating){
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
        }
        else return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
          >
            <span className="star">&#9733;</span>
          </button>
        )
      })}
    </div>
  );
};

export default StarRating;