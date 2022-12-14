import React, { useState } from "react";
import Nav from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="App">
      <Nav
        showAbout={() => setPageIndex(0)}
        showPortfolio={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
        showResume={() => setPageIndex(3)}
        currentPage={pageIndex}
      />

      {pageIndex === 0 ? (
        <About />
      ) : pageIndex === 1 ? (
        <Portfolio />
      ) : pageIndex === 2 ? (
        <Contact />
      ) : pageIndex === 3 ? (
        <Resume />
      ) : (
        <About />
      )}

      <Footer />
    </div>
  );
}

export default App;
