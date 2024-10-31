import { useState } from "react";
import "./App.css";
import Banar from "./Component/Banar/Banar";
import Header from "./Component/Header/Header";
import Players from "./Component/Players/Players";
import Footer from "./Component/Footer/Footer";

// toastify
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [coin, setCoin] = useState(0);
  const hendleAddCoin = (addCoin) => {
    const newCoin = coin + addCoin;
    setCoin(newCoin);
    toast.success("coin is added successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <>
      <Header coin={coin}></Header>
      <Banar hendleAddCoin={hendleAddCoin}></Banar>
      <main className="w-11/12 mx-auto mt-24">
        <Players></Players>
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
