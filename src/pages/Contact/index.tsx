
import Footer from '../../components/Footer';
import Form from '../../components/Form';
import styles from './contact.module.css';

function ContactPage() {
  return (
    <div className={ styles.container }>
     <h1>Contato</h1>
     <h3>Para qualquer dúvida, envie-me um e-mail:</h3>
      <Form />
      <Footer />
    </div>
  );
}

export default ContactPage;