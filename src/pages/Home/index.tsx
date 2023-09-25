import styles from './home.module.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className={ styles.container }>
      <div className={ styles.content }>
        <h1>Jonatas Laguna</h1>
        <h3>Front-end Developer</h3>
        <div className={ styles.myImageDivMobile }>
        <span className={ styles.circleSpinMobile }></span>
        <img src="/images/jonatas-l.jpg" alt="jonatas laguna" />
        </div>
        <p>Olá, seja bem vindo ao meu portfólio pessoal, aqui você pode encontrar alguns dos meus projetos e entrar em contato comigo.</p>
        <div className={ styles.btnBox }>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projets</Link>
        </div>
        <div className={ styles.links }>
          <a href="https://github.com/jonataslaguna" target="_blank"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/jonataslaguna/" target="_blank"><i className='bx bxl-linkedin'></i></a>
        </div>
      </div>
      <div className={ styles.myImageDiv }>
       <img src="/images/jonatas-l.jpg" alt="jonatas laguna" />
       <span className={ styles.circleSpin }></span>
      </div>
    </section>
  );
}

export default Home;