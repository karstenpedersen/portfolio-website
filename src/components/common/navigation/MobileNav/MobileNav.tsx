import { AnimatePresence, motion } from "framer-motion";
import { FunctionComponent } from "react";
import { Navigation } from "../Navigation";

interface Props {
  mobile: boolean;
  handleMobile: Function;
}

export const MobileNav: FunctionComponent<Props> = ({
  mobile,
  handleMobile,
}) => {
  return (
    <AnimatePresence>
      {mobile && (
        <>
          <motion.div
            className={`fixed top-0 right-0 z-40 flex flex-col overflow-hidden bg-dark lg:hidden`}
            initial={{
              width: 0,
              height: 0,
              borderBottomLeftRadius: "100%",
              borderTopLeftRadius: "100%",
              borderBottomRightRadius: "100%",
            }}
            animate={{
              width: "100vw",
              height: "100vh",
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
            exit={{
              width: 0,
              height: 0,
              borderBottomLeftRadius: "100%",
              borderTopLeftRadius: "100%",
              borderBottomRightRadius: "100%",
            }}
            transition={{ type: "tween" }}
          >
            <div className="mx-[4vw] mt-[calc(var(--header-height)+100px)] h-full">
              <Navigation
                className="flex h-full flex-col gap-16 text-right text-6xl font-semibold"
                closeMenu={() => {
                  handleMobile();
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
