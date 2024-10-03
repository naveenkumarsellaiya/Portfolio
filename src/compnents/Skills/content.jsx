import {Routes,Route} from 'react-router-dom'
import Contact from "../Contact/Contact"
import Education from "../Education/Education"
import Main from "../Main/Main"
import Project from "../React-Project/Project"
import Skills from "./Skills"
import About from '../About/About'


const Content=()=>{

    return(
        <div>
 <div className=" w-full -z-10  h-screen p-1
       bg-gradient-to-r from-neutral-800 to-slate-700  text-white
       top-0 fixed "></div>
      
            <Routes>
            <Route path="/"element={ <Main/>}/>
            
            {/* <Route path="/main"element={  <Main />}/> */}
            <Route path="/about"element={ <About/>}/>
            <Route path="/skils"element={ <Skills/>}/>
            <Route path="/education"element={<Education/>}/>
            <Route path="/project"element={<Project/>}/>
            <Route path="/contact"element={ <Contact/>}/>
            {/* <Route path=""element={}/> */}
          </Routes>
        </div>
    )
}
export default Content