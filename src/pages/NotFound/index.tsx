import styles from './notfound.module.css';

function NotFound() {
  return (
    <div className={ styles.container }>
      <img src='/images/404.png' alt='image page not found' />
      <p>I'm sorry, this page was not found</p>
    </div>
  );
}

export default NotFound;