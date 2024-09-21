import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const SubScripeBannerSection = () => {
  return (
    <section className="bg-[#f7f7f7f] ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="conatner py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              {" "}
              Contact us
            </h1>

            <p>
             Email:acareforhome@gmail.com 
            </p>
            <p>phoneNumber:7593990128</p>
         
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SubScripeBannerSection;
