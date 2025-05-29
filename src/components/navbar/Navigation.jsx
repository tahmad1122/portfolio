import React, { useState } from 'react'
import './navbar.css';
import { Link } from 'react-router';
import logo from '../../assets/logo.png';
import { FaChevronRight } from 'react-icons/fa';

function Navigation() {
    const [isActive, setActive] = useState("/");
    const [mobileView, setMobileView]=useState(false)

    function toggleMenu(){
        setMobileView(!mobileView);
    }

    function handleClick(link) {
        setActive(link);
        setMobileView();
    }
    return (
        <nav className="navbarr">
            <div className="logo">
                {/* <img src={logo} alt="" /> */}
                <div className='title-container'>
                <h1 className='title'>T</h1>
                <h1 className='title-2'>AHMAD</h1>
                </div>
            </div>
            <ul className={`navbar-links ${mobileView ? 'mobile-menu' : ''}`}>
                <li>
                    <a href="/" onClick={() => handleClick("/")} className={isActive === '/' ? 'navbar-item-active' : 'navbar-item'}>Home</a>
                </li>

                <li>
                    <a href="#about" onClick={() => handleClick("#about")} className={isActive === '#about' ? 'navbar-item-active' : 'navbar-item'}>About</a>
                </li>

                <li>
                    <a href="#experience" onClick={() => handleClick("#experience")} className={isActive === '#experience' ? 'navbar-item-active' : 'navbar-item'}>Experience</a>
                </li>

                <li>
                    <a href="#project" onClick={() => handleClick("#project")} className={isActive === '#project' ? 'navbar-item-active' : 'navbar-item'}>Project</a>
                </li>

                <li>
                    <a href="#contact" className='navbar-item' onClick={() => handleClick("#contact")}><button className='contact-nav'>Contact</button></a>
                </li>
            </ul>
            {/* //Mobile view */}
            <div className="mobile-menu-icon"  onClick={toggleMenu}>
                &#9776;
            </div>
        </nav>
    )
}

export default Navigation