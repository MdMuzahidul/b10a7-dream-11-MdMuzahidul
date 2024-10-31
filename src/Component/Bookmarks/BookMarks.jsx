import PropTypes from "prop-types";
import BookMark from "../Bookmark/BookMark";
const BookMarks = ({ playerLists, hendleDeletePlayer }) => {
  // console.log(playerLists);
  return (
    <div className="">
      {playerLists.map((bookMark) => (
        <BookMark
          key={bookMark.id}
          hendleDeletePlayer={hendleDeletePlayer}
          bookMark={bookMark}
        ></BookMark>
      ))}
    </div>
  );
};
BookMarks.propTypes = {
  playerLists: PropTypes.func,
  hendleDeletePlayer: PropTypes.func,
};
export default BookMarks;
