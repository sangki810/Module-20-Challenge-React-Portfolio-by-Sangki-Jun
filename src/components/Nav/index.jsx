import React from 'react';

const Nav = ({ showAbout, showPortfolio, showContact, showResume }) => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark justify-content-between'>
            <div>
                <h1 className=' text-light'>Sangki B. Jun</h1>
            </div>
            <div>
                <li className='btn text-light' onClick={showAbout}>About Me</li>
                <li className='btn text-light' onClick={showPortfolio}>Portfolio</li>
                <li className='btn text-light' onClick={showContact}>Contact</li>
                <li className='btn text-light' onClick={showResume}>Resume</li>
            </div>
        </nav>
    );
};

export default Nav;