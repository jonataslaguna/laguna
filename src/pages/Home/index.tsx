import Footer from "../../components/Footer";
import Presentation from "../../components/Presentation";
import Projects from "../Projects";
import Tech from "../Tech";

function Home () {
  return (
    <div>  
      <Presentation />
      <Tech />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home;