import React from 'react'
import './edu.css';
import checkmark from '../../assets/checkmark.png';
import java from '../../assets/java.svg'
import JS from '../../assets/JS.png'
import react from '../../assets/react.png'
import selenium from '../../assets/selenium.png'
import testng from '../../assets/testng.png'
import postman from '../../assets/postman.png'




function EduExp() {

  return (
      <div className="mainexp" id="experience">
        <h1 className="exp-title"></h1>
        <p className="exp-name">Experience</p>
        <div className="expline"></div>

        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>React JS</h3>
                    <p>Intermediate</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>Tailwind</h3>
                    <p>Intermediate</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="details-container">
              <h2 className="experience-sub-title">Automation Testing</h2>
              <div className="article-container">
                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>Java</h3>
                    <p>Experienced</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>Selenium</h3>
                    <p>Experienced</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>TestNG</h3>
                    <p>Experienced</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>Maven</h3>
                    <p>Experienced</p>
                  </div>
                </div>

                <div className="skill-item">
                  <img src={checkmark} alt="Experience icon" className="exricon" />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className='myskills'>Tools</p>
        <div className="skiline"></div>
        <div className='mytool'>
          <img src={java} alt="" className='toolicon' />
          <img src={JS} alt="" className='toolicon' />
          <img src={react} alt="" className='toolicon' />
          <img src={selenium} alt="" className='toolicon' />
          <img src={testng} alt="" className='toolicon' />
          <img src={postman} alt="" className='toolicon' />
        </div>

      </div>
  )
}

export default EduExp