import { useEffect } from "react";
import { FaDiceFive } from "react-icons/fa";
import Aos from 'aos'
import'aos/dist/aos.css'
const About =()=>{
    useEffect(()=>{
        Aos.init({duration:3000})
          },[])
    return(
      
        
        <div className="text-white flex flex-col " data-aos="fade-down">

        <div className="text-xl  font-serif font-bold ml-2 text-blue-200 cursor-pointer">
        About:
        <div  className="flex flex-col items-center justify-center w-full  cursor-default order-0 md:h-screen h-[500px]  md:mt-auto  md:order-1 md:flex-row p-2">
       
       
      <img 
         src="image/bio1.jpg"
          alt="Naveenkumar pic" 
          className="w-80 flex border-white h-80 ml-10  rounded-xl "  />
          <div className=" p-2 mr-2 ml-10">
            <h2 className="text-2xl mb-3 text-violet-400  cursor-pointer ">React Devloper:-</h2>
            <p className="indent-5 text-[17px] text-justify flex flex-wrap lg:w-[600px text-teal-50">Hello, I am Naveenkumar S, a passionate React developer. I have completed my Bachelor of Computer Applications (BCA) from Imayam Arts and Science College. Recently, I completed a specialized React development training program at Besant Technologies, Velachery, in September 2024.I am dedicated to building dynamic and responsive web applications using React, and I'm constantly expanding my knowledge and skills in the field. Originally from Trichy, I am enthusiastic about exploring new opportunities to grow and contribute in the world of web development</p>
          </div>
        </div>
          </div>
        </div>
    )
}
export default About;