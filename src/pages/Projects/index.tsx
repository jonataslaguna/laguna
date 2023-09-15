import Card from "../../components/Card";
import Footer from "../../components/Footer";
import styles from "./projects.module.css"

function Projects() {
  return (
    <>
      <div className={ styles.projectsContainer }>
    
        <div className={ styles.projectsHeader }>
          <h1>Projects</h1>
          <h3>Aqui estão alguns dos meus projetos</h3>
        </div>

        <div className={ styles.cards }>
        <Card 
          img="https://via.placeholder.com/150"
          projectName="Recipes App"
          description="Mobile recipe app"
          technologies="Typescript, React, JavaScript, React Testing Library, API, CSS"
          livePreviewLink="https://recipes-app-xz1r.vercel.app"
          viewCodeLInk="https://github.com/jonataslaguna/recipes-app"
        />
        </div>
        <div className={ styles.footer }>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Projects;