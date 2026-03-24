
import { motion } from "motion/react"
import { mySocials } from "../constants"
 
const citations = [
  "Carpe diem",
  "Tu deviens responsable pour toujours de ce que tu as apprivoisé.",
  "C'est le temps que tu as perdu pour ta rose qui fait ta rose si importante.",
  "Les adultes ne comprennent jamais rien tout seuls.",
]
 
const Footer = () => {
  const randomCitation = citations[Math.floor(Math.random() * citations.length)]
 
  return (
    <section className="relative c-space pb-6 text-sm text-neutral-400 overflow-hidden">
 
      
      <div className="flex items-center gap-3 w-full mb-6">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
        <span className="text-base">✨</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      </div>
 
      
      <motion.p
        className="text-center italic text-neutral-500 text-xs max-w-md mx-auto mb-6"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🌹 "{randomCitation}"
       
      </motion.p>
 
     
      <div className="flex flex-col items-center gap-4">
 
       
        
 
        {/* Copyright */}
        <p className="text-center">© {new Date().getFullYear()} Denisa — Quelque part parmi les étoiles 🪐</p>
 
      </div>
    </section>
  )
}
 
export default Footer