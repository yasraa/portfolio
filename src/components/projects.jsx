import React, { useState, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './page1-main.css';

import QuizApp from './assets/quiz-2.png';
import FoodApp from './assets/food-2.png';
import NoteApp from './assets/note-3.png';
import EcomApp from './assets/ecom-2.png';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ scrollContainer }) => {
  const [activeDiv, setActiveDiv] = useState(1);
  const sectionRef = useRef();

  useGSAP(() => {
    console.log("📦 Projects scrollContainer ref:", scrollContainer?.current);

    if (!scrollContainer?.current || !sectionRef.current) {
      console.warn("❌ scrollContainer or sectionRef is undefined.");
      return;
    }

    // Slight delay to allow layout to stabilize
    setTimeout(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainer.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 2,
      });
    }, 100);
  }, [scrollContainer]);

  return (
    <div name="projects" className='project' id="section3" ref={sectionRef}>
      <h1 className='proj-main-headin'>Recent Projects</h1>

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
              {/* Note App */}
              <div className="proj-box">
                <div
                  className="proj-img"
                  style={{
                    backgroundImage: `url(${NoteApp})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="project-card-btn">
                    <a href="https://react-inote-app.netlify.app" target='_blank'>Visit now</a>
                    <a href="https://github.com/yasraa/react-notes-app-main" target='_blank'>Source Code</a>
                  </div>
                </div>
                <div className="proj-box-main-content">
                  <h3 className='proj-name'>React Note App</h3>
                  <p className='proj-desc'>A personal productivity tool for managing notes. Users can create, delete, and archive notes with a clean, responsive UI.</p>
                  <div className="proj-labels">
                    <label>React</label> <label>CSS</label> <label>JavaScript</label>
                  </div>
                </div>
              </div>

              {/* E-commerce */}
              <div className="proj-box">
                <div
                  className="proj-img"
                  style={{
                    backgroundImage: `url(${EcomApp})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="project-card-btn">
                    <a href="https://aroneshop.netlify.app" target='_blank'>Visit now</a>
                    <a href="https://github.com/yasraa/ecommerce-website" target='_blank'>Source Code</a>
                  </div>
                </div>
                <div className="proj-box-main-content">
                  <h3 className='proj-name'>E-commerce Website</h3>
                  <p className='proj-desc'>A fully responsive e-commerce frontend with user-friendly popups, dropdowns, and search functionalities.</p>
                  <div className="proj-labels">
                    <label>HTML</label> <label>CSS</label> <label>JavaScript</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="proj-slide">
            <div className="proj-ainer">
              {/* Quiz App */}
              <div className="proj-box">
                <div
                  className="proj-img"
                  style={{
                    backgroundImage: `url(${QuizApp})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="project-card-btn">
                    <a href="https://bertquiz.vercel.app/register" target='_blank'>Visit now</a>
                    <a href="https://github.com/yasraa/quiz-master" target='_blank'>Source Code</a>
                  </div>
                </div>
                <div className="proj-box-main-content">
                  <h3 className='proj-name'>React Quiz App</h3>
                  <p className='proj-desc'>An interactive quiz app with auth, difficulty levels, timers, and feedback — powered by Firebase and Zustand.</p>
                  <div className="proj-labels">
                    <label>React</label> <label>Firebase</label> <label>Tailwind</label> <label>Zustand</label>
                  </div>
                </div>
              </div>

              {/* Restaurant App */}
              <div className="proj-box">
                <div
                  className="proj-img"
                  style={{
                    backgroundImage: `url(${FoodApp})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="project-card-btn">
                    <a href="https://mern-stack-restaurant-reservation.vercel.app" target='_blank'>Visit now</a>
                    <a href="https://github.com/yasraa/MERN_STACK_RESTAURANT_RESERVATION-main" target='_blank'>Source Code</a>
                  </div>
                </div>
                <div className="proj-box-main-content">
                  <h3 className='proj-name'>Restaurant Reservation App</h3>
                  <p className='proj-desc'>A full-stack restaurant reservation system with form handling and MongoDB integration.</p>
                  <div className="proj-labels">
                    <label>React</label> <label>Node.js</label> <label>MongoDB</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Buttons */}
      <div className="proj-button-container">
        <div className="proj-jjk">
          <button onClick={() => setActiveDiv(1)}>
            <BsArrowLeft className='arrows' />
          </button>
          <button onClick={() => setActiveDiv(2)}>
            <BsArrowRight className='arrows' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
