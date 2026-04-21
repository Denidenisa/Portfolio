import { FlipWords } from "./FlipWords"
import {motion} from "motion/react"

const HeroText=()=>{
    const words=["Apprendre","Apprivoiser","Construire"]
    const variants ={
        hidden:{opacity:0,x:-50},
        visible:{opacity:1, x:0}
    }
    return <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text md:pl-8 lg:pl-16">
        {/*Desktop View */}
        <div className="flex-col hidden md:flex">
            <motion.h1 className="text-5xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{delay:1}}> 
                Hello, c'est Denisa
            </motion.h1>
            <div className="flex flex-col items-start">
                <motion.p className="text-6xl font-medium text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay:1.2}}> 
                    Dévloppeuse en devenir, apprivoisant l'univers du web 
                </motion.p>
                <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay:1.5}}>
                    <FlipWords words={words} className="font-black text-white text-9xl"/>
                </motion.div>
                <motion.p className="text-5xl font-medium text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay:1.8}}>
                    Expériences numériques
                </motion.p>
            </div>
        </div>
       {/*Mobile View */}
<div className="flex flex-col space-y-6 md:hidden pl-4">
    <motion.p className="text-3xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{delay:1}}>
        Hi, c'est Denisa
    </motion.p>
    <div>
        <motion.p className="text-4xl font-black text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay:1.2}}>
            Motivée à 
        </motion.p>
        <motion.div variants={variants} initial="hidden" animate="visible" transition={{delay:1.5}}>
            <FlipWords words={words} className="font-bold text-white text-5xl"/>
        </motion.div>
        <motion.p className="text-4xl font-black text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{delay:1.8}}>
            le code
        </motion.p>
    </div>
</div>
    </div>
}
export default HeroText