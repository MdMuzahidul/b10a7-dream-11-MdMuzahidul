import { useState } from "react";
import { useEffect } from "react";
import Player from "../Player/Player";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-3xl">Available Players</h2>
        <div>
          <button className="border-t-2 border-l-2 border-b-2 py-4 px-8 rounded-l-2xl bg-[#E7FE29] font-bold">
            Available
          </button>
          <button className="border-2 py-4 px-8 rounded-r-2xl">
            Selected(0)
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player, idx) => (
          <Player key={idx} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
