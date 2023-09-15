import { Link } from "react-router-dom";
import styles from './nav.module.css'

function Nav () {
  return (
    <nav className={ styles.navContainer }>
      <ul className={ styles.linksNav }>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/techStack">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
       <li className={ styles.gitHubAndLinkedinLinks }>
        <a href="https://github.com/jonataslaguna" target="_blank"><img src="svg/gitHub.svg" alt="GitHub Link"/></a>
        <a href="https://www.linkedin.com/in/jonataslaguna/" target="_blank"><img src="svg/linkedin.svg" alt="Linkedin Link"/></a>
       </li>
      </ul>
    </nav>
  )
}

export default Nav;