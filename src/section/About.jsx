import { useRef, useState } from 'react'
import { motion } from "motion/react"
import { Globe } from "../components/globe"
import Card from "../components/Card"
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from "../components/Frameworks.jsx"

const chapters = [
  {
    number: "I",
    emoji: "🌱",
    title: "L'Éveil",
    text: "Tout a commencé par une curiosité, celle de comprendre comment les écrans racontent des histoires. Développeuse web junior, je suis en formation full-stack JavaScript à Bruxelles.",
  },
  {
    number: "II",
    emoji: "🎨",
    title: "L'Atelier",
    text: "Je ne code pas seulement, je dessine aussi. Figma, Illustrator, Photoshop : mes pinceaux numériques pour donner vie à des interfaces qui respirent.",
  },
  {
    number: "III",
    emoji: "🪐",
    title: "La Quête",
    text: "Je cherche une équipe où apprendre encore, apporter ma créativité, et construire des projets qui ont du sens. Chaque ligne de code est une petite planète à apprivoiser.",
  },
]

const About = () => {
  const [activeChapter, setActiveChapter] = useState(0)
  const grid2Container = useRef()

  return (
    <section className="c-space section-spacing" id="about">

      {/* Titre */}
      <motion.h2
        className="text-heading mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
         L'Âme du Voyageur
      </motion.h2>

      {/* PARTIE 1 — Chapitres */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {chapters.map((chapter, index) => (
          <motion.div
            key={index}
            className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border overflow-hidden ${
              activeChapter === index
                ? "border-royal bg-gradient-to-b from-dusk to-twilight"
                : "border-white/10 bg-gradient-to-b from-storm to-indigo hover:border-white/30"
            }`}
            onClick={() => setActiveChapter(index)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <span className="text-xs text-white uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-full">
              Chapitre {chapter.number}
            </span>
            <div className="text-4xl mt-2 mb-3">{chapter.emoji}</div>
            <h3 className="text-lg font-semibold mb-2">{chapter.title}</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">{chapter.text}</p>
            {activeChapter === index && (
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-royal to-lavender"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* PARTIE 2 — Cards + Globe + Citation (6 cols) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mb-4">

        {/* Cards — 3 cols */}
        <div className="grid-default-color grid-2 md:col-span-3">
          <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-center text-gray-500">Dessine-moi un site web</p>
            <Card style={{ rotate: "75deg", top: "30%", left: "20%" }} text="Clean Code" containerRef={grid2Container} />
            <Card style={{ rotate: "-30deg", top: "60%", left: "45%" }} text="Responsive Design" containerRef={grid2Container} />
            <Card style={{ rotate: "90deg", bottom: "30%", left: "70%" }} text="GitHub" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "55%", left: "0%" }} text="DataBase" containerRef={grid2Container} />
            <Card style={{ rotate: "20deg", top: "10%", left: "38%" }} text="API" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/InsomniaRest.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/html5.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/github.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-54deg", top: "15%", left: "15%" }} image="assets/logos/javascript.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-5deg", top: "65%", left: "5%" }} image="assets/logos/adobePho.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-35deg", top: "35%", left: "50%" }} image="assets/logos/Figma.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-56deg", top: "75%", left: "15%" }} image="assets/logos/adobeIl.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-86deg", top: "65%", left: "60%" }} image="assets/logos/css3.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-26deg", top: "45%", left: "75%" }} image="assets/logos/nodeJs.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-56deg", top: "75%", left: "90%" }} image="assets/logos/MongoDb.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-56deg", top: "5%", left: "90%" }} image="assets/logos/unity.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-46deg", top: "6%", left: "85%" }} image="assets/logos/wordpress.svg" containerRef={grid2Container} />
            <Card style={{ rotate: "-76deg", top: "8%", left: "45%" }} image="assets/logos/git.svg" containerRef={grid2Container} />
          </div>
        </div>

        {/* Globe — 2 cols */}
        <motion.div
          className="grid-black-color md:col-span-2 relative overflow-hidden rounded-2xl p-6 hover:-translate-y-1 duration-200"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs text-white uppercase tracking-widest mb-1 bg-white/10 px-2 py-0.5 rounded-full w-fit">Localisation</p>
          <p className="headtext">Bruxelles 🇧🇪</p>
          <p className="subtext mt-1">Quelque part entre deux étoiles</p>
          <figure className="absolute right-[-20%] bottom-[-10%] opacity-40">
            <Globe />
          </figure>
        </motion.div>

        {/* Citation — 1 col */}
        <motion.div
          className="md:col-span-1 relative overflow-hidden rounded-2xl p-6 hover:-translate-y-1 duration-200 bg-gradient-to-b from-fuchsia/20 to-dusk border border-fuchsia/20 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-4xl mb-3">🌹</span>
          <p className="italic text-neutral-300 text-xs leading-relaxed">
           " Connaître ce n'est pas démontrer, ni expliquer. C'est accéder à la vision"
          </p>
          <span className="text-xs text-neutral-500 mt-2">— Le Petit Prince</span>
        </motion.div>

      </div>

      {/* PARTIE 3 — Email + Frameworks côte à côte */}
      <div className="flex flex-col md:flex-row gap-4 md:h-[18rem]">

        {/* Email */}
        <motion.div
          className="grid-special-color flex-1 relative overflow-hidden rounded-2xl p-6 hover:-translate-y-1 duration-200 flex flex-col items-center justify-center gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-center headtext">Prêt à créer une étoile avec moi ?</p>
          <CopyEmailButton />
        </motion.div>

        {/* Frameworks */}
        <motion.div
          className="grid-constellation-color flex-[2] relative overflow-hidden rounded-2xl p-6 hover:-translate-y-1 duration-200"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="z-10 w-[45%]">
            <p className="text-xs text-white uppercase tracking-widest mb-1 bg-white/10 px-2 py-0.5 rounded-full w-fit">Boîte à outils</p>
            <p className="headtext">Mes constellations de code</p>
            <p className="subtext">Les outils avec lesquels je fais briller mes projets.</p>
          </div>
          <div className="absolute inset-y-0 w-full h-full start-[33%] md:scale-150">
            <Frameworks />
          </div>
        </motion.div>

      </div>

    </section>
  )
}

export default About