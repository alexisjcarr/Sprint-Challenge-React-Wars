import React from "react";
import "./StarWars.scss";

const Character = props => {
  return (
    <div className="character">
      <p>{props.character.name}</p>
    </div>
  );
};

export default Character;
