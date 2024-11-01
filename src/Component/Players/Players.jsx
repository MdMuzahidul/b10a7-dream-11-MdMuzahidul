import { useState } from "react";
import { useEffect } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";

const Players = ({ HendleAddPlayer }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <h2 className="font-bold text-3xl mb-8">Available Players</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-52">
        {players.map((player, idx) => (
          <Player
            key={idx}
            HendleAddPlayer={HendleAddPlayer}
            player={player}
          ></Player>
        ))}
      </div>
    </div>
  );
};
Players.propTypes = {
  HendleAddPlayer: PropTypes.func,
};

export default Players;
