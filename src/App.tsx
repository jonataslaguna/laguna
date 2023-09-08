import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Tech from './pages/Tech/Tech';
import Projects from './pages/Projects/Projects';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <>
     <Header />
     <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About />} />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/techStack" element={ <Tech /> } />
      <Route path="/projects" element={ <Projects /> } />
      <Route path="*" element={<div>Not Found</div>} />
     </Routes>
     <Footer />
   </>
  )
}

export default App
