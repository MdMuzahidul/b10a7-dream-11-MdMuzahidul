import { useState } from "react";
import "./App.css";
import Banar from "./Component/Banar/Banar";
import Header from "./Component/Header/Header";
import Players from "./Component/Players/Players";
import Footer from "./Component/Footer/Footer";

// toastify
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookMarks from "./Component/Bookmarks/BookMarks";

function App() {
  // all state
  const [coin, setCoin] = useState(0);
  const [playerLists, setPlayerLists] = useState([]);
  const [isActive, setIsActive] = useState(true);

  // all function
  const showToast = (message, options = {}) => {
    toast(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      ...options,
    });
  };
  const hendleAddCoin = (addCoin) => {
    const newCoin = coin + addCoin;
    setCoin(newCoin);
    showToast("Credit Added to your Account", { type: "success" });
  };

  const HendleAddPlayer = (selectPlayer) => {
    const isExist = playerLists.find((item) => item.id === selectPlayer.id);
    if (isExist) {
      showToast("Player already selected", { type: "warning" });
    } else if (coin < selectPlayer.price) {
      showToast("Not enought money to but this player.Claim some Credit", {
        type: "error",
      });
    } else if (playerLists.length >= 6) {
      showToast("player limite is exist", { type: "error" });
    } else {
      const newPlayerLists = [...playerLists, selectPlayer];
      setPlayerLists(newPlayerLists);
      const newCoin = coin - selectPlayer.price;
      setCoin(newCoin);
      showToast(`Congrates!! ${selectPlayer.name} is now in your squad`, {
        type: "success",
      });
    }
  };

  const hendleDeletePlayer = (player) => {
    const newPlayerLists = playerLists.filter(
      (bookMark) => bookMark.id !== player.id
    );
    setPlayerLists(newPlayerLists);
    const newCoin = coin + player.price;
    setCoin(newCoin);
    showToast("Player removed", { type: "warning" });
  };

  const istrue = () => {
    const newIsActive = true;
    setIsActive(newIsActive);
  };
  const isFalse = () => {
    const newIsActive = false;
    setIsActive(newIsActive);
  };

  return (
    <>
      <Header coin={coin}></Header>
      <Banar hendleAddCoin={hendleAddCoin}></Banar>

      <main className="w-11/12 mx-auto mt-24">
        <div className="flex justify-end items-center mb-8">
          <div className="mt-32">
            <button
              className={`border-t-2 border-l-2 border-b-2 py-4 px-8 rounded-l-2xl ${
                isActive ? "bg-[#E7FE29] font-bold" : ""
              } `}
              onClick={istrue}
            >
              Available
            </button>
            <button
              className={`border-2 py-4 px-8 rounded-r-2xl ${
                isActive ? "" : "bg-[#E7FE29] font-bold"
              } `}
              onClick={isFalse}
            >
              Selected({playerLists.length})
            </button>
          </div>
        </div>
        <div className={isActive ? "block" : "hidden"}>
          <Players HendleAddPlayer={HendleAddPlayer}></Players>
        </div>
        <div className={isActive ? "hidden" : "block"}>
          <BookMarks
            istrue={istrue}
            playerLists={playerLists}
            hendleDeletePlayer={hendleDeletePlayer}
          ></BookMarks>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>

      {/* toastify */}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
}

export default App;
