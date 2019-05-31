import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div>
      {props.starwarsChars.map(char => <Character character={char} key={char.id} />)}
    </div>
  );
};

export default CharacterList;
