import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/hero/Hero'
import EduExp from './components/eduexp/EduExp'
import About from './components/about/About'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Navigation from './components/navbar/Navigation'


function App() {
  
  return (
    <>
    <Navigation/>
     <Hero/>
     <About/>
     <EduExp/>
     <Project/>
     <Contact/>
     <Footer/>
     </>
    
  )
}

export default App
