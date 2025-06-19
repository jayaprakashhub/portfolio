import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer'
import './App.css'
import Skills from './components/Skills.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="port bg-gradient-to-tr from-white via-indigo-50 to-purple-100 min-h-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
