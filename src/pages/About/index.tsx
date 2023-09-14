import Footer from "../../components/Footer";
import styles from './about.module.css';

function About () {
  return (
    <>
      <div className={ styles.container }>
        <div>
          <h1>Sobre Mim</h1>
          <p>
            Meu nome é Jonatas, tenho 27 anos e atualmente moro em São Paulo capital. Estou imerso no estudo de desenvolvimento web full stack na <a href="https://www.betrybe.com/" target="_blank">Trybe</a>. Já concluí minha formação em front-end e agora estou focado em aprimorar minhas habilidades tanto no front-end quanto no back-end, continuando a busca pelo aprimoramento constante. Meu portfólio apresenta projetos que representam minha jornada de aprendizado e meu compromisso com a evolução constante. Estou pronto para enfrentar desafios, resolver problemas e colaborar em equipe, acreditando que o aprendizado e a comunicação contínua são essenciais no mundo da tecnologia. Para mais informações, acesse meu perfil no <a href="https://www.linkedin.com/in/jonataslaguna/" target="_blank">Linkedin</a>.
          </p>  
        </div>
        <img src="images/profileIcon.png" alt="" />
      </div>
      <Footer />
    </>
  )
}

export default About;