import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div>
      <p>
        {props.starwarsChars.map(char => (
          <Character character={char} key={char.id} />
        ))}
      </p>
    </div>
  );
};

export default CharacterList;
