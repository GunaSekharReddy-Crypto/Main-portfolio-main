import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiance from './components/Experiance/Experiance'
import FormData from './components/FormData/FormData'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import ParticleBackground from './components/ParticleBackground'
import { Projects } from './components/Projects/Projects'

const App = () => {
  return (
    <>
      <ParticleBackground url="http://foo.bar/particles.json" />
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Projects />
      <Skills />
      <FormData />
      <Footer />
    </>
  )
}

export default App


