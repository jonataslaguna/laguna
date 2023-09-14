import styles from './presentation.module.css'

function Presentation() {
  return (
    <div className={ styles.container }>
      <h1 className={ styles.presentationText }>Olá, meu nome é Jonatas Laguna, sou desenvolvedor front-end</h1>
      <img src="/images/profileIcon.png" alt="image exemple" />
    </div>
  );
}

export default Presentation;