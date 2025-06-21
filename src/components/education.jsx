import React, { useState,useRef } from "react";
import './page1-main.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
import gsappimg from './assets/gsapp.png';

gsap.registerPlugin(ScrollTrigger);
console.log("ScrollTrigger loaded");
ScrollTrigger.defaults({ markers: true });
function Education({scrollContainer}) {
  const [activeDiv, setActiveDiv] = useState(1);
  const typeRef = useRef();
 useGSAP(() => {
  if (!scrollContainer?.current) return;

  setTimeout(() => {
    gsap.from(typeRef.current, {
      scrollTrigger: {
        trigger: typeRef.current,
        scroller: scrollContainer.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 0,
      y: 40,
      duration: 2,
    });
  }, 100); // wait a bit to ensure layout is ready
}, [scrollContainer]);


  const imageData = [
    { id: 1, url: htmlImg, title: "HTML", style: { width: '95%'}, per:'95%'},
    { id: 2, url: cssImg, title: "CSS" ,style: { width: '88%'}, per:'88%'},
    { id: 3, url: jsImg, title: "Javascript" ,style: { width: '75%'}, per:'75%'},
    { id: 4, url: bootstrapImg, title: "Bootstrap" ,style: { width: '87%'}, per:'87%'},
    { id: 5, url: reactImg, title: "React",style: { width: '75%'}, per:'75%' },
    { id: 6, url: wordpressImg, title: "Wordpress" ,style: { width: '90%'}, per:'90%'},
    { id: 7, url: tailwindImg, title: "Tailwind" ,style: { width: '80%'}, per:'80%'},
    { id: 8, url: gitImg, title: "Github" ,style: { width: '75%'}, per:'75%'},
  ];
  const twoimageData = [
    { id: 1, url: nodeimg, title: "Node JS", style: { width: '89%'}, per:'89%'},
    { id: 2, url: expressimg, title: "Express" ,style: { width: '85%'}, per:'85%'},
    { id: 3, url: mongodbimg, title: "Mongo DB" ,style: { width: '75%'}, per:'75%'},
   
   
  ];

  return (
    <div className="education" name="education" id="section2" ref={typeRef}>
      <div className="button-container">
        <h1>My Toolkit!</h1>
        <div className="jjk">
        <button onClick={() => setActiveDiv(1)}   style={{
             borderBottom: activeDiv === 1 ? "2px solid rgba(240, 210, 249, 1) " : "2px solid transparent",
            color: activeDiv === 1 ? "rgba(240, 210, 249, 1) " : "rgb(154, 201, 255)",
          }}>What I Craft With</button>
        <button onClick={() => setActiveDiv(2)}  style={{
            borderBottom: activeDiv === 2 ? "2px solid rgba(240, 210, 249, 1) " : "2px solid transparent",
            color: activeDiv === 2 ? "rgba(240, 210, 249, 1) " : "rgb(154, 201, 255)",
          }}>What Powers It</button>
          </div>
      </div>
      <div className="tech-para">
        <p>
          I build sleek, responsive websites using modern front-end and back-end tools. Here’s what I build with daily.
        </p>
      </div>

      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(${activeDiv === 1 ? "0" : "-50%"})`,
          }}
        >
          <div className="slide">
 <div className="responsive-heading-tech">
            What I Craft With!
          </div>


            <div className="ainer">
            {imageData.map((image) => (
              <div key={image.id} style={{
                display:"flex",
                justifyContent:"center"
              }}>
                <div className="kkj">
                <img src={image.url} alt={image.title} className="devimg" />
                <p>{image.title}</p>
                <div className="bar"><div className="prog-bar">
                <div className="main-progbar"
                          style={{
                            width: image.style.width, // Set width dynamically based on imageData
                          }}
                        ></div>
                  </div>
                  <div className="percentage">{image.per}</div></div>
                </div>
              </div>
            ))}
            </div>




          </div>
          <div className="slide">
            <div className="responsive-heading-tech2">
              What Powers It!
            </div>


           <div className="ainer">
            {twoimageData.map((image) => (
              <div key={image.id} style={{
                display:"flex",
                justifyContent:"center"
              }}>
                <div className="kkj">
                <img src={image.url} alt={image.title} className="devimg" />
                <p>{image.title}</p>
                <div className="bar"><div className="prog-bar">
                <div className="main-progbar"
                          style={{
                            width: image.style.width, // Set width dynamically based on imageData
                          }}
                        ></div>
                  </div>
                  <div className="percentage">{image.per}</div></div>
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
