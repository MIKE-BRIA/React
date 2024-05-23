"use client";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export default function Navs() {
  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#fff",
    },
  };

  return (
    <nav className="bg-blue-900 h-15 p-4 max-w-7xl m-auto">
      <div className="flex justify-around m-auto">
        <h1 className="text-white">Brian Michael</h1>
        <div>
          <ul className="flex space-x-4">
            {["about", "skills", "projects", "contact"].map((section) => (
              <motion.li
                key={section}
                variants={linkVariants}
                whileHover="hover"
                className="cursor-pointer"
              >
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  className="text-white"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
