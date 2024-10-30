import { useState } from "react";
import "./App.css";
import Banar from "./Component/Banar/Banar";
import Header from "./Component/Header/Header";
import Players from "./Component/Players/Players";
import Footer from "./Component/Footer/Footer";
function App() {
  const [coin, setCoin] = useState(0);
  const hendleAddCoin = (addCoin) => {
    const newCoin = coin + addCoin;
    setCoin(newCoin);
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
    </>
  );
}

export default App;
