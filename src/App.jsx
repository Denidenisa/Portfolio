import React from 'react'
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from "./section/About"
import Projects from './section/projects'


const App=()=>{
  

  return (
    
      <div className='container mx-auto max-w-7xl'>
       <Navbar /> 
     <Hero />
    <About/>
    <Projects/>
     <section className="min-h-screen"/>
     <section className="min-h-screen"/>
     <section className="min-h-screen"/>
     <section className="min-h-screen"/>
     
    
      { /*<Experiences />*/ }
      { /*<Testimonial />*/ }
      { /*<Contact />*/ }
      { /*<Footer/>*/ }
          

       
      </div>
     
  )
}

export default App
