import Swal from 'sweetalert2';

export const alertSuccess = () => {
  Swal.fire({
    icon: 'success',
    title: 'Sua mensagem foi enviada com sucesso!',
    text: 'Muito obrigado, entrarei em contato assim que possível',
    confirmButtonColor: '#00abf0'
  })
};

export const alertError = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'É necessário preencher todos os campos',
    confirmButtonColor: '#00abf0',
  })
}

export const alertErrorEmail = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Insira um endereço de email válido',
    confirmButtonColor: '#00abf0',
  })
}

