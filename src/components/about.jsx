import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './page1-main.css';
import mycv from './assets/cv.pdf'

const About = () => {
  const typeRef = useRef();

  useGSAP(() => {
    const text = "I'm Yasra Kashif";
    typeRef.current.textContent = ''; // Clear initial text

    const tl = gsap.timeline();

    text.split("").forEach((char) => {
      tl.call(() => {
        typeRef.current.textContent += char;
      }, 0, '+=0.09'); // Delay between letters
    });
  }, []);

  return (
    <div className="about-me">
      <div id="section1" className='sect'>
        <h2 className="main-para">
        <div className="type-effect" ref={typeRef}></div>
          <br />
          <div className="for-space">
          MERN Stack Developer and <br /> Full-Stack Engineer
          </div>
        </h2>
        <p>
          I Build End-to-End Web Applications Using MongoDB, Express, React, and Node.js.
          I Specialize in Developing Scalable Backends and Interactive Frontends That Deliver Real Business Value.
          With a Passion for Clean Architecture, I Create Robust APIs, Seamless User Interfaces, and Responsive Designs.
        </p>
        <a href={mycv} download className="main-btn">Download Resume</a>
      </div>
    </div>
  );
};

export default About;
