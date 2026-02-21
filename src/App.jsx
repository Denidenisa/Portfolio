import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from "./section/About"
import Projects from './section/projects'


const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="work"><Projects /></div>
      <div id="contact"><section className="min-h-screen"/></div>
    </div>
  )
}

export default App
 { /*<Projects />*/ }
      { /*<Experiences />*/ }
      { /*<Testimonial />*/ }
      { /*<Contact />*/ }
      { /*<Footer/>*/ }
          