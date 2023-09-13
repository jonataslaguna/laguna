import styles from './presentation.module.css'

function Presentation() {
  return (
    <div className={ styles.container }>
      <h1 className={ styles.presentationText }>Hi, my name is Jonatas Laguna, I'm a front-end developer</h1>
      <div className={ styles.imageContainer }>
        <img src="/images/profileIcon.png" alt="image exemple" />
      </div>
    </div>
  );
}

export default Presentation;