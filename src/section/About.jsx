import {useRef}from'react'
import { Globe } from "../components/globe";
import Card from "../components/Card";
import CopyEmailButton from '../components/CopyEmailButton';
import {Frameworks} from "../components/Frameworks.jsx";
const About = () => {
   const grid2Container=useRef()
  return (
    <section   className="c-space section-spacing" id="about">
      <h2 className="text-heading">L 'Âme du Voyageur</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/code.png"
            className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, C'est Furtuna Denisa</p>
            <p className="subtext">
              Développeuse web junior en formation full-stack JavaScript, j'explore aussi le design avec Figma et Adobe. Je cherche une équipe pour apprendre et apporter ma créativité.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2" >
            <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                <p className=" flex items-end text-5xl text-gray-500">  Code is craft </p>
                <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Clean Code"
               containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Responsive Design"
               containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text=" GitHub"
               containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="DataBase"
               containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="API"
               containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/InsomniaRest.svg"
               containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/html5.svg"
               containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/github.svg"
               containerRef={grid2Container}
              
            />
             <Card
              style={{ rotate: "-54deg", top: "15%", left: "15%" }}
              image="assets/logos/javascript.svg"
               containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-5deg", top: "65%", left: "5%" }}
              image="assets/logos/adobePho.svg"
               containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-35deg", top: "35%", left: "50%" }}
              image="assets/logos/Figma.svg"
               containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-56deg", top: "75%", left: "15%" }}
              image="assets/logos/adobeIl.svg"
               containerRef={grid2Container}
              
            />
            <Card
              style={{ rotate: "-86deg", top: "65%", left: "60%" }}
              image="assets/logos/css3.svg"
               containerRef={grid2Container}
              
            /><Card
              style={{ rotate: "-26deg", top: "45%", left: "75%" }}
              image="assets/logos/nodeJs.png"
               containerRef={grid2Container}
              
            /><Card
              style={{ rotate: "-56deg", top: "75%", left: "90%" }}
              image="assets/logos/MongoDb.png"
               containerRef={grid2Container}
              
            /><Card
              style={{ rotate: "-56deg", top: "5%", left: "90%" }}
              image="assets/logos/unity.svg"
               containerRef={grid2Container}
              
            
            /><Card
              style={{ rotate: "-46deg", top: "6%", left: "85%" }}
              image="assets/logos/wordpress.svg"
               containerRef={grid2Container}
              
            /><Card
            style={{ rotate: "-76deg", top: "8%", left: "45%" }}
            image="assets/logos/git.svg"
             containerRef={grid2Container}
            
          />
            
            
                </div> </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
  <div className="z-10 w-[50%]">
    <p className="headtext">Mon objectif</p>
    <p className="subtext">
      Développeuse web junior basée à Bruxelles, je conçois des interfaces claires et intuitives
    </p>
  </div>
  <figure className="absolute left-[30%] top-[10%]">
    <Globe />
  </figure>
</div>

        
        {/* Grid 4 */}
        <div className="grid-special-color grid-4" > 
            <div className="flex flex-col items-center justify-center gap-4 size-full"> <p className="text-center headtext"> Prêt à créer une étoile avec moi ?</p><CopyEmailButton/>  </div> 
            </div>

        {/* Grid 5 */}
        <div className="grid-constellation-color grid-5">
          <div className="z-10 w-[50%]">
            <div>
                <p className="headtext"> Mes constellations de code </p>
                <p className="subtext">Les outils avec lesquels je fais briller mes projets.</p>
            </div>
            
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;