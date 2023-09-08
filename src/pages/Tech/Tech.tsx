import styles from './tech.module.css';

function Tech() {
    return (
    <section className={ styles.container }>
        <div>
            <h2>My Tech Stack</h2>
            <h3>Technologies I've been working with recently</h3>
        </div>
        <div>
            <ul className={ styles.listTech }>
                <div className={ styles.techsPart1 }>
                    <li>
                      <p className={ styles.name }>JavaScript</p>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt='JavaScript'/>
                    </li>
                    <li>
                        <p className={ styles.name }>TypeScript</p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt='TypeScript'/>
                    </li>
                    <li>
                        <p className={ styles.name }>React</p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React'/>
                    </li>
                    <li> 
                        <p className={ styles.name }>HTML5</p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='HTML5' />
                    </li>
                    <li>
                        <p className={ styles.name }>Css 3</p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='CSS3'/>
                    </li>
                </div>
            
                <div className={ styles.techsPart2 }>
                    <li>
                       <p className={ styles.name }>Redux</p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt='Redux' />
                    </li>
                    <li> 
                        <p className={ styles.name }>Jest</p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"  alt='Jest'/>
                    </li>
                    <li>
                        <p className={ styles.name }>Git</p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"/>
                    </li>
                    <li>
                       <p className={ styles.name }>GitHub</p>
                        <img src="/gitHubLogo.png" alt="GitHub"/>
                    </li>
                    <li>
                        <p className={ styles.name }>React Testing Library</p>
                        <img src="/svg/testing-library.svg" alt="React Testing Library"/>
                    </li>
               </div>
            </ul>
        </div>
    </section>
    )
}

export default Tech;