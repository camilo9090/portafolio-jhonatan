import { useState } from 'react'

import './App.css'
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';



function App() {

//dasdad
  return (
    <> 
      <div className="relative">
        <ParticlesBackground />
        <div className="relative z-10">
          {/* Área de trabajo */}
          <Header />
        </div>
        {/*  Fin área de trabajo */}
      </div>
    </>
  )
}

export default App
