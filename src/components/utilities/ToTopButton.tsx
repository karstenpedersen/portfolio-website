import * as FaIcons from "react-icons/fa";

export const ToTopButton = () => {
  return (
    <button
      aria-label="Go to the top"
      className="text-2xl"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaIcons.FaArrowUp />
    </button>
  );
};
