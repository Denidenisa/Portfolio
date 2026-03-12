import { IconCloud } from "./IconCloud"

export function Frameworks() {
  const skills = [
    "Insomnia", "Figma", "mongoDB", "NodeJs", "css3",
    "adobeIl", "adobePho", "html5", "javascript",
    "microsoft", "react", "tailwindcss", "git", "wordpress", "express",
  ]

  const images = skills.map((skill) => `assets/logos/${skill}.svg`)

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <IconCloud images={images} />
    </div>
  )
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);