import banar from "../../assets/banner-main.png";
import PropTypes from "prop-types";
const Banar = ({ hendleAddCoin }) => {
  return (
    <div>
      <div className="bg text-white  bg-[#050506] h-[600px] w-11/12 mx-auto flex flex-col items-center py-16 px-44 rounded-r-xl relative top-40">
        <div className="mb-6">
          <img src={banar} alt="" />
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-2xl font-semibold mb-6">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border-2 p-2 rounded-2xl border-[#E7FE29]">
          <button
            onClick={() => hendleAddCoin(5000000)}
            className="btn p-3 text-black bg-[#E7FE29] font-bold rounded-xl"
          >
            Clime Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};
Banar.propTypes = {
  hendleAddCoin: PropTypes.func,
};
export default Banar;
