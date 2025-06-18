import React from 'react'
import './card.css'
import CardImg from './assets/card.png';
import LinkedInIcon from './assets/linkedin.png';
import GitHubIcon from './assets/github-sign.png';
import EmailIcon from './assets/email1pro.png';
import UpworIcon from './assets/upwork.png';
const Card = () => {
  return (
    <div>
      <div className="sidesticky">
      <div className="cardm">
      <h1 className ="name">Yasra <br /> Kashif</h1>
      <img src={CardImg} alt="Card" />

        <div className="abt-me">
       <h4 className='h-4'>What i do!</h4> 
         <p className='f-d'>MERN Developer</p> <p className='u-d'>UI/UX Designer</p>
        <h5 className='h-5'>Location</h5>
        <p className='c-d'>Karachi, Pakistan.</p>
        </div>

        <div className="social-link">
            <ul>
            <a href="https://github.com/yasraa" target="_blank"><div style={{
    width: '30px',
    height: '30px',
    backgroundImage: `url(${GitHubIcon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }} /></a>
               <a href="https://www.linkedin.com/in/yasra-raheel-8a3043325/"><div style={{
    width: '30px',
    height: '30px',
    backgroundImage: `url(${LinkedInIcon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }} /></a>
             <a href="https://www.upwork.com/freelancers/~012232c5e1d2fd599d?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~012232c5e1d2fd599d%2Fprofile"><div style={{
    width: '30px',
    height: '30px',
    backgroundImage: `url(${UpworIcon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }} /></a>
                    <a href="mailto:yyasrakashif@gmail.com"><div style={{
    width: '30px',
    height: '30px',
    backgroundImage: `url(${EmailIcon})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }} /></a>
            </ul>        
      </div>
      <a className="btn-card">Lets Work Together!</a>
    </div>
    </div>
    </div>
  )
}

export default Card
