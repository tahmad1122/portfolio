import React from 'react'
import './about.css';
import logo from '../../assets/logo.png';
import { LuContactRound, LuDownload, LuFacebook, LuGithub, LuInstagram, LuLinkedin, LuYoutube } from "react-icons/lu";
import experience from '../../assets/experience.png';
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router';



function About() {
  return (


    <div className="mainabout" id="about">
      <div className="aboutimageName">
        <img src={logo} alt="logo" />
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
        <p className="about-description">Hi! I'm XYZ, a passionate Full-Stack Developer with expertise in the MERN stack,
          WordPress, and SEO. With a strong foundation in modern web development and an eye for detail,
          I create elegant, user-friendly web solutions tailored to meet client needs.</p>

          <p className="about-description">Hi! I'm XYZ, a passionate Full-Stack Developer with expertise in the MERN stack,
          WordPress, and SEO. With a strong foundation in modern web development and an eye for detail,
          I create elegant, user-friendly web solutions tailored to meet client needs.</p>

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




















    // <section className='about' id="about">
    //   <div>
    //     <h1 className="about-title">About Me</h1>
    //   </div>

    //   <div className="about-content">
    //     <img src={logo} alt="logo" className='about-image' />
    //     <div className='about-details'>
    //       <p className="about-description">
    //         Hi! I'm XYZ, a passionate Full-Stack Developer with expertise in the MERN stack,
    //         WordPress, and SEO. With a strong foundation in modern web development and an eye for detail,
    //         I create elegant, user-friendly web solutions tailored to meet client needs.</p>
    //       <p className="about-description">
    //         My journey into tech began from a non-IT background, and I've embraced every challenge to hone my
    //         skills in development, problem-solving, and teamwork.
    //         I’m always eager to learn and explore new technologies to deliver cutting-edge web experiences.</p>
    //       <p className="about-description">
    //         When I’m not coding, I enjoy sharing my knowledge through my <a href="" className='text-yellow-200'>YouTube channel,</a> where I teach JavaScript, MERN stack, and WordPress concepts.
    //         Let’s connect and build something amazing together!</p>
    //       <div>
    //         <h1 className="about-skills">My Skills</h1>
    //       </div>
    //       <div className='skill-container'>
    //         <p className="skills">Java</p>
    //         <p className="skills ">Java Script</p>
    //         <p className="skills">React</p>
    //         <p className="skills">Databse</p>
    //       </div>
    //        <a href="#contact"><button className='about-btn'>Contact<FaChevronRight className='dwn'/></button></a>
    //     </div>


    //   </div>

    // </section>



  )
}

export default About