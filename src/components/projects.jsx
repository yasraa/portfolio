import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './page1-main.css';

import Velmure from './assets/velmure.png';
import FoodApp from './assets/food-2.png';
import NoteApp from './assets/note-3.png';
import EcomApp from './assets/ecom-2.png';

import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ scrollContainer }) => {
  const [activeDiv, setActiveDiv] = useState(1);
  const sectionRef = useRef();

 useEffect(() => {
    if (!scrollContainer?.current || !sectionRef.current) {
      console.warn("❌ scrollContainer or sectionRef is undefined.");
      return;
    }

    // Defer animation until DOM is fully rendered
    setTimeout(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainer.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          // markers: true, // Enable only for debugging
        }
      });
    }, 200);
  }, [scrollContainer]);

  return (
    <div className="project" id="section3" ref={sectionRef}>
      <h1 className="proj-main-headin">Recent Projects</h1>

      <div className="proj-container">
        <div
          className="proj-slider"
          style={{
            transform: `translateX(${activeDiv === 1 ? "0" : "-50%"})`,
          }}
        >
          {/* Slide 1 */}
          <div className="proj-slide">
            <div className="proj-ainer">
              <ProjectCard
                img={NoteApp}
                name="React Note App"
                desc="A clean note-taking app with add, delete, and archive functionality. Fully responsive UI."
                tech={['React', 'CSS', 'JavaScript']}
                visit="https://react-inote-app.netlify.app"
                code="https://github.com/yasraa/react-notes-app-main"
              />
              <ProjectCard
                img={Velmure}
                name="Velmure"
                desc="Built Velmure, a full-stack MERN eCommerce app with authentication, admin product management, and responsive UI using Tailwind CSS and Multer."
                tech={['React', 'Firebase', 'Tailwind', 'Framer Motion']}
                visit="https://frontend-nine-sooty-89.vercel.app/"
                code="https://github.com/yasraa/velmure"
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="proj-slide">
            <div className="proj-ainer">
             <ProjectCard
                img={EcomApp}
                name="E-commerce Website"
                desc="An e-commerce frontend with modals, dropdowns, and search bar. Perfect for showcasing products."
                tech={['HTML', 'CSS', 'JavaScript']}
                visit="https://aroneshop.netlify.app"
                code="https://github.com/yasraa/ecommerce-website"
              />
              <ProjectCard
                img={FoodApp}
                name="Restaurant Reservation App"
                desc="MERN stack app for booking tables and viewing menu. Includes animated nav and form validation."
                tech={['React', 'Node.js', 'MongoDB']}
                visit="https://mern-stack-restaurant-reservation.vercel.app"
                code="https://github.com/yasraa/MERN_STACK_RESTAURANT_RESERVATION-main"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="proj-button-container">
        <div className="proj-jjk">
          <button onClick={() => setActiveDiv(1)}>
            <BsArrowLeft className="arrows" />
          </button>
          <button onClick={() => setActiveDiv(2)}>
            <BsArrowRight className="arrows" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ProjectCard component
const ProjectCard = ({ img, name, desc, tech, visit, code }) => (
  <div className="proj-box">
    <div
      className="proj-img"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="project-card-btn">
        <a href={visit} target="_blank" rel="noreferrer">Visit now</a>
        <a href={code} target="_blank" rel="noreferrer">Source code</a>
      </div>
    </div>
    <div className="proj-box-main-content">
      <h3 className="proj-name">{name}</h3>
      <p className="proj-desc">{desc}</p>
      <div className="proj-labels">
        {tech.map((t, index) => (
          <label key={index}>{t}</label>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
