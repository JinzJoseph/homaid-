import React from "react";
import BannerPng from "../assets/banner.png";
import { motion } from "framer-motion";


const Banner2 = () => {
  return (
    <div className="bg-white">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 sm:gap-16 sapce-y-6 md:space-y-14 ">
        {/* banner text section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left spae-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              {" "}
              Join Our Community to Start your Journey
            </h1>
          </div>
          <p className="text-dark2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!
          </p>
          <div>
          <a href="" className="primary-btn !mt-8">
            Join Now
          </a>
          </div>
         
        </motion.div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt=""
            className="w-[350px ] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
