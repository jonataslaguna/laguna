import Footer from "../../components/Footer";
import styles from './about.module.css';

function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.about}>
          <div>
            <h1>Sobre Mim</h1>
            <p>
              Tenho 27 anos e atualmente moro em São Paulo capital. Estou imerso no estudo de desenvolvimento web full stack na <a href="https://www.betrybe.com/" target="_blank">Trybe</a>. Já concluí minha formação em front-end e agora estou focado em aprimorar minhas habilidades tanto no front-end quanto no back-end, continuando a busca pelo aprimoramento constante. Meu portfólio apresenta projetos que representam minha jornada de aprendizado e meu compromisso com a evolução constante. Estou pronto para enfrentar desafios, resolver problemas e colaborar em equipe, acreditando que o aprendizado e a comunicação contínua são essenciais no mundo da tecnologia. Para mais informações, acesse meu perfil no <a href="https://www.linkedin.com/in/jonataslaguna/" target="_blank">Linkedin</a>.
            </p>
          </div>
          <div className={styles.aboutEducation}>
            <h2>Formação</h2>
            <h3>Desenvolvimento Web Full Stack - <a href="https://www.betrybe.com/" target="_blank" className={ styles.trybeLink }>Trybe</a>, conclusão em Março de 2024.</h3>
            <p>
              Mais de 1.500 horas de aulas com foco em: Introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About;