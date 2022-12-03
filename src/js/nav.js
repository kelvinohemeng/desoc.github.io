const navOpen = document.getElementById("nav_open")
const navCloseContainer = document.getElementById("nav_close")
const navLinks = document.querySelectorAll(".nav-links")
const navCloseIcon = document.getElementById("close_nav")

console.log(navLinks)

navOpen.addEventListener('click', ()=>{
    document.body.classList.add('deactivate-scroll')
    navCloseContainer.style.display = 'flex'
})
navCloseIcon.addEventListener('click', ()=>{
    document.body.classList.remove('deactivate-scroll')
    navCloseContainer.style.display = 'none'
})

for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];
    navLink.addEventListener('click', ()=>{
        document.body.classList.remove('deactivate-scroll')
        navCloseContainer.style.display = 'none'
    })

    
}