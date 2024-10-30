import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
  const { players, setPlayers } = useState([]);
  // useEffect(() => {
  //   fetch("player.json")
  //     .then((res) => res.json())
  //     .then((data) => setPlayers(data));
  // }, []);
  return (
    <div>
      <h4>hi</h4>
      {players.map((player, idx) => (
        <Player key={idx} player={player}></Player>
      ))}
    </div>
  );
};

export default Players;
