import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Avinash Joshi</a>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/avinashjoshi14/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/avinashj14" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ChintuCoder 2024. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer