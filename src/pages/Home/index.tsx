import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PortfolioContext from '../../context/PortfolioContext';

import styles from './home.module.css'

function Home() {
  const { handleClickRoutes } = useContext(PortfolioContext);

  return (
    <section className={ styles.container }>
      <div className={ styles.content }>
        <h1>Jonatas Laguna</h1>
        <h3>Full Stack Developer</h3>
        <div className={ styles.myImageDivMobile }>
        <span className={ styles.circleSpinMobile }></span>
        <img src="/images/jonatas-laguna.png" alt="jonatas laguna" />
        </div>
          <p>
            Olá, seja bem vindo ao meu portfólio pessoal, 
            explore meus projetos e fique à vontade para 
            entrar em contato.
          </p>
          <div className={ styles.btnBox }>
            <Link to='/about' onClick={ () => handleClickRoutes('/about')}>About</Link>
            <Link to='/projects' onClick={ () => handleClickRoutes('/projects')}>Projets</Link>
          </div>
        <div className={ styles.links }>
          <a href="https://github.com/jonataslaguna" target="_blank"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/jonataslaguna/" target="_blank"><i className='bx bxl-linkedin'></i></a>
        </div>
      </div>
      <div className={ styles.myImageDiv }>
        <img src="/images/jonatas-laguna.png" alt="jonatas laguna" />
        <span className={ styles.circleSpin }></span>
      </div>
    </section>
  );
}

export default Home;