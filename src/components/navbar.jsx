
import React, { useState } from "react";
import "./navbar.css";
import hamImg from "./assets/menu.png";
import crossImg from "./assets/cross.png";

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSidebar = () => {
    setIsSidebarVisible(true);
  };

  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };

  const scrollToSection = (sectionId) => {
    const container = document.getElementById("scrollableDiv");
    const target = document.getElementById(sectionId);

    if (container && target) {
      const start = container.scrollTop;
      const end = target.offsetTop - container.offsetTop;
      const duration = 1000; // duration in milliseconds
      const startTime = performance.now();

      const smoothScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // cap progress at 1
        const easeInOutQuad =
          progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2; // easing function
        container.scrollTop = start + (end - start) * easeInOutQuad;

        if (elapsed < duration) {
          requestAnimationFrame(smoothScroll);
        }
      };

      requestAnimationFrame(smoothScroll);
    }
  };

  return (
    <div >
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <button onClick={() => scrollToSection("section1")}>About me</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("section2")}>Tech Stack</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("section3")}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("section4")}>Services</button>
          </li>
        </ul>

        <button className="btn-nav" onClick={() => scrollToSection("section5")}>
          Let's talk
        </button>
      </nav>
       <button className="btn-nav" onClick={() => scrollToSection("section5")}>
          Let's talk
        </button>
              <div className={`side-bar ${isSidebarVisible ? "active" : ""}`}>
          <button onClick={hideSidebar} className="close-btn">
            <img src={crossImg} alt="Close" />
          </button>
          <ul>
            <li>
              <button onClick={() => scrollToSection("section1")}>About me</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("section2")}>Experience</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("section3")}>Projects</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("section4")}>Reviews</button>
            </li>
          </ul>
        </div>

        {/* Hamburger icon */}
        <div onClick={showSidebar} className="ham-img">
          <img src={hamImg} alt="Menu" width={30} />
        </div>
    </div>
  );
};

export default Navbar; 