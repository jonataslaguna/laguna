import { useContext } from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';
import PortfolioContext from '../../context/PortfolioContext';
import NavMobile from '../NavMobile';

import styles from './header.module.css';

function Header() {
  const { handleClickRoutes } = useContext(PortfolioContext);
  
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo} onClick={() => handleClickRoutes('/')} >Laguna.</Link>
      <Nav />
      <NavMobile />
    </header>
  );
}

export default Header;