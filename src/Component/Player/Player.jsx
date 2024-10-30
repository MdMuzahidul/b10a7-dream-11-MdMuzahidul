import PropTypes from "prop-types";
import { LuFlag } from "react-icons/lu";
const Player = ({ player }) => {
  const {
    image,
    name,
    country_name,
    player_category,
    rating,
    batting_style,
    price,
  } = player;
  return (
    <div className="border-2 p-6 rounded-2xl">
      <div className="mb-6">
        <img className="rounded-2xl" src={image} alt="" />
      </div>
      <div className="mb-4">
        <h3>{name}</h3>
      </div>
      <div className="flex justify-between items-center border-b-2 pb-4 mb-4">
        <p className="flex items-center gap-3">
          <LuFlag></LuFlag>
          {country_name}
        </p>
        <div className="border-2 py-2 px-4 rounded-lg">
          <p>{player_category}</p>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <p className="font-bold">Rating</p>
        <p>{rating}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p>Batting Style</p>
        <p>{batting_style}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>Price: ${price}</p>
        <button className="border-2 py-2 px-4 rounded-lg hover:bg-gray-100">Choose Player</button>
      </div>
    </div>
  );
};
Player.propTypes = {
  player: PropTypes.object,
};
export default Player;
