const navOpen = document.getElementById("nav_open")
const navCloseContainer = document.getElementById("nav_close")
const navLinks = document.querySelectorAll(".nav-links")
const navCloseIcon = document.getElementById("close_nav")
const signUp = document.querySelector(".sign-up")
const signUpInner = document.querySelector(".sign_container")


// // disablling scroll
// function disableScroll() {
//     document.body.style.overflow = "hidden";
// }
// //enabling scroll
// function enableScroll() {
//     document.body.style.overflow = "auto";
// }

// ///toggle scrolling
// let scrollingDisabled = false;

// function toggleScroll() {
//     console.log("i was clicked")
//     if (scrollingDisabled) {
//         enableScroll();
//         scrollingDisabled = false;
//     } else {
//         disableScroll();
//         scrollingDisabled = true;
//     }
// }


document.querySelector(".cta_nav").addEventListener('click', (e)=>{
    signUp.style.display = "flex"
    // document.body.classList.add('deactivate-scroll')
    e.stopPropagation()
})
document.querySelector(".b-signup").addEventListener('click', (e)=>{
    signUp.style.display = "none"
})

signUpInner.addEventListener('click', (e)=>{
    signUp.style.display = "flex"
    e.stopPropagation()
    
})

navOpen.addEventListener('click', ()=>{
    navCloseContainer.style.display = 'flex'
})
navCloseIcon.addEventListener('click', ()=>{
    navCloseContainer.style.display = 'none'
})

for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];
    navLink.addEventListener('click', ()=>{
        navCloseContainer.style.display = 'none'
    })
}


