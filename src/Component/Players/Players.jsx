import { useState } from "react";
import { useEffect } from "react";
import Player from "../Player/Player";
import BookMarks from "../Bookmarks/BookMarks";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [playerLists, setPlayerLists] = useState([]);
  const [isDisable, setDisable] = useState(false);

  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  const HendleAddPlayer = (selectPlayer) => {
    const newPlayerLists = [...playerLists, selectPlayer];
    setPlayerLists(newPlayerLists);
    setDisable(true);
  };
  const hendleDeletePlayer = (player) => {
    const newPlayerLists = playerLists.filter(
      (bookMark) => bookMark.id !== player
    );
    setPlayerLists(newPlayerLists);
    setDisable(false);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-3xl">Available Players</h2>
        <div>
          <button className="border-t-2 border-l-2 border-b-2 py-4 px-8 rounded-l-2xl bg-[#E7FE29] font-bold">
            Available
          </button>
          <button className="border-2 py-4 px-8 rounded-r-2xl">
            Selected({playerLists.length})
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player, idx) => (
          <Player
            key={idx}
            HendleAddPlayer={HendleAddPlayer}
            isDisable={isDisable}
            player={player}
          ></Player>
        ))}
      </div>
      <div>
        <BookMarks
          hendleDeletePlayer={hendleDeletePlayer}
          playerLists={playerLists}
        ></BookMarks>
      </div>
    </div>
  );
};

export default Players;
