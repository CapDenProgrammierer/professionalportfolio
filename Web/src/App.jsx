import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* Aquí agregaremos más secciones */}
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#09dfff] to-[#0964ff] bg-clip-text text-transparent mb-4">Más secciones próximamente...</h2>
          <p className="text-white">Experiencia y Contacto</p>
        </div>
      </div>
      
      {/* Botón Scroll to Top */}
      <ScrollToTop />
    </div>
  )
}

export default App
