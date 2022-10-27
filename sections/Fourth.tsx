import { TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { Dayjs } from "dayjs";
import { motion } from "framer-motion";

type Props = {};

const color = "#ece8f0";

const Fourth = (props: Props) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  console.log({ value });
  return (
    <div className="h-screen w-screen max-w-[100%] relative text-[#060c08] dark:text-slate-200 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-10 md:gap-y-28 items-center justify-center p-5 md:p-10 md:py-24 border border-[#060c08]/10 dark:border-slate-200/10 relative"
      >
        <div className="w-6 h-6 absolute top-0 left-0 border-t border-l  border-[#060c08]/40 dark:border-slate-200/40" />
        <div className="w-6 h-6 absolute top-0 right-0 border-t border-r  border-[#060c08]/40 dark:border-slate-200/40" />
        <div className="w-6 h-6 absolute bottom-0 left-0 border-b border-l  border-[#060c08]/40 dark:border-slate-200/40" />
        <div className="w-6 h-6 absolute bottom-0 right-0 border-b border-r  border-[#060c08]/40 dark:border-slate-200/40" />
        <h1 className="font-nanum uppercase text-xl md:text-3xl tracking-[4px] ">
          Make a reservation
        </h1>
        <form className="flex flex-col space-y-4 w-[300px] md:w-[500px]">
          <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 outline-none p-3 bg-black text-slate-200/80 transition-all duration-200 focus:text-white"
            />
            <input
              type="text"
              placeholder="Name"
              className="flex-1 outline-none p-3 bg-black text-slate-200/80 transition-all duration-200 focus:text-white"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full outline-none p-3 bg-black text-slate-200/80 transition-all duration-200 focus:text-white"
          />

          <select
            name="people"
            id=""
            className="w-full outline-none p-3 bg-black text-slate-200/80 transition-all duration-200 focus:text-white cursor-pointer"
            defaultValue="2"
          >
            <option value="1">1 person</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            <option value="4">4 people</option>
            <option value="5">5 people</option>
            <option value="6">6 people</option>
          </select>

          <DateTimePicker
            className=" bg-black w-full"
            renderInput={props => (
              <TextField
                {...props}
                sx={{
                  svg: { color },
                  input: { color },
                  label: { color },
                }}
              />
            )}
            label="Date & Time"
            value={value}
            onChange={newValue => {
              setValue(newValue);
            }}
          />
        </form>
      </motion.div>
    </div>
  );
};

export default Fourth;
