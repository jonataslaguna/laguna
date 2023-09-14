import Card from "../../components/Card";
import Footer from "../../components/Footer";
import styles from "./projects.module.css"

function Projects() {
  const route = window.location.pathname;
  return (
    <>
      <div className={ styles.projectsContainer }>
    
        <div className={ styles.projectsHeader }>
          <h2>Projects</h2>
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
      </div>
        { route === "/projects" && 
         <div className={ styles.footer }>
           <Footer />
         </div>
        }
    </>
  );
}

export default Projects;