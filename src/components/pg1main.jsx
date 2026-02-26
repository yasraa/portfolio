
import React, { useState, useRef } from "react";
import './page1-main.css'
import Navbar from './navbar'
import Education from './education'
import Projects from './projects'
import About from './about'
import Reviews from './reviews'
import Contact from "./contact";
import Card from "./card.jsx";

const pg1main = () => {
  const scrollRef = useRef();

  return (
    <div>
      <div id="scrollableDiv" className="onm" ref={scrollRef}
        style={{
          height: "100vh",
          overflowY: "auto",
          position: "relative",
          backgroundColor: "#222222c7",
        }}>

        <Navbar />
        <div className="hiddencard">
          <Card />
        </div>
        <About />

        <Education scrollContainer={scrollRef} />

        <Projects scrollContainer={scrollRef} />

        <Reviews scrollContainer={scrollRef} />
        <Contact />
      </div>
    </div>

    // </div>





  )
}

export default pg1main

