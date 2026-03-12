import { motion } from "motion/react"
import { AnimatedList } from "./AnimatedList"

const icons = ["🌍", "🚀", "🌿", "🔢"]
const colors = ["#f0c9ef", "#f698ec", "#ca2f8c", "#cc6033"]

const ProjectNotification = ({ text, icon, color, index }) => (
  <figure
    className="relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-4
      transition-all duration-200 ease-in-out hover:scale-[103%]
      transform-gpu backdrop-blur-md
      [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]
      [border:1px_solid_rgba(255,255,255,.1)]
      bg-white/5"
  >
    <div className="flex flex-row items-center gap-3">
      <div
        className="flex size-10 items-center justify-center rounded-2xl shrink-0"
        style={{ backgroundColor: color }}
      >
        <span className="text-lg">{icon}</span>
      </div>
      <p className="text-sm font-normal text-white/80">{text}</p>
    </div>
  </figure>
)

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto backdrop-blur-sm p-4">
      <motion.div
        className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 my-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>

        {/* Image projet */}
        <img src={image} alt={title} className="w-full rounded-t-2xl" />

        <div className="p-5">
          <h5 className="mb-1 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-5 font-normal text-neutral-400">{description}</p>

          {/* AnimatedList pour les subDescriptions */}
          <div className="relative flex max-h-[300px] w-full flex-col overflow-y-auto mb-5 scrollbar-thin scrollbar-thumb-white/20">
            <AnimatedList delay={1200}>
              {subDescription.map((text, index) => (
                <ProjectNotification
                  key={index}
                  text={text}
                  icon={icons[index % icons.length]}
                  color={colors[index % colors.length]}
                  index={index}
                />
              ))}
            </AnimatedList>
            
          </div>

          {/* Tags + lien */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-white hover-animation"
            >
              Explorer ce projet 🚀
              <img src="assets/arrow-up.svg" className="size-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails