import React from "react";
import NavBar from "./NavBar";
import { FaArrowRight } from "react-icons/fa";
import Blog from "../assets/blob.svg";
import clean from "../assets/clean.jpg";
import { animate, motion } from "framer-motion";
export const Fadeup = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },animate:{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            stiffness:100,
            duration:0.5,
            delay:delay,
            ease:"easeInOut"
        }
    }}
  };

const HeroSection = () => {
  return (
    <div className="bg-light  overflow-hidden relative">
      <NavBar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        {/* brand info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20 ">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
            variants={Fadeup(0.6)}
            initial="initial"
            animate="animate"
            
            
            className="text-xl lg:text-sm font-bold !leading-snug">
              We offer reliable, professional cleaning services tailored to your needs. Whether it's routine cleaning, deep cleans, or a special request, our team is here to without the 
              <span className="text-primary"> make your home sparkle. Enjoy a fresh, spotless home </span> hassle—book with us today
            </motion.h1>
            <motion.div 
            variants={Fadeup(0.8)}
            initial="initial"
            animate="animate"
            
             className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2 group">
                Get started
                <FaArrowRight className="text-xl group-hover:translate-x-2 group-hover:rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        {/* brand image */}

        <div className="flex justify-center items-center ">
          <motion.img
            variants={Fadeup(0.8)}
            initial={{x:50,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.6,delay:0.4,ease:"easeInOut"}}
            src={clean}
            alt=""
            className="max-w-[400px] xl:w-[600px] relative z-10 drop-shadow rounded-xl shadow-3xl"
          />
          <motion.img
            variants={Fadeup(0.8)}
            initial={{x:50,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.6,delay:0.4,ease:"easeInOut"}}
            src={Blog}
            alt=""
            className="absolute -bottom-32 w-[1000px ] md:w-[1800px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
