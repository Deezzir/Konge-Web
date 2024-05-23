import React from "react";
import { motion } from "framer-motion";

interface BlockWrapperProps {
  children: React.ReactNode;
  bg?: string;
}

export const BlockWrapper = (props: BlockWrapperProps) => {
  return (
    <div
      className={
        "min-h-screen w-full flex justify-center items-center " +
        (props.bg ? props.bg : "bg-[#87ceeb]")
      }
    >
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};
