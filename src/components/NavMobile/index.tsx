import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioContext from '../../context/PortfolioContext';

import menuIcon from '/svg/menu.svg';
import arrowIcon from '/svg/right.svg';
import xIcon from '/images/icons/x-icon.png';

import styles from './navMobile.module.css'

function NavMobile () {
    const { handleClickRoutes, activeLink } = useContext(PortfolioContext);
    const [showNav, setShowNav ] = useState(false);

    const handleClickShowNav = () => {
      setShowNav(!showNav);
    };

    return (
    <div className={ styles.container }>
      
      <div className={ styles.menu}>
       <Link to='/' className={styles.logo} onClick={() => handleClickRoutes('/')}>Laguna.</Link>
       { showNav ? <img src={xIcon} alt='X Icon' onClick={ handleClickShowNav }/> :<img src={menuIcon} alt='Menu Icon' onClick={ handleClickShowNav }/>}
      </div>

      {showNav && 
      <nav className={styles.navContainer}>

        <ul className={styles.linksNav}>

          <li>
            <Link
              className={activeLink === '/' ? styles.active : ''}
              to='/'
              onClick={() => {
                handleClickShowNav();
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
                handleClickShowNav();
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
                handleClickShowNav();
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
                handleClickShowNav();
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
                handleClickShowNav();
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