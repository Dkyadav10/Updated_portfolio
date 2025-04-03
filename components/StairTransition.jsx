"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

<<<<<<< HEAD
//components
import Stairs from "./Stairs"

=======
>>>>>>> 453dca177580596773c96f07bd31613a5dc8bb7d
const StairTransition = () => {
    const pathname = usePathname();
  return (
    <>
        <AnimatePresence mode = "wait">
            <div key = {pathname}>
                <div className = "h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex ">
                    <Stairs/>
                </div>
            </div>
            StairTransition
        </AnimatePresence>
    </>
  );
};

export default StairTransition;