import { Link } from "react-router-dom";
import styles from './nav.module.css'

function Nav () {
  return (
    <nav className={ styles.container }>
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
       <li>
        <a href="https://github.com/jonataslaguna" target="_blank"><img src="svg/gitHub.svg" alt="GitHub Link" className={ styles.gitHubLink }/></a>
        <a href="https://www.linkedin.com/in/jonataslaguna/" target="_blank"><img src="svg/linkedin.svg" alt="Linkedin Link" className={ styles.LinkedinLink }/></a>
       </li>
      </ul>
    </nav>
  )
}

export default Nav;