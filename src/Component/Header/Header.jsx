import logo from "../../assets/logo.png";
import { TbCoinBitcoin } from "react-icons/tb";
import PropTypes from "prop-types";
const Header = ({ coin }) => {
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center pt-8 pb-6">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex  justify-between items-center space-x-4">
        <ul className="flex justify-between space-x-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fixture</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Schedules</a>
          </li>
        </ul>
        <div className="flex justify-between items-center font-semibold gap-2 border-2 py-4 px-5 rounded-xl">
          <p className="font-semibold">{coin} Coin </p>
          <TbCoinBitcoin />
        </div>
      </div>
    </div>
  );
};
Header.propTypes = {
  coin: PropTypes.number,
};

export default Header;
