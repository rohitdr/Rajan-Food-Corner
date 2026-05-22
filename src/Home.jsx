import React from 'react'
import Hero from './Components/Hero'
import Menu from './Components/Menu'
import Gallery from './Components/Gallery'
import Testimonials from './Components/Testimonials'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'

export default function Home() {
  return (
  <>

  <Hero></Hero>
  <Menu></Menu>
  {/* <Gallery></Gallery> */}
  <Testimonials></Testimonials>
  <About></About>
  <Contact></Contact>
  </>
  )
}
