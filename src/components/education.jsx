import React, { useState, useRef, useEffect } from "react";
import "./page1-main.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Asset imports
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
ScrollTrigger.defaults({ markers: false });

function Education({ scrollContainer }) {
  const [activeDiv, setActiveDiv] = useState(1);
  const sectionRef = useRef();

  useGSAP(() => {
    if (!scrollContainer?.current || !sectionRef?.current) {
      console.warn("❌ scrollContainer or sectionRef is undefined.");
      return;
    }

    ScrollTrigger.scrollerProxy(scrollContainer.current, {
      scrollTop(value) {
        if (arguments.length) {
          scrollContainer.current.scrollTop = value;
        }
        return scrollContainer.current.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollContainer.current.style.transform ? "transform" : "fixed",
    });

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          scroller: scrollContainer.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [scrollContainer]);

  const frontEnd = [
    { id: 1, url: htmlImg, title: "HTML", style: { width: '95%' }, per: '95%' },
    { id: 2, url: cssImg, title: "CSS", style: { width: '88%' }, per: '88%' },
    { id: 3, url: jsImg, title: "JavaScript", style: { width: '75%' }, per: '75%' },
    { id: 4, url: bootstrapImg, title: "Bootstrap", style: { width: '87%' }, per: '87%' },
    { id: 5, url: reactImg, title: "React", style: { width: '75%' }, per: '75%' },
    { id: 6, url: wordpressImg, title: "WordPress", style: { width: '90%' }, per: '90%' },
    { id: 7, url: tailwindImg, title: "Tailwind", style: { width: '80%' }, per: '80%' },
    { id: 8, url: gitImg, title: "GitHub", style: { width: '75%' }, per: '75%' },
  ];

  const backend = [
    { id: 1, url: nodeimg, title: "Node JS", style: { width: '89%' }, per: '89%' },
    { id: 2, url: expressimg, title: "Express", style: { width: '85%' }, per: '85%' },
    { id: 3, url: mongodbimg, title: "Mongo DB", style: { width: '75%' }, per: '75%' },
  ];

  return (
    <div className="education" id="section2" ref={sectionRef}>
      <div className="button-container">
        <h1>My Toolkit!</h1>
        <div className="jjk">
          <button
            onClick={() => setActiveDiv(1)}
            style={{
              borderBottom: activeDiv === 1 ? "2px solid #f0d2f9" : "2px solid transparent",
              color: activeDiv === 1 ? "#f0d2f9" : "#9ac9ff",
            }}
          >
            What I Craft With
          </button>
          <button
            onClick={() => setActiveDiv(2)}
            style={{
              borderBottom: activeDiv === 2 ? "2px solid #f0d2f9" : "2px solid transparent",
              color: activeDiv === 2 ? "#f0d2f9" : "#9ac9ff",
            }}
          >
            What Powers It
          </button>
        </div>
      </div>

      <div className="tech-para">
        <p>I build sleek, responsive websites using modern front-end and back-end tools. Here’s what I work with daily.</p>
      </div>

      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(${activeDiv === 1 ? "0" : "-50%"})`,
          }}
        >
          {/* Frontend Slide */}
          <div className="slide">
            <div className="responsive-heading-tech">What I Craft With!</div>
            <div className="ainer">
              {frontEnd.map((tech) => (
                <div key={tech.id} className="kkj-wrapper">
                  <div className="kkj">
                    <img src={tech.url} alt={tech.title} className="devimg" />
                    <p>{tech.title}</p>
                    <div className="bar">
                      <div className="prog-bar">
                        <div className="main-progbar" style={tech.style}></div>
                      </div>
                      <div className="percentage">{tech.per}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Slide */}
          <div className="slide">
            <div className="responsive-heading-tech2">What Powers It!</div>
            <div className="ainer">
              {backend.map((tech) => (
                <div key={tech.id} className="kkj-wrapper">
                  <div className="kkj">
                    <img src={tech.url} alt={tech.title} className="devimg" />
                    <p>{tech.title}</p>
                    <div className="bar">
                      <div className="prog-bar">
                        <div className="main-progbar" style={tech.style}></div>
                      </div>
                      <div className="percentage">{tech.per}</div>
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
