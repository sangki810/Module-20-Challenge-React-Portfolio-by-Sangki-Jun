import React, { useState } from 'react';
import Header from './components/pages/Header';
import Nav from './components/pages/Nav'
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/pages/Footer';

function App() {
  const [pageIndex, setPageIndex] = useState(0);
 
  return (
    <div className="App">
      <Header />
      
      <Nav 
        showAbout={() => setPageIndex(0)}
        showPortfolio={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
        showResume={() => setPageIndex(3)}
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
