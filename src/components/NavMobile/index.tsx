import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioContext from '../../context/PortfolioContext';
import menuIcon from '/svg/menu.svg';

import styles from './navMobile.module.css'

function NavMobile () {
    const { handleClickRoutes, activeLink } = useContext(PortfolioContext);
    const [showNav, setShowNav ] = useState(false);

    const handleClick = () => {
      setShowNav(!showNav);
    };

    return (
    <div className={ styles.container }>
      <div className={ styles.menu}>
       <Link to="/" className={styles.logo} onClick={() => handleClickRoutes('/')}>Laguna.</Link>
       <img src={menuIcon} alt="Menu Icon" onClick={ handleClick }/>
      </div>
      {showNav && 
      <nav className={styles.navContainer}>
        <ul className={styles.linksNav}>
          <li onClick={() => handleClickRoutes('/')}>
            <Link 
              className={activeLink === '/' ? styles.active : ''} 
              to='/' 
              onClick={ handleClick }
            > Home
            </Link>
          </li>
          <li onClick={() => handleClickRoutes('/about')}>
            <Link 
              className={activeLink === '/about' ? styles.active : ''} 
              to='/about' onClick={ handleClick }
            >
              About
            </Link>
          </li>
          <li onClick={() => handleClickRoutes('/techStack')}>
            <Link 
              className={activeLink === '/techStack' ? styles.active : ''} 
              to='/techStack' 
              onClick={ handleClick }
            >
              Skills
            </Link>
          </li>
          <li onClick={() => handleClickRoutes('/projects')}>
            <Link 
              className={activeLink === '/projects' ? styles.active : ''} 
              to='/projects' 
              onClick={ handleClick }
            >
              Projects
            </Link>
          </li>
          <li onClick={() => handleClickRoutes('/contact')}>
            <Link 
              className={activeLink === '/contact' ? styles.active : ''} 
              to='/contact' 
              onClick={ handleClick }
            >
              Contact
            </Link>
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
      }
    </div>
    );
}

export default NavMobile;