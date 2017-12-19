import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.removeChar(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default CharacterCard;
