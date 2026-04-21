import { useState, useEffect } from "react";
import { motion } from "motion/react";

const navItems = [
  { label: "Accueil", href: "#home", id: "home" },
  { label: "À propos", href: "#about", id: "about" },
  { label: "Projets", href: "#work", id: "work" },
  { label: "Expériences", href: "#experiences", id: "experiences" },
  { label: "Contact", href: "#contact", id: "contact" },
];
function Navigation({ activeSection }) {
  return (
    <ul className="nav-ul">
      {navItems.map(({ label, href, id }) => {
        const isActive = activeSection === id;
        return (
          <li key={id} className="nav-li">
            <a
              className="nav-link"
              href={href}
              style={{
                position: "relative",
                color: isActive ? "white" : undefined,
                fontWeight: isActive ? "600" : undefined,
                transition: "color 0.3s ease",
              }}
            >
              {label}
           
              {isActive && (
                <motion.span
                  layoutId="activeUnderline"
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, #f698ec, #f698ec)",
                    borderRadius: "999px",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
         
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4 sm:py-2">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Denisa
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation activeSection={activeSection} />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation activeSection={activeSection} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;