import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from "./section/About"
import Projects from './section/projects'
import Experiences from './section/Experiences'
import Contact from './section/Contact'
import Footer from "./section/Footer"
const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="work"><Projects /></div>
      <div id="experiences"><Experiences /></div>
      <div id="contact"><Contact /></div>
      <div id="footer"><Footer /></div>
      
    </div>
  )
}
export default App

    
          