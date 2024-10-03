import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="relative text-white w-full p-2">
      <h2 id="nav" className="text-xl  font-serif font-bold ml-2 text-blue-200 cursor-pointer mb-2">
        Education:
      </h2>
      {/* double line */}
      <div>
        <div
          data-aos="fade-down"
          className="h-[600px] w-1 left-3 bg-blue-500 absolute"
        >
          <div
           
            className="w-4 h-4 bg-orange-500 rounded-full z-50 absolute -left-1.5   -top-1"
          ></div>
          <div
            data-aos="fade-down"
            className="w-4 h-4  rounded-full z-50 absolute -left-1.5      -bottom-1"
          ></div>
        </div>
        <div
          data-aos="fade-up"
          className="h-[600px] w-1 right-3 bg-blue-500 absolute"
        >
          <div
            
            className="w-4 h-4 bg-orange-500 rounded-full z-50 absolute -left-1.5     -top-1"
          ></div>
          <div
         
            className="w-4 h-4 bg-orange-600 rounded-full z-50 absolute -left-1.5    -bottom-1"
          ></div>
        </div>
      </div>

      {/* college */}

      <div className="relative">
        <div data-aos="fade-left" className=" w-full h-[200px] ">
          <div className="h-0.5 w-[40%] md:w-[60%] lg:w-[70%] bg-orange-200 left-3  absolute top-24 flex">
            <div className="h-0.5 w-[100%]  bg-orange-200  absolute top-1 flex"></div>
            <div className="w-5 h-0.5 -top-[5px] z-10 rounded-r-full rotate-45 absolute -right-[5px]  bg-orange-200"></div>
            <div className="w-5 h-0.5 rounded-r-full -rotate-45 top-[9px] absolute -right-[5px] bg-orange-200"></div>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="flex flex-col mr-5 ml-5 absolute top-12 border shadow-md border-orange-200 shadow-black lg:left-[70%] md:left-[60%] left-[40%] p-1 font-serif"
        >
          <h1 className="text-center font-bold font-serif">
            Bacholore of Computer Application
          </h1>
          <h2 className="">Imayam Arts and Science College</h2>
          <p>Percentage: 75.9%</p>
          <div> 2021-2024</div>
        </div>
      </div>

      {/* school 12th */}
      <div className="relative">
        <div data-aos="fade-right" className=" w-full h-[200px] ">
          <div className="h-0.5 w-[40%] md:w-[60%] lg:w-[70%] bg-orange-200 right-3  absolute top-24">
            <div className="h-0.5 w-[100%]  bg-orange-200   absolute top-1 flex"></div>
            <div className="w-5 h-0.5 -top-[5px] z-10 rounded-r-full -rotate-45 absolute -left-[5px]  bg-orange-200"></div>
            <div className="w-5 h-0.5 rounded-r-full rotate-45 top-[9px] absolute -left-[5px] bg-orange-200"></div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="flex flex-col mr-5 ml-5 border-orange-200 absolute top-12 border lg:right-[70%] md:right-[60%] shadow-md shadow-black right-[40%] font-serif p-2"
        >
          <h1 className="text-center font-bold font-serif">HSC</h1>
          <h2>Government Higher Secondary School</h2>
          <p>Percentage: 84.8%</p>
          <div> 2019-2021</div>
        </div>

        {/* school 10th */}

        <div className="relative">
          <div data-aos="fade-left" className=" w-full h-[200px] ">
            <div className="h-0.5 w-[40%] md:w-[60%]  lg:w-[70%] bg-orange-200 left-3  absolute top-24 flex">
              <div className="h-0.5 w-[100%]  bg-orange-200   absolute top-1 flex"></div>
              <div className="w-5 h-0.5 -top-[5px] z-10 rounded-r-full rotate-45 absolute -right-[5px]  bg-orange-200"></div>
              <div className="w-5 h-0.5 rounded-r-full -rotate-45 top-[9px] absolute -right-[5px] bg-orange-200"></div>
            </div>
          </div>

          <div
            data-aos="fade-top"
            className="flex flex-col mr-5 ml-5 absolute top-12 border border-orange-200 shadow-md shadow-black lg:left-[70%] md:left-[60%] font-serif left-[40%] p-2"
          >
            <h1 className="text-center font-bold font-serif">SSLC</h1>
            <h2>Government Higher Secondary School</h2>
            <p>Percentage: 75.8%</p>
            <div> 2018-2019</div>
          </div>
       
        </div>
      </div>
    </div>
  );
};
export default Education;
