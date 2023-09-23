import Nav from "../Nav";
import styles from './header.module.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} >Laguna.</Link>
      <Nav />
    </header>
  );
}

export default Header;