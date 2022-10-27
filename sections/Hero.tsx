import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen w-screen max-w-[100%] relative p-5 px-10 overflow-hidden">
      <header className="flex justify-between text-slate-300">
        <Link href="#4">
          <motion.span
            initial={{
              x: -300,
              opacity: 0,
              scale: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 2,
            }}
            className="p-3 bg-[#F08000] hover:bg-[#060c08] text-[#060c08] hover:text-[#F08000] font-semibold uppercase tracking-[2px] rounded-sm cursor-pointer transition-colors duration-150"
          >
            Reservation
          </motion.span>
        </Link>
        <motion.span
          initial={{
            x: 300,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="text-[#060c08] dark:text-slate-100"
        >
          +1 (431) 631-2458
        </motion.span>
      </header>

      <div className="w-2/6 absolute left-2/4 top-2/4 -translate-x-[50%] -translate-y-[50%] flex flex-col items-center 2xl:-space-y-24 lg:-space-y-20 md:-space-y-16">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          className="uppercase text-[#060c08] dark:text-slate-100 text-8xl tracking-[10px] font-nanum"
        >
          Millenium
        </motion.h1>

        <motion.img
          initial={{
            y: 0,
            rotate: 30,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            rotate: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1.5 }}
          src="./img/plate.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
