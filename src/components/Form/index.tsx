import { useState } from 'react';
import { alertSuccess, alertError, alertErrorEmail } from '../../utils/alert/alerts';
import { regexEmail } from '../../regex/regexForm';

import styles from './form.module.css';

const INITIAL_STATE = {
    name: '',
    email:'',
    message:'',
}

function Form () {
    const [ formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (formData.name === '' || formData.email === '' || formData.message === '') {
           e.preventDefault();
           alertError();
        } else if (!regexEmail.test(formData.email)) {
            e.preventDefault();
            alertErrorEmail();
        }
        else {
           alertSuccess();
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { id, value} = e.target;

        setFormData({
            ...formData,
            [id]: value
        })

    }

    return (
        <div className={ styles.formContainer }>
            <form className={ styles.form } action='https://formsubmit.co/jonataslaguna.js@gmail.com' method='POST' onSubmit={ handleSubmit }>

                <div className={ styles.inputGroup }>
                    <input 
                      type='text' 
                      id='name'
                      name='name' 
                      placeholder='Nome' 
                      autoComplete='none'  
                      spellCheck='false' 
                      value={ formData.name }
                      onChange={ handleChange }
                     />

                    <input 
                      type='email'
                      id='email' 
                      placeholder='Seu e-mail' 
                      name='email' 
                      spellCheck='false' 
                      value={ formData.email }
                      onChange={ handleChange }
                    />
                </div>

                <textarea
                  id='message'
                  name='message'
                  placeholder='Mensagem'
                  spellCheck='false'
                  value={ formData.message }
                  onChange={ handleChange }
                >
                </textarea>

                <button>Enviar</button>
                <input type='hidden' name='_next' value='https://jonatas-laguna.vercel.app/contact'></input>
                <input type='hidden' name='_captcha' value='false'></input>
            </form>
        </div>
    );
}

export default Form;