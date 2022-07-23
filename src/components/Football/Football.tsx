import { motion } from "framer-motion";
import * as BiIcons from "react-icons/bi";

export const Football = () => {
  if (typeof window === "undefined") return null;

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: window.innerWidth }}
      className="max-w-max bg-red-500 text-3xl"
    >
      <BiIcons.BiFootball />
    </motion.div>
  );
};
