import React from "react";

const Nav = ({
  showAbout,
  showPortfolio,
  showContact,
  showResume,
  currentPage,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <div className="px-3">
        <h1 className="text-light">Sangki B. Jun</h1>
      </div>
      <div>
        <li
          className={
            currentPage == 0 ? "btn text-light active" : "btn text-light"
          }
          onClick={showAbout}
        >
          About Me
        </li>
        <li
          className={
            currentPage == 1 ? "btn text-light active" : "btn text-light"
          }
          onClick={showPortfolio}
        >
          Portfolio
        </li>
        <li
          className={
            currentPage == 2 ? "btn text-light active" : "btn text-light"
          }
          onClick={showContact}
        >
          Contact
        </li>
        <li
          className={
            currentPage == 3 ? "btn text-light active" : "btn text-light"
          }
          onClick={showResume}
        >
          Resume
        </li>
      </div>
    </nav>
  );
};

export default Nav;
