
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react'
import {useTypewriter,Cursor}from 'react-simple-typewriter'
import Navbar from './compnents/Navbar/Navbar';
import Content from './compnents/Skills/content';



export default function App() {
  return (
   <BrowserRouter>

<Navbar/>
    <Content/>
  {/* <About/> */}
      {/* <Skills/> */}
    {/* <Education/>
    <Project/>
    <Contact/> */}
 
   </BrowserRouter>
 

  )
}
