import React from "react";
import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit'

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );

    //  btnCaption='Save'
  }

  return (
    <div>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </div>
  );
};

export default Player;

// In React cand actualizam state ul pe baza valorii anterioare acelui state,
// trebuie sa transmit o functie catre state ul de actualizare(updating sate),
// acela care incepe mereu cu set. Aceasta schimba state ul instant ,daca folosim
//de exemplu setIsEditing(!editing)-nu se schimba state ul imediat,ci React
//programeaza schimbarea state ului si cu ajutorul functiei React garanteaza ca
//lucrez cu valoarea state ului actualizata
