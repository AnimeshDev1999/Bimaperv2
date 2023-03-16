import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Bimaper from "./components/Bimaper";
import OurSpace from "./components/OurSpace";
import OurMethod from "./components/OurMethod";
import OurCapability from "./components/OurCapability";
import OurCreation from "./components/OurCreation";
import ExplainMe from "./components/ExplainMe";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");
  const activePage = (e) => {
    e.stopPropagation();
    setPage(e.target.dataset.value);
  };
  const activePageIco = (e) => {
    setPage(e.target.dataset.value);
  };

  return (
    <div className="app-base">
      <NavBar func={[activePage, setPage, page, activePageIco]}></NavBar>
      {page === "Home" ? (
        <Home></Home>
      ) : page === "BIMAPER" ? (
        <Bimaper></Bimaper>
      ) : page === "Our Space" ? (
        <OurSpace></OurSpace>
      ) : page === "Our Method" ? (
        <OurMethod></OurMethod>
      ) : page === "Our Capability" ? (
        <OurCapability></OurCapability>
      ) : page === "Our Creation" ? (
        <OurCreation></OurCreation>
      ) : page === "Explain Me" ? (
        <ExplainMe></ExplainMe>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
