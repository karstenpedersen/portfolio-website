import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import * as IoIcons from "react-icons/io5";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div className="text-2xl">
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>
          <IoIcons.IoMoon />
        </button>
      ) : (
        <button onClick={() => setTheme("light")}>
          <IoIcons.IoSunny />
        </button>
      )}
    </motion.div>
  );
};
