
import React, { useRef, useState, useEffect } from "react";
import './page1-main.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import htmlImg from './assets/html.png';
import cssImg from './assets/css-3.png';
import jsImg from './assets/js.png';
import tailwindImg from './assets/tailwind.png';
import reactImg from './assets/react.png';
import wordpressImg from './assets/wordpress.png';
import bootstrapImg from './assets/bootstrap.png';
import gitImg from './assets/git.png';
import nodeimg from './assets/node.png';
import expressimg from './assets/express.png';
import mongodbimg from './assets/mongo.png';

gsap.registerPlugin(ScrollTrigger);

function Education({ scrollContainer }) {
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

  const imageData = [
    { id: 1, url: htmlImg, title: "HTML", style: { width: '95%' }, per: '95%' },
    { id: 2, url: cssImg, title: "CSS", style: { width: '88%' }, per: '88%' },
    { id: 3, url: jsImg, title: "Javascript", style: { width: '75%' }, per: '75%' },
    { id: 4, url: bootstrapImg, title: "Bootstrap", style: { width: '87%' }, per: '87%' },
    { id: 5, url: reactImg, title: "React", style: { width: '75%' }, per: '75%' },
    { id: 6, url: wordpressImg, title: "Wordpress", style: { width: '90%' }, per: '90%' },
    { id: 7, url: tailwindImg, title: "Tailwind", style: { width: '80%' }, per: '80%' },
    { id: 8, url: gitImg, title: "Github", style: { width: '75%' }, per: '75%' },
  ];

  const backendStack = [
    { id: 1, url: nodeimg, title: "Node JS", style: { width: '89%' }, per: '89%' },
    { id: 2, url: expressimg, title: "Express", style: { width: '85%' }, per: '85%' },
    { id: 3, url: mongodbimg, title: "Mongo DB", style: { width: '75%' }, per: '75%' },
  ];

  return (
    <div className="education" id="section2" ref={sectionRef}>
      <div className="button-container">
        <h1>My Toolkit!</h1>
        <div className="jjk">
          <button onClick={() => setActiveDiv(1)}
            style={{
              borderBottom: activeDiv === 1 ? "2px solid rgba(240, 210, 249, 1)" : "2px solid transparent",
              color: activeDiv === 1 ? "rgba(240, 210, 249, 1)" : "rgb(154, 201, 255)",
            }}>
            What I Craft With
          </button>
          <button onClick={() => setActiveDiv(2)}
            style={{
              borderBottom: activeDiv === 2 ? "2px solid rgba(240, 210, 249, 1)" : "2px solid transparent",
              color: activeDiv === 2 ? "rgba(240, 210, 249, 1)" : "rgb(154, 201, 255)",
            }}>
            What Powers It
          </button>
        </div>
      </div>

      <div className="tech-para">
        <p>I build sleek, responsive websites using modern front-end and back-end tools. Here’s what I build with daily.</p>
      </div>

      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(${activeDiv === 1 ? "0" : "-50%"})` }}>
          <div className="slide">
            <div className="responsive-heading-tech">What I Craft With!</div>
            <div className="ainer">
              {imageData.map(img => (
                <div key={img.id} style={{ display: "flex", justifyContent: "center" }}>
                  <div className="kkj">
                    <img src={img.url} alt={img.title} className="devimg" />
                    <p>{img.title}</p>
                    <div className="bar">
                      <div className="prog-bar">
                        <div className="main-progbar" style={{ width: img.style.width }}></div>
                      </div>
                      <div className="percentage">{img.per}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slide">
            <div className="responsive-heading-tech2">What Powers It!</div>
            <div className="ainer">
              {backendStack.map(img => (
                <div key={img.id} style={{ display: "flex", justifyContent: "center" }}>
                  <div className="kkj">
                    <img src={img.url} alt={img.title} className="devimg" />
                    <p>{img.title}</p>
                    <div className="bar">
                      <div className="prog-bar">
                        <div className="main-progbar" style={{ width: img.style.width }}></div>
                      </div>
                      <div className="percentage">{img.per}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;
