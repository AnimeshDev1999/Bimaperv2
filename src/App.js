import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Bimaper from "./components/Bimaper";
import OurSpace from "./components/OurSpace";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");
  const activePage = (e) => {
    e.stopPropagation();
    setPage(e.target.dataset.value);
  };

  return (
    <div className="app-base">
      <NavBar func={[activePage, setPage, page]}></NavBar>
      {page === "Home" ? (
        <Home></Home>
      ) : page === "BIMAPER" ? (
        <Bimaper></Bimaper>
      ) : page === "Our Space" ? (
        <OurSpace></OurSpace>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
