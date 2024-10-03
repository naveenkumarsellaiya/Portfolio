import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };
  const handleNumberInput = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove any non-numeric characters
    e.target.value = value;
  };

  return (
    <div data-aos="fade-down" className="w-full h-fit p-2">
      <h2 className="mt-3 text-xl font-serif text-white" id="nav">
        Contact Me:
      </h2>
      <form
        className="flex flex-col justify-center items-center gap-2 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 md:w-[550px] w-[450px]">
          <div className="flex justify-around">
            <input
              type="text"
              placeholder="Firstname"
              className="w-[250px] h-8 p-2 outline-none mr-2"
              required
            />
            <input
              type="text"
              placeholder="Lastname"
              className="w-[250px] h-8 p-2 outline-none"
              required
            />
          </div>
          <div className="flex justify-around">
          <input
              type="tel"
              placeholder="Mobile Number"
              className="w-[250px] h-8 p-2 outline-none mr-2"
              pattern="[0-9]{10}"
              onInput={handleNumberInput} 
              maxLength="10"
              title="Please enter exactly 10 digits"
              required
            />
            <input
            
              type="email"
              placeholder="Email"
              className="w-[250px] h-8 p-2 outline-none"
              required
            />
          </div>
          <div className="flex flex-col w-full mx-auto">
            <textarea
              placeholder="Your Message"
              cols="30"
              rows="10"
              maxLength={40}
              required
              className="border-none outline-none p-2 h-[300px] resize-none"
            ></textarea>
            <button
              type="submit"
              className="p-2 hover:bg-opacity-25 transition-all ease-linear delay-75 duration-200 bg-green-400 mt-2 mb-3 text-black font-serif"
            >
              Contact Me
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
