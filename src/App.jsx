import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/hero/Hero'
import EduExp from './components/eduexp/EduExp'
import About from './components/about/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Hero/>
     <About/>
     <EduExp/>
     </>
    
  )
}

export default App
