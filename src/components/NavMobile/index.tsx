import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioContext from '../../context/PortfolioContext';
import menuIcon from '/svg/menu.svg';
import arrowIcon from '/svg/right.svg';

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
       <Link to='/' className={styles.logo} onClick={() => handleClickRoutes('/')}>Laguna.</Link>
       <img src={menuIcon} alt='Menu Icon' onClick={ handleClick }/>
      </div>
      {showNav && 
      <nav className={styles.navContainer}>

        <ul className={styles.linksNav}>

          <li>
            <Link
              className={activeLink === '/' ? styles.active : ''}
              to='/'
              onClick={() => {
                handleClick();
                handleClickRoutes('/');
              }}
            >
              Home
              <img src={arrowIcon} alt='Arrow Icon' />
            </Link>
          </li>
  
          <li>
            <Link
              className={activeLink === '/about' ? styles.active : ''}
              to='/about'
              onClick={() => {
                handleClick();
                handleClickRoutes('/about');
              }}
            >
              About
              <img src={ arrowIcon } alt='Arrow Icon' />
            </Link>
          </li>
          
          <li>
            <Link 
              className={activeLink === '/techStack' ? styles.active : ''} 
              to='/techStack' 
              onClick={ () => {
                handleClick();
                handleClickRoutes('/techStack')
              }}
            >
              Skills
              <img src={ arrowIcon } alt='Arrow Icon' />
            </Link>
          </li>

          <li>
            <Link 
              className={activeLink === '/projects' ? styles.active : ''} 
              to='/projects' 
              onClick={() => {
                handleClick();
                handleClickRoutes('/projects');
              }}
            >
              Projects
              <img src={ arrowIcon } alt='Arrow Icon' />
            </Link>
          </li>

          <li>
            <Link 
              className={activeLink === '/contact' ? styles.active : ''} 
              to='/contact' 
              onClick={() => {
                handleClick();
                handleClickRoutes('/contact');
              }}
            >
              Contact
              <img src={ arrowIcon } alt='Arrow Icon' />
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