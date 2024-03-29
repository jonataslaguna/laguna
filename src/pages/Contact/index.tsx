import Footer from '../../components/Footer';
import Form from '../../components/Form';
import styles from './contact.module.css';

function ContactPage() {
  return (
    <>
      <div className={ styles.container }>
        <div className={ styles.contactHeader}>
          <h1>Contato</h1>
          <h3>Para qualquer dúvida, me envie um e-mail:</h3>
        </div>
        <Form />
        </div>
      <div className={ styles.footer}>
      <Footer />
      </div>
    </>
  );
}

export default ContactPage;