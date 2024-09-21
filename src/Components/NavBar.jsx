import React from "react";
import { IoMdMenu } from "react-icons/io";
import {motion} from "framer-motion"
const navbarItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "#",
  },
  {
    id: 3,
    title: "About Us",
    path: "#",
  },
  {
    id: 4,
    title: "Our Team",
    path: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "#",
  },
];
const NavBar = () => {
  return (
    <nav className="relative z-10">
      <div className="container  py-5 flex justify-between">
        {/* log section */}

        <motion.div
        
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        
        
        >
          <h1 className="font-bold text-4xl whitespace-nowrap">
            Hom
            <span className="text-blue-400">Aid+</span>
            
          </h1>
        </motion.div>
        {/* menu section */}
        <div className="hidden lg:block">
          <ul className="flex gap-4 items-center">
            {navbarItems.map((item, index) => {
              return (
                <>
                  <li
                    key={item.path}
                    className=" inline-block whitespace-nowrap px-3 py-2 hover:text-secondary relative"
                  >
                    {item.title}
                  </li>
                  <div className=" w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 group-hover:block hidden"></div>
                </>
              );
            })}
            <button className="primary-btn">sign In</button>
          </ul>
        </div>

        {/* mobile menu */}

        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
