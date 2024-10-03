import React,{useEffect} from "react";
import Aos from 'aos'
import'aos/dist/aos.css'
const Skills = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
      },[])
  return (
    <div  data-aos="fade-down" className="p-2 h-screen w-full  justify-center items-center">
{/* heading */}
      <h2 id="nav" className=" text-xl  font-serif font-bold ml-2 text-blue-200 cursor-pointer">Skils:</h2>
      <div className="w-full gap-3 flex flex-wrap justify-around  text-white p-3">
{/* skills div1 */}
        <div  className="w-[200px] space-y-1 mr-2 p-2 h-[250px] border">
          <h2 className="text-center font-bold cursor-pointer">Tech Skils</h2>
          <ul className="flex flex-col justify-evenly h-full">
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/html.png" alt="" />HTML</li>
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/css.png" alt="" />CSS</li>
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/js.png" alt="" />Javascript</li>
          </ul>
        </div>
{/* skills div2 */}
        <div  className="w-[200px]  h-[250px] border p-2 space-y-2">
          <h2 className="text-center font-bold">Tech frameWork</h2>
          <ul className="flex flex-col justify-evenly h-full">
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/tailwind.png" alt="" />Tailwind</li>
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/react.png" alt="" />React js</li>
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/redux.png" alt="" />Redux</li>
          </ul>
        </div>
{/* skills div3 */}
        <div className="w-[200px] h-[250px] border p-2 space-y-2 ">
          <h2 className="text-center font-bold">Other Skils:</h2>
          <ul className="flex flex-col justify-evenly h-full">
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/git.png" alt="" />Git/GitHub</li>
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/github.png" alt="" />GitHub</li>
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/vs code.png" alt="" />VS Code</li>
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/type.png" alt="" />Type Writer</li>
          </ul>
        </div>
{/* skills div 4 */}
        <div  className="w-[200px] h-[250px] border p-2 space-y-2 ">
          <h2 className="text-center font-bold">Upcomming Tech Skills</h2>
          <ul className="flex flex-col justify-evenly h-full">
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="text-white w-6" src="image/java.png " alt="" />Java</li>
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/sql.png" alt="" />SQL</li>
            <li className="flex gap-2 font-bold items-center cursor-pointer justify-start ml-2"><img className="w-6" src="image/typescript.png" alt="" />Type Scipt</li>
           </ul>
        </div>
{/* skils div 5 */}
        <div
          
          className="w-[200px] h-[250px] border p-2 space-y-2 ">
              <h2 className="text-center font-bold">Upcomming Other Skils:</h2>
              <ul className="flex flex-col space-y-5  h-full">
              <li className="flex gap-2 font-bold items-center justify-start ml-2"><img className="w-6" src="image/word.png" alt="" /> ms word</li>
              <li className="flex gap-2 font-bold items-center justify-start ml-2"><img className="w-6" src="image/excel.png" alt="" />ms Excel</li>
              </ul>
        </div>

      </div>
    </div>
  );
};
export default Skills;
