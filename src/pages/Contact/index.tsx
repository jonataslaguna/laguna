import Footer from '../../components/Footer';
import styles from './contact.module.css';

function ContactPage() {
  return (
    <>
      <div className={ styles.container }>
          <h1>For any questions, send me an email:</h1>
          <h2>jonataslaguna.js@gmail.com</h2>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;