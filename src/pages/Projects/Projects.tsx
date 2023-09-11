import Card from "../../components/Card/Card";
import styles from "./projects.module.css"

function Projects() {
  return (
    <div className={ styles.projectsContainer }>
  
      <div className={ styles.projectsHeader }>
        <h2>Projects</h2>
        <h3>Here are some of my projects</h3>
      </div>

      <div className={ styles.cards }>
      <Card 
        img="https://via.placeholder.com/150"
        projectName="Recipes App"
        description="Mobile recipe app"
        technologies="Typescript, React, JavaScript"
        livePreviewLink="https://recipes-app-xz1r.vercel.app"
        viewCodeLInk="https://github.com/jonataslaguna/recipes-app"
       />




      </div>
    </div>
  );
}

export default Projects;