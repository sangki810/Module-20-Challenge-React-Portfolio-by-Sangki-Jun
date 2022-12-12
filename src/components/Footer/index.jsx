import React from "react";

const handleGithubRedirect = () => {
  window.location = 'https://github.com/sangki810'
}

const handleLinkedInRedirect = () => {
  window.location = 'https://www.linkedin.com/in/sangki-jun-8a6a5310b/'
}

const handleTwitterRedirect = () => {
  window.location = 'https://twitter.com/sangki810'
}

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='d-flex justify-content-center'>
        <a className='btn text-light p-1' onClick={handleGithubRedirect}>GitHub</a>
        <span className='pt-1'>&#x2022;</span>
        <a className='btn text-light p-1' onClick={handleLinkedInRedirect}>LinkedIn</a>
        <span className='pt-1'>&#x2022;</span>
        <a className='btn text-light p-1' onClick={handleTwitterRedirect}>Twitter</a>
      </div>
      <p className="text-center">&copy; All rights reserved by Sangki B. Jun</p>
    </footer>
  );
};

export default Footer;
