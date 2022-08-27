import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import * as IoIcons from "react-icons/io5";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div className="text-2xl">
      {theme === "light" ? (
        <IoIcons.IoMoon role="button" onClick={() => setTheme("dark")} />
      ) : (
        <IoIcons.IoSunny role="button" onClick={() => setTheme("light")} />
      )}
    </motion.div>
  );
};
