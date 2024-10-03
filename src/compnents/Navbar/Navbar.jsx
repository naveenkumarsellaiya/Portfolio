import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState();
  const toggleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeNav = () => {
    setIsMobileMenuOpen("");
    setShowcontent((prev) => !prev);
  };
  const show = () => {
    setShowcontent((prev) => !prev);
  };

  const [showcontent, setShowcontent] = useState(false);

  useEffect(() => {
    let timer;
    if (showcontent) {
      timer = setTimeout(() => {
        setShowcontent(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [showcontent]);

  return (
    <section className="p-4 text-yellow-300">
      <div className="flex justify-between ">
        <div className="flex gap-3 items-center">
          <li
            className="transition duration-150 ease-out cursor-pointer  hover:text-green-300 hover:font-bold text-yellow-400 navbarafter "
            onClick={() => {
              show();
              closeNav();
            }}
            id="nav"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "hover:text-gray-400"
              }
            >
              Home
            </NavLink>
          </li>
        </div>

        <ul
          className={`text-[17px] md:h-2 gap-[20px] md:flex absolute bg-slate-600 md:bg-transparent right-0 opacity-95 z-10 flex h-[10vh] top-[50px] md:top-6 w-[100%]  mr-5  md:justify-end justify-evenly items-center flex-row transition-all duration-150 delay-100 ease-in-out 
                    ${
                      isMobileMenuOpen
                        ? "left-0 transition-all duration-500 delay-500 ease-in"
                        : "-left-[10%] transition-all duration-500 delay-500 ease-in hidden"
                    }`}
        >
          {showcontent && (
            <div className="absolute top-[550px] font-mono text-xl tracking-tighter right-0">
              Myself
            </div>
          )}

          <li
            className="transition duration-150 ease-out cursor-pointer  hover:text-green-300 navbarafter "
            onClick={closeNav}
            id="nav"
          >
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "hover:text-gray-400"
              }
            >
              About
            </NavLink>{" "}
          </li>
          <li
            className="transition duration-150 ease-out cursor-pointer  hover:text-green-300 navbarafter "
            onClick={closeNav}
            id="nav"
          >
            <NavLink
              to="/skils"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "hover:text-gray-400"
              }
            >
              Skils
            </NavLink>
          </li>
          <li
            className="transition duration-150 ease-out cursor-pointer hover:text-green-300 navbarafter "
            onClick={closeNav}
            id="nav"
          >
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "hover:text-gray-400"
              }
            >
              Education
            </NavLink>
          </li>
          <li
            className="transition duration-150 ease-out cursor-pointer  hover:text-green-300 navbarafter "
            onClick={closeNav}
            id="nav"
          >
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "hover:text-gray-400"
              }
            >
              Project
            </NavLink>
          </li>
          <li
            className="transition duration-150 ease-out cursor-pointer  hover:text-green-300 navbarafter "
            onClick={closeNav}
            id="nav"
          >
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "hover:text-gray-400"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div
          className="flex flex-col gap-1 md:hidden cursor-pointer"
          id="icon"
          onClick={toggleMobileMenuOpen}
        >
          <span className="w-8 h-[3px] bg-white "></span>
          <span className="w-8 h-[3px] bg-white "></span>
          <span className="w-5 flex self-end h-[3px] bg-white "></span>
        </div>
      </div>
    </section>
  );
}
export default Navbar;
