import "./intro.css";

import { FaAward } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/me.jpeg'




const Intro = () => {


  const [isSticky, setIsSticky] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const aboutPosition = aboutRef.current.getBoundingClientRect();
      setIsSticky(aboutPosition.bottom <= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <section id="about" ref={aboutRef}>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
       
      <div className={`about__me`} >
          <div className={`about__me-image  ${isSticky ? 'sticky' : ''}`}>
           <img src={img} alt="Avi" /> 
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            1+ years experienced Front End Developer with hands-on experience in
            identifying web-based user interactions along with designing and
            implementing highly-responsive user interface components by
            deploying React concepts. Proficient in translating designs and
            wireframes into high-quality code, and writing application interface
            code via JavaScript and React JS workflows. Adept at monitoring and
            maintaining frontend performance and troubleshooting and debugging
            the same to bolster overall performance.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
