import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectFlip, Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";

type Props = {};

const data: any[] = [
  {
    image: "/img/menu/plate1.png",
    name: "Pasta de Carbonara",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed beatae ad ab autem.",
  },
  {
    image: "/img/menu/plate2.png",
    name: "Salmone de tarte",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed beatae ad ab autem.",
  },
  {
    image: "/img/menu/plate1.png",
    name: "Vesuvio del Fuego",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed beatae ad ab autem.",
  },
  {
    image: "/img/menu/plate2.png",
    name: "Vesuvio del Tartare",
    desc: "Lorem ipsum Tartare, sit amet consectetur adipisicing elit. Sed beatae ad ab autem.",
  },
  {
    image: "/img/menu/plate1.png",
    name: "4 quart del Chef",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed beatae ad ab autem.",
  },
  {
    image: "/img/menu/plate2.png",
    name: "Porta del vesuvio",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed beatae ad ab autem.",
  },
  {
    image: "/img/menu/plate1.png",
    name: "El specialo del cheffo",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed beatae ad ab autem.",
  },
];

const Third = (props: Props) => {
  return (
    <div className="h-screen w-screen max-w-[100%] relative text-[#060c08] dark:text-slate-200 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto h-[95vh] flex items-center"
      >
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper w-[400px] h-[600px] p-[50px]"
        >
          {data.map((menu, i) => (
            <SwiperSlide
              className={
                "bg-cover bg-center w-[400px] h-[600px] bg-transprent flex flex-col justify-between pb-10 border border-[#060c08]/10 dark:border-slate-200/10 relative"
              }
              key={i}
            >
              <div className="w-6 h-6 absolute top-0 left-0 border-t border-l  border-[#060c08]/40 dark:border-slate-200/40" />
              <div className="w-6 h-6 absolute top-0 right-0 border-t border-r  border-[#060c08]/40 dark:border-slate-200/40" />
              <div className="w-6 h-6 absolute bottom-0 left-0 border-b border-l  border-[#060c08]/40 dark:border-slate-200/40" />
              <div className="w-6 h-6 absolute bottom-0 right-0 border-b border-r  border-[#060c08]/40 dark:border-slate-200/40" />
              <img className="w-[400px]" src={`${menu.image}`} />
              <div>
                <h1 className="font-nanum italic text-4xl text-center mb-4">
                  {menu.name}
                </h1>
                <p className="font-thin text-md text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores repellendus quia fuga dolor.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Third;
