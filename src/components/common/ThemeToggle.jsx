import React from "react";
import AnimatePresenceLoader from "../dynamic/AnimatePresenceLoader";
import MotionLoader from "../dynamic/MotionLoader";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <MotionLoader
      as="button"
      motionProps={{ whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 } }}
      onClick={toggleTheme}
      className="relative w-9 h-9 flex items-center justify-center rounded-full border border-border-primary bg-brand-secondary text-text-primary overflow-hidden cursor-pointer"
      aria-label="Toggle theme">
      <AnimatePresenceLoader mode="wait" initial={false}>
        {theme === "light" ? (
          <MotionLoader
            as="div"
            motionProps={{
              initial: { y: 20, opacity: 0, rotate: 45 },
              animate: { y: 0, opacity: 1, rotate: 0 },
              exit: { y: -20, opacity: 0, rotate: -45 },
              transition: { duration: 0.2, ease: "easeInOut" },
            }}>
            <Sun size={18} strokeWidth={2.5} />
          </MotionLoader>
        ) : (
          <MotionLoader
            as="div"
            motionProps={{
              initial: { y: 20, opacity: 0, rotate: 45 },
              animate: { y: 0, opacity: 1, rotate: 0 },
              exit: { y: -20, opacity: 0, rotate: -45 },
              transition: { duration: 0.2, ease: "easeInOut" },
            }}>
            <Moon size={18} strokeWidth={2.5} />
          </MotionLoader>
        )}
      </AnimatePresenceLoader>
    </MotionLoader>
  );
};

export default ThemeToggle;
