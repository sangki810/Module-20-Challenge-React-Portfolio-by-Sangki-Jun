import React from 'react';

const Nav = ({showAbout, showPortfolio, showContact, showResume }) => {
    <div>
        <nav className="navbar">
            <li onClick={showAbout}>About</li>
            <li onClick={showPortfolio}>Portfolio</li>
            <li onClick={showContact}>Contact</li>
            <li onClick={showResume}>Resume</li>
        </nav>
    </div>
}

export default Nav;