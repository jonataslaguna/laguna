import Footer from '../../components/Footer';
import styles from './tech.module.css';

function Tech() {

    return (
        <>
            <section className={styles.container}>
                <div>
                    <h1>My Tech Stack</h1>
                    <h3>Principais tecnologias que tenho conhecimento</h3>
                </div>
                <div>
                    <ul className={styles.listTech}>
                        <li>
                            <p className={styles.name}>JavaScript</p>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg' alt='JavaScript' />
                        </li>
                        <li>
                            <p className={styles.name}>TypeScript</p>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg' alt='TypeScript' />
                        </li>
                        <li>
                            <p className={styles.name}>React.js</p>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='React' />
                        </li>
                        <li>
                            <p className={styles.name}>HTML 5</p>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' alt='HTML5' />
                        </li>
                        <li>
                            <p className={styles.name}>CSS 3</p>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' alt='CSS3' />
                        </li>
                        <li>
                            <p className={styles.name}>Redux</p>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' alt='Redux' />
                        </li>
                        <li>
                            <p className={styles.name}>Testing Library</p>
                            <img src='/svg/testing-library.svg' alt='React Testing Library' />
                        </li>
                        <li>
                            <p className={styles.name}>Jest</p>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' alt='Jest' />
                        </li>
                        <li>
                            <p className={styles.name}>Mocha</p>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg' />
                        </li>
                        <li>
                            <p className={styles.name}>Git</p>
                            <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' alt='Git' />
                        </li>
                        <li>
                            <p className={styles.name}>GitHub</p>
                            <img src='/svg/gitHub.svg' alt='GitHub' />
                        </li>
                        <li>
                            <p className={styles.name}>Node.js</p>         
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
          
                        </li>
                        <li>
                            <p className={styles.name}>MySQL</p>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt='MySQL'/>      
                        </li>
                        <li>
                            <p className={styles.name}>Docker</p>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" />
                        </li>
                        <li>
                            <p className={styles.name}>Sequelize</p>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />         
                        </li>
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Tech;