import React from 'react';
import './hero.css';
import logo from '../../assets/logo.png';
import img from '../../assets/img.png';
import { LuContactRound, LuDownload, LuFacebook, LuGithub, LuInstagram, LuLinkedin, LuYoutube } from "react-icons/lu";
import { Link } from 'react-router';


const Hero = () => {
  return (
    <>

      <div className="maindiv">
        <div className="text">
          <h1 className="hero-title">
            Hi👋, I'm
            <p className="name">Tauseef Ahmad</p>
          </h1>
          <p className="hero-description">Frontend Developer | QA Automation</p>
          <p className='details'> Experienced in both <strong>Frontend Development</strong> and <strong>QA Automation</strong> with a strong foundation in Java, JavaScript, and React. Skilled in building and testing web applications using Selenium WebDriver, TestNG, and the Page Object Model (POM) framework.</p>
          <div className='btn'>
            <a href="#contact" className=' hbtn'><LuContactRound className='dwn' />Contact me</a>
            {/* <button className=' hbtn'><LuContactRound className='dwn' />Contact me</button> */}
            <button className=' hbtn'><LuDownload className='dwn' />Download CV</button>
          </div>
          <div className='social'>
            <Link className='' to="/"><LuYoutube className='dwn' /></Link>
            <Link className='' to="/"><LuLinkedin className='dwn' /></Link>
            <Link className='' to="/"><LuGithub className='dwn' /></Link>
            <Link className='' to="/"><LuFacebook className='dwn' /></Link>
            <Link className='' to="/"><LuInstagram className='dwn' /></Link>
          </div>
        </div>
        <div className="imageName">
          <img src={img} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Hero;
