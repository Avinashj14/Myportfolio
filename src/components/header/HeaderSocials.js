import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoLogoInstagram } from "react-icons/io";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/avinashjoshi14/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/avinashj14" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/avinash_j14/" target="_blank" rel="noreferrer" ><IoLogoInstagram /></a>
    </div>
  )
}

export default HeaderSocials