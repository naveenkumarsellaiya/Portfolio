import React, { useEffect } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Route, Routes } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const [text] = useTypewriter({
    words: ["React Developer...", "Frontend Developer...", "Web Developer..."],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 60,
    delaySpeed: 1000,
  });

  return (
    <div className="flex  flex-col items-center justify-around  cursor-default order-0 md:h-screen h-fit md:order-1 md:flex-row w-[95%]">
      <div
        data-aos="fade-down"
        className=" w-full -z-10  h-screen p-1
       text-white
       top-0 fixed bg-customGray bg-gradient-to-br from-$2d3436 to-customBlack"
      ></div>
      <div
        data-aos="fade-up"
        className="w-4/5 text-white mt-14 md:w-2/4 font-bold"
      >
        <h3 className="text-2xl text-teal-100 font-bold">Hello It's Me</h3>

        <h2 className="font-serif text-4xl text-teal-100  font-bold tracking-wider">
          Naveenkumar S
        </h2>
        <div>
          <h2 className=" text-teal-100  text-3xl w-[400px]">
            I Am {""}
            <span className="font-bold  w-full  text-green-600">{text}</span>
            <Cursor /> {/* Adds the blinking cursor */}
          </h2>
        </div>

        <p className="p-1 text-teal-50  mt-2 mb-2 indent-5 font-normal">
          I’m Naveenkumar, a junior React developer passionate about building
          interactive and dynamic web applications. Recently graduated, I’ve
          honed my skills in modern JavaScript frameworks and am eager to take
          on real-world challenges.
        </p>
        <div className="flex w-full gap-3 p-4">
      
          <a href="https://www.linkedin.com/in/naveenkumar24/" target="_blank">
            <CiLinkedin
              className="text-3xl hover:scale-125 transition-all ease-linear duration-150 cursor-pointer"
              id="nav"
            />
          
          </a>  |
          <a href="https://github.com/naveenkumarsellaiya" target="_blank">
            {" "}
            <FaGithub className="text-3xl hover:scale-125 transition-all ease-linear duration-150 cursor-pointer" />
          </a>
          |
          <a href="https://www.instagram.com/dora_ns_24/" target="_blank">
            <FaInstagram className="text-3xl hover:scale-125 transition-all ease-linear duration-150 cursor-pointer" />
          </a>
        </div>
        <button className="px-4 py-2 mb-2 text-white transition-all duration-300 bg-blue-600  rounded-md hover:bg-blue-500 focus:opacity-0 hover:scale-105">
          <a
            href="image/Naveenkumar S Resume.pdf" // Make sure this path is correct relative to your public folder
  download="Naveenkumar S Resume.pdf"
          >
            {""}
            Download Resume
          </a>
        </button>
      </div>
      <div className="relative p-6 top-2 md:top-auto">
        <img
          src="image/pic.png"
          alt="Naveenkumar pic"
          className="w-80 h-80  rounded-full border-4 bg-gradient-to-b from-violet-400 via-indigo-500 to-blue-600 p-1 flex hover:border-l-pink-700 bg-opacity-70 hover:border-b-rose-700 hover:border-t-pink-700 hover:border-r-rose-700 hover:p-2 transition-all ease-in-out hover:delay-75 duration-500"
        />
      </div>
    </div>
  );
}

export default Main;
