

import './App.css'
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import About from './components/About';
import Main from './components/Main';
import Studies from './components/Studies';
import Abilities from './components/Abilities';
import Projects from './components/Projects';




function App() {

//dasdad
  return (
    <> 
      <div className="relative">
        <ParticlesBackground />
        <div className="relative z-10 scroll-smooth  ">
         
          {/* Área de trabajo */}
         
          <Header />
          <Main/>         
          <About/>
          <Studies/>
          <Abilities/>
          <Projects/>
         
         
        </div>
        {/*  Fin área de trabajo */}
      </div>
    </>
  )
}

export default App
