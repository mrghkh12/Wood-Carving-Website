

const headerNavbar = document.querySelector('.header-section')

window.addEventListener('scroll' , () => {
    console.log(window.scrollY);
    
    headerNavbar.classList.toggle ('sticky', window.scrollY > 150)
})