import React from 'react'
import './about.css';
import logo from '../../assets/logo.png';
import img from '../../assets/img.png';
import { LuContactRound, LuDownload, LuFacebook, LuGithub, LuInstagram, LuLinkedin, LuYoutube } from "react-icons/lu";
import experience from '../../assets/experience.png';
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router';



function About() {
  return (


    <div className="mainabout" id="about">
      <div className="aboutimageName">
        <img src={img} alt="logo" />
      </div>
      <div className="about-details">
        <h1 className="about-title">
          Get To Know More
          <p className="about-name">About Me</p>
        </h1>
        <div class="line"></div>
        <div className='about-containers'>
        <div className='Expdetails'>
          <img src={experience} alt="" className='iconimg'/>
          <h3 className='font-bold'>Experience</h3>
          <p>3+ years</p>
          <p>Frontend & Automation Development</p>
        </div>
        <div className='Expdetails'>
          <img src={experience} alt="" className='iconimg'/>
          <h3 className='font-bold'>Education</h3>
          <p>B.Tech(CSE)</p>
          <p>Bachelors Degree</p>
        </div>
        </div>
        <p className="about-description">Hi! I'm <strong>Tauseef Ahmad</strong>, a passionate Frontend Developer and QA Automation Engineer with over 3 years of experience. Skilled in Java, JavaScript, and React, I specialize in crafting elegant, user-friendly web applications while ensuring top-notch quality through automation. My expertise includes Selenium WebDriver, Java, TestNG, and the POM framework. Additionally, I have hands-on experience with CI/CD tools like Jenkins, version control using GitHub, and optimizing workflows. I combine strong web development skills with an eye for detail,
           delivering solutions that meet client needs while maintaining high standards of performance and reliability.</p>


        <p className='skill'>My Skills</p>
        <div className='about-btn'>
        <p className='myskill'>Java</p>
        <p className='myskill'>Java Script</p>
        <p className='myskill'>React</p>
        <p className='myskill'>Selenium</p>
        <p className='myskill'>TestNG</p>
        <p className='myskill'>HTML</p>
        <p className='myskill'>CSS</p>
        </div>
        <div className='about-social'>
          <Link className='' to="/"><LuYoutube className='dwn' /></Link>
          <Link className='' to="/"><LuLinkedin className='dwn' /></Link>
          <Link className='' to="/"><LuGithub className='dwn' /></Link>
          <Link className='' to="/"><LuFacebook className='dwn' /></Link>
          <Link className='' to="/"><LuInstagram className='dwn' /></Link>
        </div>
      </div>

    </div>

  )
}

export default About