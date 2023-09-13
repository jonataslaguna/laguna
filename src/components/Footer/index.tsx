import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={ styles.container }>
     <ul className={ styles.listFooter }>
      <li><p>jonataslaguna.js@gmail.com</p></li>
      <li className={ styles.links }>
        <a href="https://github.com/jonataslaguna" target="_blank"><img src="svg/gitHub.svg" alt="GitHub Link"/></a>
        <a href="https://www.linkedin.com/in/jonataslaguna/" target="_blank"><img src="svg/linkedin.svg" alt="Linkedin Link"/></a>
      </li>
     </ul>
     <div className={ styles.lineFooter}>
        <img className={ styles.line } src="/svg/line.svg" alt="line" /> 
     </div>
    </footer>
  );
}

export default Footer;