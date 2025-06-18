import React from 'react';
import './page1-main.css';

const Reviews = () => {
  return (
    <div name="reviews" className="review" id="section4">
      <div className="r-main">
        <div className="rhead">
        <h1>What I Can Do For You!</h1>
        </div>
        <div className="sides">
           <div className="box">
            <h2>Full-Stack Web Development</h2>
           
            <p>I build scalable, full-featured web applications using MongoDB, Express, React, and Node.js. From designing responsive frontends to implementing powerful backends, I create seamless digital experiences that drive results.</p>
          </div>
          <div className="box">
            <h2>API Development & Integration</h2>
            <p>I specialize in designing secure, RESTful APIs and integrating third-party services. Whether you're building a dashboard, an e-commerce app, or a real-time platform, I ensure smooth data flow and optimized performance.</p>
          </div>
          <div className="box">
            <h2> Security Best Practices</h2>
            <p>I prioritize application security by implementing features like JWT authentication, route protection, input validation, and hashed password storage with tools like bcrypt. I follow secure coding practices to protect your app from common vulnerabilities like XSS, CSRF, and injection attacks.</p>
          </div>
          <div className="box">
            <h2>Database Design & Management</h2>
            <p>With MongoDB as my go-to NoSQL database, I design clean, efficient data models and implement powerful queries that scale with your application's growth.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reviews;

