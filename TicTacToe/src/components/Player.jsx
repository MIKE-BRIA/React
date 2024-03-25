import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleInputChange(e) {
    console.log(e);
    setPlayerName(e.target.value);
  }

  let btnCaption = "Edit";

  if (isEditing) {
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            value={playerName}
            required
            onChange={handleInputChange}
          ></input>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
