import PropTypes from "prop-types";
import BookMark from "../Bookmark/BookMark";
const BookMarks = ({ playerLists, hendleDeletePlayer, istrue }) => {
  return (
    <div className=" mb-52">
      <h2 className="text-2xl font-bold mb-8">
        Selected Player({playerLists.length}/6)
      </h2>
      {playerLists.map((bookMark) => (
        <BookMark
          key={bookMark.id}
          hendleDeletePlayer={hendleDeletePlayer}
          bookMark={bookMark}
        ></BookMark>
      ))}
      <div className="border-2 p-2 rounded-2xl border-[#E7FE29] w-[186px]">
        <button
          onClick={istrue}
          className="btn p-3 text-black bg-[#E7FE29] font-bold rounded-xl"
        >
          Add More player
        </button>
      </div>
    </div>
  );
};
BookMarks.propTypes = {
  playerLists: PropTypes.func,
  hendleDeletePlayer: PropTypes.func,
  istrue: PropTypes.func,
};
export default BookMarks;
