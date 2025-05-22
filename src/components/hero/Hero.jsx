import React from 'react';
import './hero.css';
import logo from '../../assets/logo.png';
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
              <p className="hero-description">Full-Stack Developer | MERN Stack Enthusiast</p>
              <p className='details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam iste ipsa dolores? Voluptas et quae eveniet obcaecati voluptatibus eaque dolorem fugiat labore cumque esse.</p>
              <div className='btn'>
              <button className=' hbtn'><LuContactRound className='dwn' />Contact me</button>
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
              <img src={logo} alt="logo" />
            </div>
          </div>













    {/* // <div className="hero">
    //   <div className="hero-content">
    //     <h1 className="hero-title">Hi👋, I'm <p className='text-blue-400 md:text-6xl text-4xl font-bold mb-4'>Tauseef Ahmad</p></h1>
    //     <p className="hero-description">Full-Stack Developer | MERN Stack Enthusiast</p>
    //     <p className='details'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam iste ipsa dolores? Voluptas et quae eveniet obcaecati voluptatibus eaque dolorem fugiat labore cumque esse.</p>
    //     <button className="hero-btn"> <LuDownload className='dwn'/>Download CV </button>
      
    //   </div>
    //   <div className='image'>
    //     <img src={logo} alt="logo" />
    //   </div>
      
    // </div> */}

    {/* <section className="hero">
      <div className="hero-content">
      <h1 className="text-4xl font-bold">Hi, I'm Ahmad 👋</h1>
      <p className="text-xl mt-4">QA Analyst | Automation Tester</p>
      <p className="text-md text-gray-600 mt-2">Expert in Selenium, API, and Performance Testing</p>
      <div className="mt-6 space-x-4">
        <a href="/resume.pdf" className="bg-blue-600 text-white px-4 py-2 rounded">Download Resume</a>
        <a href="#contact" className="border border-blue-600 px-4 py-2 rounded text-blue-600">Contact Me</a>
      </div>
      </div>
      <div className='image'>
     <img src={logo} alt="logo" />
     </div>
    </section> */}
    </>
  );
};

export default Hero;
