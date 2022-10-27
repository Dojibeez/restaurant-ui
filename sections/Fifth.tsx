import { motion } from "framer-motion";

type Props = {};

const Fifth = (props: Props) => {
  return (
    <div className="h-screen w-screen max-w-[100%] relative text-[#060c08] dark:text-slate-200 flex items-center justify-center">
      <div className="flex flex-col justify-center items-center md:items-start md:flex-row max-w-7xl mx-auto ">
        <motion.iframe
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10498.957847485799!2d2.3292406951412477!3d48.86317838477695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e267a32d441%3A0xb0088e1f7c07f451!2sPyramide%20du%20Louvre!5e0!3m2!1sfr!2sfr!4v1666879589851!5m2!1sfr!2sfr"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="hidden md:flex shadow-2xl dark:shadow-transparent dark:invert"
        ></motion.iframe>
        <motion.iframe
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10498.957847485799!2d2.3292406951412477!3d48.86317838477695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e267a32d441%3A0xb0088e1f7c07f451!2sPyramide%20du%20Louvre!5e0!3m2!1sfr!2sfr!4v1666897065858!5m2!1sfr!2sfr"
          width="300"
          height="200"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="md:hidden shadow-2xl dark:shadow-transparent dark:invert"
        ></motion.iframe>
        <div className="dark:text-slate-200 text-[#060c08] transition-all duration-100 flex-1 p-10 flex flex-col gap-y-4 md:gap-y-14">
          <motion.span
            initial={{ opacity: 0 }}
            transition={{ duration: 1.9 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="italic text-lg md:text-2xl"
          >
            Pyramide de verre Emblématique,
            <br /> 75001,
            <br /> Paris
          </motion.span>
          <p className="flex flex-col gap-y-1 md:gap-y-4">
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Monday to Thursday - 9AM to 9PM
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.9 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Friday and Saturday - 9AM to 11PM
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2.3 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Sunday - 2PM to 9PM
            </motion.span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fifth;
