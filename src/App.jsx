
import './App.css'
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import About from './sections/About/About';
import Work from './sections/Work/Work';
import Certifications from './sections/Certifications/Certifications';

function App() {
  return (
  <>
    <Hero/>
    <Work/>
    <Projects/>
    <Skills/>
    <About/>
    <Certifications/>
    <Contact/> 
    <Footer/>
  </>
  );
}

export default App
