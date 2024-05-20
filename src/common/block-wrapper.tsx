import React from "react";
import { motion } from "framer-motion";

interface BlockWrapperProps {
  children: React.ReactNode;
}

export const BlockWrapper = (props: BlockWrapperProps) => {
  return (
    <motion.div
      className="relative min-h-screen flex-col gap-8 lg:gap-12 w-full flex p-4 md:p-16 md:py-8 justify-center max-w-screen-2xl items-center"
      initial={{ opacity: 0 }}
      transition={{
        duration: 2,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {props.children}
    </motion.div>
  );
};
