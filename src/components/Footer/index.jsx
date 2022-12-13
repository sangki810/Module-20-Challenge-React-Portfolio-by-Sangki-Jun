import React from "react";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='d-flex justify-content-center'>
        <a className='btn text-light p-1' href='https://github.com/sangki810'>GitHub</a>
        <span className='pt-1'>&#x2022;</span>
        <a className='btn text-light p-1' href='https://www.linkedin.com/in/sangki-jun-8a6a5310b/'>LinkedIn</a>
        <span className='pt-1'>&#x2022;</span>
        <a className='btn text-light p-1' href='https://twitter.com/sangki810'>Twitter</a>
      </div>
      <p className="text-center">&copy; All rights reserved by Sangki B. Jun</p>
    </footer>
  );
};

export default Footer;
