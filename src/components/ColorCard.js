import React from "react";
import './ColorCard.css'

const ColorCard = (props) => {
  return (
    <div className="card" style={{ backgroundColor: `${props.hex}` }}>
      <span className="hex-text">{props.hex}</span>
    </div>
  );
};

export default ColorCard;
