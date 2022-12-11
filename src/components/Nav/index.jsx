import React from 'react';

const Nav = ({ showAbout, showPortfolio, showContact, showResume }) => {
    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div>
                    <h1>Sangki B. Jun</h1>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <li className='btn text-light' onClick={showAbout}>About Me</li>
                    <li className='btn text-light' onClick={showPortfolio}>Portfolio</li>
                    <li className='btn text-light' onClick={showContact}>Contact</li>
                    <li className='btn text-light' onClick={showResume}>Resume</li>
                </nav>
                
            </div>
        </div>
    );
};

export default Nav;