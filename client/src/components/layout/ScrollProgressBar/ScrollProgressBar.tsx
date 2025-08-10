import { useScroll, useSpring, motion } from "framer-motion";
import React from "react";

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "#268c51",
        transformOrigin: "0%",
        zIndex: 9999,
        scaleX: scaleX,
      }}
    />
  );
};
