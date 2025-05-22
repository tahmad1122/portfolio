import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";


function NavBar() {
    const [activeLink, setActiveLink] = useState('/'); 
    const handleClick = (link) => {
        setActiveLink(link); 
    };

    return (

        <div className='navbar'>
            <div className='flex items-center justify-between max-w-7xl mx-auto px-4 md:px-0'>
                <div>
                    <a href="/">
                        <img src={logo} alt="Website logo" className='w-[70px]' />
                    </a>
                </div>

                <nav className='hidden md:block'>
                    <ul className='flex gap-7 text-xl items-center font-semibold text-white'>
                        <a href="/" onClick={() => handleClick('#')} className={activeLink === '/' ? 'text-yellow-200 border-b-2 border-yellow-200 pb-1' : ''}>
                            <li className='cursor-pointer'>Home</li>
                        </a>
                        <a href="#about" onClick={() => handleClick('#about')} className={activeLink === '#about' ? 'text-yellow-200 border-b-2 border-yellow-200 pb-1' : ''}>
                            <li className='cursor-pointer'>About</li>
                        </a>
                        <a href="#experience" onClick={() => handleClick('#experience')} className={activeLink === '#experience' ? 'text-yellow-200 border-b-2 border-yellow-200 pb-1' : ''}>
                            <li className='cursor-pointer'> Experience</li>
                        </a>

                         <a href="#project" onClick={() => handleClick('#project')} className={activeLink === '#project' ? 'text-yellow-200 border-b-2 border-yellow-200 pb-1' : ''}>
                            <li className='cursor-pointer'> Project</li>
                        </a>
                        <a href="#contact"><button className='hero-btn'>Contact<FaChevronRight className='dwn'/></button></a>
           

                    </ul>
                </nav>






                {/* <nav className='hidden md:block'>
                    <ul className='flex gap-7 text-xl items-center font-semibold text-white'>
                        <li>
                            <Link
                                to="/"
                                className={({ isActive }) => (isActive ? 'text-yellow-200 border-b-2 border-yellow-200 pb-1'  : '') }
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                        
                            <Link
                                to="about"
                                onClick={() => handleClick('#about')}
                                className={({ isActive }) => (isActive ? 'text-yellow-200 border-b-2 border-yellow-200 pb-1' : '')}
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <NavLink
                                to="/education"
                                className={({ isActive }) => (isActive ? 'text-yellow-200 border-b-2 border-yellow-200 pb-1' : '')}
                            >
                                Education & Experience
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/project"
                                className={({ isActive }) => (isActive ? 'text-yellow-200 border-b-2 border-yellow-200 pb-1' : '')}
                            >
                                Projects
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/contact"
                                className="hero-btn "
                            >
                                Contact <FaChevronRight className='dwn' />
                            </NavLink>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </div>
    )
}

export default NavBar
