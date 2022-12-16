const navOpen = document.getElementById("nav_open")
const navCloseContainer = document.getElementById("nav_close")
const navLinks = document.querySelectorAll(".nav-links")
const navCloseIcon = document.getElementById("close_nav")
const signUp = document.querySelector(".sign-up")
const signUpInner = document.querySelector(".sign_container")

document.querySelector(".cta_nav").addEventListener('click', (e)=>{
    signUp.style.display = "flex"
    // document.body.classList.add('deactivate-scroll')
    e.stopPropagation()
    // signUp.classList.add("open-signup")
})
document.querySelector(".b-signup").addEventListener('click', (e)=>{
    signUp.style.display = "none"
    // document.body.classList.remove('deactivate-scroll')
})

signUpInner.addEventListener('click', (e)=>{
    signUp.style.display = "flex"
    e.stopPropagation()
    
})

navOpen.addEventListener('click', ()=>{
    // document.body.classList.add('deactivate-scroll')
    navCloseContainer.style.display = 'flex'
})
navCloseIcon.addEventListener('click', ()=>{
    // document.body.classList.remove('deactivate-scroll')
    navCloseContainer.style.display = 'none'
})

for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];
    navLink.addEventListener('click', ()=>{
        // document.body.classList.remove('deactivate-scroll')
        navCloseContainer.style.display = 'none'
    })
}