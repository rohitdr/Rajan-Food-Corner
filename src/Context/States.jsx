import { createContext, useContext, useRef, useState } from "react";

const StateContext=createContext()
export const useStateContext = () => useContext(StateContext);
import React from 'react'

export default function States({children}) {
  const heroRef=useRef(null)
  const menuRef=useRef(null)
  const aboutRef=useRef(null)
  const contactRef=useRef(null)
  const galleryRef=useRef(null)
  const testimonialsRef=useRef(null)
  return (
   <StateContext.Provider value={{heroRef,menuRef,aboutRef,contactRef,galleryRef,testimonialsRef}}>
    {children}
   </StateContext.Provider>
  )
}

