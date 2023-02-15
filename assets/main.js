const btnEnviarEmail = document.querySelector('#btnEnviarEmail')

const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('#close-menu')
const navMenu = document.querySelector('#nav-list')
const ocultarWorks = document.querySelector('#works')
const navLinks = document.querySelectorAll('.nav-link')


openMenu.addEventListener('click', () =>{
  navMenu.classList.add('active')
  ocultarWorks.classList.add('ocultar')
})

closeMenu.addEventListener('click', () =>{
  navMenu.classList.remove('active')
  ocultarWorks.classList.remove('ocultar')
})


navLinks.forEach(navLink => {
    navLink.addEventListener('click', ()=>{
      navMenu.classList.remove('active')
      ocultarWorks.classList.remove('ocultar')
    })
});



btnEnviarEmail.addEventListener('click',() =>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Su correo se envio correctamente. Gracias !',
        showConfirmButton: false,
        timer: 1500
      })
})
 