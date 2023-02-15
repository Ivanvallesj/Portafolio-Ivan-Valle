const btnEnviarEmail = document.querySelector('#btnEnviarEmail')


btnEnviarEmail.addEventListener('click',() =>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su correo se envio correctamente. Gracias !',
        showConfirmButton: false,
        timer: 1500
      })
})
 