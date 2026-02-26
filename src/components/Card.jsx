import { motion } from "motion/react";
const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      style={style}
      whileHover={{ scale: 2.05 }}
      drag //*bouger
      dragConstraints={containerRef}
      dragElastic={1} 
    />
  ) : (
    <motion.div
       className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-sand/60 font-extralight bg-storm w-48 cursor-grab"
      style={style}
      whileHover={{ scale: 2.05 }}
      drag
      dragConstraints={containerRef}//*pour pas sortir du container
      dragElastic={1}//entre 0-1 cree comme une bouncing reaction  qd l objet touche les bords du container
    >
      {text}
    </motion.div>
  );
};

export default Card;