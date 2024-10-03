import React,{useEffect} from "react";
import Aos from 'aos'
import'aos/dist/aos.css'
const Project = () => {
        useEffect(()=>{
      Aos.init({duration:3000})
        },[])
  return (
    <div className="w-full  text-white p-2">
      <h2 className="text-xl  font-serif font-bold ml-2 text-blue-200 cursor-pointer" id="nav">
        Project:
      </h2>
      <div data-aos="fade-down" className="flex justify-center flex-wrap items-center  flex-col md:flex-row w-full gap-3 rounded-sm">
        <div
          data-aos="fade-down"
          className=" w-[360px] h-[220px] relative justify-center items-center "
        >
            <img src="image/portflio2.png" alt="" className="h-full w-full" />
       <div className="absolute top-0  opacity-0 hover:opacity-100 bg-black bg-opacity-60 w-full h-full text-center flex flex-col justify-center items-center transition-opacity duration-300">
            <h2 className="font-bold text-green-500">My Portfollio</h2>
            <p className=" text-sm mt-2 m-2 indent-5 text-justify">
            showcases a responsive webpage that integrates animations and utilizes the Tailwind CSS framework. Built using React concepts, it highlights my skills in creating dynamic, user-friendly applications while maintaining a clean and modern design. This portfolio serves as a testament to my journey as a React developer and my commitment to delivering quality web experiences.
            </p>
          </div>
        </div>
       
        <div
          data-aos="fade-down"
          className="  w-[360px] h-[220px] relative justify-center items-center"
        >
         <h2 className="w-full h-full border rounded-lg flex justify-center items-center text-3xl font-bold">SOON</h2>
          <div className="absolute top-0  opacity-0 hover:opacity-100 bg-black bg-opacity-30 w-full h-full text-center flex flex-col justify-center items-center transition-opacity duration-300">
            <h2>Soon</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos odio voluptate facilis aut optio. Earum laboriosam
              velit ea in, illum ab officiis, ullam esse nostrum et laborum sed
              quos maxime?
            </p>
          </div>
        </div>
        
        <div
          data-aos="fade-down"
          className="  w-[360px] h-[220px] relative justify-center items-center"
        >
         <h2 className="w-full h-full border rounded-lg flex justify-center items-center text-3xl font-bold">SOON</h2>
          <div className="absolute top-0  opacity-0 hover:opacity-100 bg-black bg-opacity-30 w-full h-full text-center flex flex-col justify-center items-center transition-opacity duration-300">
            <h2>Soon</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos odio voluptate facilis aut optio. Earum laboriosam
              velit ea in, illum ab officiis, ullam esse nostrum et laborum sed
              quos maxime?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
