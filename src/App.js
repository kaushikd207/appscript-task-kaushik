import "./App.css";
import Header from "./components/Header";
import ProductBody from "./components/ProductBody";
import FilterSection from "./components/FilterSection";
import AccordionUsage from "./components/AccordionUsage";
import { useState } from "react";
function App() {
  const [showFilter, setShowFilter] = useState(true);
  const handleButton = () => {
    setShowFilter(!showFilter);
  };
  return (
    <>
      <Header />
      <ProductBody />
      {showFilter ? (
        <>
          {" "}
          <div className="accordion">
            <AccordionUsage />
          </div>
        </>
      ) : null}
      <FilterSection
        handleButton={handleButton}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
      />

      <div className="footer">
        <div className="boxFooter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign Up for updates from metta muse</p>
          <div className="searchBox">
            <input></input>
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="boxFooter">
          <h3>CONTACT US</h3>
          <p>+44 221 52252</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p>+USD</p>
        </div>
      </div>
    </>
  );
}

export default App;
