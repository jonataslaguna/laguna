import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tech from './pages/Tech';
import Projects from './pages/Projects';
import Header from './components/Header';
import NotFound from './pages/NotFound';


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
      <Route path="*" element={<NotFound />} />
     </Routes>
   </>
  )
}

export default App
