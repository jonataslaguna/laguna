import Card from "../../components/Card";
import Footer from "../../components/Footer";
import styles from "./projects.module.css"

function Projects() {
  return (
    <>
      <div className={ styles.projectsContainer }>
    
        <div className={ styles.projectsHeader }>
          <h1>Projetos</h1>
          <h3>Aqui estão alguns dos meus projetos</h3>
        </div>

        <div className={ styles.cards }>

          <Card 
            img="/images/projects/netflix.jpg"
            projectName="Netflix Clone"
            description="App de filmes e séries"
            technologies="Typescript, React, Testing Library, API, ContextApi, CSS"
            livePreviewLink="https://netflix-clone-flax-ten-98.vercel.app"
            viewCodeLInk="https://github.com/jonataslaguna/netflix-clone"
          />

          <Card 
            img="/images/projects/ibge.jpg"
            projectName="Trybe News"
            description="App de notícias utilizando API do IBGE"
            technologies="Typescript, React, Testing Library, API, ContextApi, CSS"
            livePreviewLink="https://trybe-news-eight.vercel.app"
            viewCodeLInk="https://github.com/jonataslaguna/trybe-news"
          />

          <Card 
            img="/images/projects/recipes-app-logo.svg"
            projectName="Recipes App"
            description="⚠️ Leia o ReadMe antes de utilizar ⚠️"
            technologies="Typescript, React, JavaScript, Testing Library, API, ContextApi, CSS"
            livePreviewLink="https://recipes-app-xz1r.vercel.app"
            viewCodeLInk="https://github.com/jonataslaguna/recipes-app"
          />

        </div>
      </div>
        <div className={ styles.footer }>
          <Footer />
        </div>
    </>
  );
}

export default Projects;