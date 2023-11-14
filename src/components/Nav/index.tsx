import { Link } from 'react-router-dom';
import { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';

import styles from './nav.module.css'

function Nav() {
  const { handleClickRoutes, activeLink } = useContext(PortfolioContext);
  
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.linksNav}>
        <li onClick={() => handleClickRoutes('/')}>
          <Link className={activeLink === '/' ? styles.active : ''} to='/'>Home</Link>
        </li>
        <li onClick={() => handleClickRoutes('/about')}>
          <Link className={activeLink === '/about' ? styles.active : ''} to='/about'>About</Link>
        </li>
        <li onClick={() => handleClickRoutes('/techStack')}>
          <Link className={activeLink === '/techStack' ? styles.active : ''} to='/techStack'>Skills</Link>
        </li>
        <li onClick={() => handleClickRoutes('/projects')}>
          <Link className={activeLink === '/projects' ? styles.active : ''} to='/projects'>Projects</Link>
        </li>
        <li onClick={() => handleClickRoutes('/contact')}>
          <Link className={activeLink === '/contact' ? styles.active : ''} to='/contact'>Contact</Link>
        </li>
        <li className={styles.gitHubAndLinkedinLinks}>
          <a href='https://github.com/jonataslaguna' target='_blank'>
            <img src='svg/gitHub.svg' alt='GitHub Link' />
          </a>
          <a href='https://www.linkedin.com/in/jonataslaguna/' target='_blank'>
            <img src='svg/linkedin.svg' alt='Linkedin Link' />
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;