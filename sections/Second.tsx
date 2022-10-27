import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Second = (props: Props) => {
  return (
    <div className="h-screen w-screen max-w-[100%] relative p-5 px-10 font-nanum text-[#060c08] dark:text-slate-200">
      <div className="max-w-7xl h-full mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-[300px] h-[300px] bg-meal-one bg-cover absolute top-10 right-10 shadow-2xl"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-[300px] h-[300px] bg-meal-two bg-cover absolute bottom-10 left-10 shadow-2xl"
        ></motion.div>

        <div className="w-3/4 mx-auto h-full bg-rose-300/0 z-50 p-10 relative">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl uppercase z-50 absolute top-32 left-10">
              Let's Enjoy
            </span>
            <span className="text-6xl uppercase z-50 absolute top-56 left-10">
              Traditional Meals
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl uppercase z-50 absolute bottom-56 right-10">
              Coming from
            </span>
            <span className="text-6xl uppercase z-50 absolute bottom-32 right-10">
              All over the world
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Second;
