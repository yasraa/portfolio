import React, { useState,useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './page1-main.css';
import QuizApp from './assets/quiz-2.png'
import FoodApp from './assets/food-2.png'
import NoteApp from './assets/note-3.png'
import EcomApp from './assets/ecom-2.png'
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);
const Projects = ({scrollContainer}) => {
 const [activeDiv, setActiveDiv] = useState(1);
const typeRef = useRef();
 useGSAP(() => {
    if (!scrollContainer?.current) return;

    gsap.from(typeRef.current, {
      opacity: 0,
      y: 40,
      duration: 2,
      scrollTrigger: {
        trigger: typeRef.current,
        scroller: scrollContainer.current, // 👈 use the actual DOM element
        start: "top 80%",
        toggleActions: "play none none none",
       
      }
    });
  }, [scrollContainer]);



  return (
    <div name="projects" className='project' id="section3"  ref={typeRef}>
    <h1 className='proj-main-headin'>Recent Projects</h1>

      <div className="proj-container">
        <div
          className="proj-slider"
          style={{
            transform: `translateX(${activeDiv === 1 ? "0" : "-50%"})`,
          }}
        >
          <div className="proj-slide">
           <div className="proj-ainer">
           
    <div className="proj-box">
      <div className="proj-img" style={{ backgroundImage: `url(${NoteApp})`,
      backgroundSize: 'cover',
    backgroundPosition: 'center', } }>
      <div className="project-card-btn"> <a href="https://react-inote-app.netlify.app">Visit now</a><a href="https://github.com/yasraa/react-notes-app-main">source code</a></div>
    </div>
      <div className="proj-box-main-content">
        <h3 className='proj-name'>React Note App</h3>
        <p className='proj-desc'>A personal productivity tool for managing notes. Users can create, delete, and archive notes with a clean, responsive UI.</p>
        <div className="proj-labels">
          <label >React</label> <label >CSS</label><label >JavaScript</label>
        </div>
      </div>
    </div> 
    <div className="proj-box">
      <div className="proj-img" style={{ backgroundImage: `url(${EcomApp})`,
      backgroundSize: 'cover',
    backgroundPosition: 'center', } }>
      <div className="project-card-btn"> <a href="https://aroneshop.netlify.app">Visit now</a><a href="https://github.com/yasraa/ecommerce-website">source code</a></div>
    </div>
      <div className="proj-box-main-content">
        <h3 className='proj-name'>E-commerce Website</h3>
        <p className='proj-desc'>A fully responsive e-commerce frontend with user-friendly popups, dropdowns, and search functionalities. Ideal for product showcasing or online stores.</p>
        <div className="proj-labels">
          <label>HTML</label>   <label>CSS</label>   <label>JavaScript</label>
        </div>
      </div>
    </div> 
            </div>
          </div>


            <div className="proj-slide">
            <div className="proj-ainer">


            <div className="proj-box">
      <div className="proj-img"
      style={{ backgroundImage: `url(${QuizApp})`,
      backgroundSize: 'cover',
    backgroundPosition: 'center', } }>
      <div className="project-card-btn"> <a href="https://bertquiz.vercel.app/register">Visit now</a><a href="https://github.com/yasraa/quiz-master">source code</a></div>
      </div>
      <div className="proj-box-main-content">
        <h3 className='proj-name'>React Quiz App</h3>
        <p className='proj-desc'>An interactive quiz app with user auth, quiz type/difficulty selection, timer-based questions, and instant feedback — built with Firebase and Zustand.</p>
        <div className="proj-labels">
          <label >React</label><label > Firebase Auth</label><label > React Router DOM</label><br /> <label >Tailwind CSS,</label>
          <label >Day.js</label><label > Framer Motion</label>
        </div>
      </div>
    </div>
     <div className="proj-box">
      <div className="proj-img" style={{ backgroundImage: `url(${FoodApp})`,
      backgroundSize: 'cover',
    backgroundPosition: 'center', } }>
      <div className="project-card-btn"> <a href="https://mern-stack-restaurant-reservation.vercel.app">Visit now</a><a href="https://github.com/yasraa/MERN_STACK_RESTAURANT_RESERVATION-main">source code</a></div>
    </div>
      <div className="proj-box-main-content">
        <h3 className='proj-name'>Restaurant Reservation App</h3>
        <p className='proj-desc'>A full-stack restaurant reservation system allowing users to explore menu options and reserve tables. Features an animated sliding navbar and seamless form handling backed by a MongoDB database.</p>
        <div className="proj-labels">
          <label>React (Vite)</label> <label> Node.js</label> <label> Form Handling</label> <label> React Router DOM</label> <label>MongoDB</label>
        </div>
      </div>
    </div>
            </div>




          </div>
        </div>
      </div>

 <div className="proj-button-container">
        <div className="proj-jjk">
        <button onClick={() => setActiveDiv(1)} 
          >
            <BsArrowLeft className='arrows'/>
          </button>
        <button onClick={() => setActiveDiv(2)}     
          >
         <BsArrowRight className='arrows' />
          </button>
          </div>
      </div>


    </div>
  );
};

export default Projects;
