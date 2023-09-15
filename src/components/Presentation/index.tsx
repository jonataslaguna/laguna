import styles from './presentation.module.css'
import { Link } from 'react-router-dom';

function Presentation() {
  return (
    <section className={ styles.container }>
      <div className={ styles.content }>
        <h1>Jonatas Laguna</h1>
        <h3>Front-end Developer</h3>
        <p>Olá, seja bem vindo ao meu portfólio pessoal, aqui você pode encontrar alguns dos meus projetos e entrar em contato comigo.
        </p>
        <div className={ styles.btnBox }>
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projets</Link>
        </div>
        {/* <img src="/images/profileIcon.png" alt="image exemple" /> */}
        <div className={ styles.links }>
          <a href="#"><i className='bx bxl-github'></i></a>
          <a href="#"><i className='bx bxl-linkedin'></i></a>
        </div>
      </div>
    </section>
  );
}

export default Presentation;