const navOpen = document.getElementById("nav_open")
const navCloseContainer = document.getElementById("nav_close")
const navCloseIcon = document.getElementById("close_nav")

navOpen.addEventListener('click', ()=>{
    document.body.classList.add('deactivate-scroll')
    navCloseContainer.style.display = 'flex'
})
navCloseIcon.addEventListener('click', ()=>{
    document.body.classList.remove('deactivate-scroll')
    navCloseContainer.style.display = 'none'
})
navCloseContainer.addEventListener('click', ()=>{
    document.body.classList.remove('deactivate-scroll')
    navCloseContainer.style.display = 'none'
})