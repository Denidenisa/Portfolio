import react from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { Canvas } from '@react-three/fiber'
import { Astronaut } from '../components/Astronaut'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import Loader from '../components/Loader'
import React, { Suspense } from 'react'

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 })
    
    return(
        <section id="home" className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
            
          
            <div 
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)',
                    backdropFilter: 'blur(1px)',
                }}
            />

            
            <div className="relative z-[2]">
                <HeroText />
            </div>

            <ParallaxBackground/>

            <figure className='absolute inset-0' style={{width:"100vw", height:"100vh"}}> 
               <Canvas camera={{ position: [0, 1, 3] }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <pointLight position={[-5, 5, 5]} intensity={0.5} />
                    <Suspense fallback={<Loader/>}>
                        <Astronaut 
                            scale={isMobile ? 0.23 : 0.35} 
                            position={isMobile ? [2.5, 1, 0] : [3.5, 1, 0]}  
                            rotation={[0, 0, 0]}
                        /> 
                    </Suspense>
                </Canvas>
            </figure>
        </section>
    )
}

export default Hero;