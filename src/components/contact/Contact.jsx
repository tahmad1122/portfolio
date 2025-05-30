import React from 'react'
import email from '../../assets/email.png';
import linkedin from '../../assets/linkedin.png';
import './contact.css';

function Contact() {
    return (
        <div className="contact" id="contact">
            <p className="contact-name">Contact Me</p>
            <div className="contact-line"></div>
            <div className="cnt">
                <div className="contact-info">
                    <div className="contact-info-container">
                        <img src={email} alt="" className="contact-icon" />
                        <p>
                            <a href="mailto:t.ahmad2120@gmail.com">Tauseef Ahmad</a>
                        </p>
                    </div>
                    <div className="contact-info-container">
                        <img src={linkedin} alt="" className="contact-icon" />
                        <p>
                            <a href="https://in.linkedin.com/in/tauseefahmad011">LinkedIn </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact