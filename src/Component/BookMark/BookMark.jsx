import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";

const BookMark = ({ bookMark, hendleDeletePlayer }) => {
  const { image, name, batting_style } = bookMark;
  return (
    <div className="flex justify-between items-center border-2 rounded-2xl p-8 my-6">
      <div className="flex items-center gap-4">
        <div className="w-[80px] h-[80px] items-center">
          <img className="rounded-2xl h-full" src={image} alt="" />
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p>{batting_style}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            hendleDeletePlayer(bookMark);
          }}
          className="text-3xl"
        >
          {" "}
          <RiDeleteBin6Line> </RiDeleteBin6Line>{" "}
        </button>
      </div>
    </div>
  );
};

BookMark.propTypes = {
  bookMark: PropTypes.object,
  hendleDeletePlayer: PropTypes.object,
  hendleAddPlayerMoney: PropTypes.object,
};
export default BookMark;
