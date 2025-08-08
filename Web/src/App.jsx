import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
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
      <Contact />
      
      {/* Botón Scroll to Top */}
      <ScrollToTop />
    </div>
  )
}

export default App
