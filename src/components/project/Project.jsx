import React from 'react'
import todo from '../../assets/todo.png';
import weather from '../../assets/weather.png';
import ecommerce from '../../assets/ecommerce.png';
import './project.css';

function Project() {
  return (

    <div className="project" id="project">
      <h1 className="exp-title"></h1>
      <p className="project-name">Recent Project</p>
      <div className="project-line"></div>

      <div className="project-details-container">
        <div className="projet-containers">
          <div className="project-details">

            <div className="my-project-container">
              <div className="project-item">
                <img src={todo} alt="Experience icon" className="project-img" />
                <h2 className="project-sub-title">To Do Application</h2>
                <div className="project-btn">
                  <a href="https://to-do-app-one.netlify.app/" target="_blank" className='p-btn'>Live Demo</a>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="projet-containers">
          <div className="project-details">

            <div className="my-project-container">
              <div className="project-item">
                <img src={weather} alt="Experience icon" className="project-img" />
                <h2 className="project-sub-title">Weather Application</h2>
                <div className="project-btn">
                  <a href="https://react-weather-app-11.netlify.app/" target="_blank" className='p-btn'>Live Demo</a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="projet-containers">
          <div className="project-details">

            <div className="my-project-container">
              <div className="project-item">
                <img src={ecommerce} alt="Experience icon" className="project-img" />
                <h2 className="project-sub-title">Ecommerce Automation</h2>
                <div className="project-btn">
                  <a href="https://github.com/" target="_blank" className='p-btn'>Live Demo</a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Project