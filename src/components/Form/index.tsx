import styles from './form.module.css';

function Form () {
    return (
        <div className={ styles.formContainer }>
            <form className={ styles.form } action="https://formsubmit.co/jonataslaguna.js@gmail.com" method="POST">

                <div className={ styles.inputGroup }>
                    <input type="text" id="name" name="name" placeholder='Nome' autoComplete='none' required/>
                    <input type="email" id="email" placeholder='E-mail' name="email"  required/>
                </div>

                <textarea id="message" name="message" placeholder='Mensagem'required></textarea>

                <button>Enviar</button>
                <input type="hidden" name="_next" value="https://portfolio-one-gamma-92.vercel.app/contact"></input>
            </form>
        </div>
    );
}

export default Form;