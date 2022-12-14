gsap.registerPlugin(ScrollTrigger);


let animationLoop = document.querySelectorAll('.name_text')
const imageContainer = document.querySelector('.the_image')

animationLoop.forEach((element) => {
    element.addEventListener('mouseenter', ()=>{
        imageContainer.style.backgroundImage = `url(${element.dataset.image})`
        tl1.play()
        tl1.delay(0.2).restart(true)
    })   
    
    element.addEventListener('mouseleave', ()=>{
        tl1.reverse()
    })
})

// timeline animation
const tl1 = gsap.timeline({paused: true})
tl1.from('.the_image', {
    x:100,
    y:100,
    opacity:0,
    rotation: -10,
    duration:1,
    ease: Expo.easeOut,
    transformOrigin: 'top center',
    skewX: -10,
})

// // mumentum scroll

// const body = document.body;
// const main = document.getElementById('main-container');

// let sx = 0, // For scroll positions
//     sy = 0;
// let dx = sx, // For container positions
//     dy = sy;


// body.style.height = main.clientHeight + 'px';


// main.style.position = 'fixed';
// main.style.top = 0;
// main.style.left = 0;
// main.style.right = 0;

// // Bind a scroll function
// window.addEventListener('scroll', easeScroll);


// function easeScroll() {
  
//   sx = window.pageXOffset;
//   sy = window.pageYOffset;
// }


// window.requestAnimationFrame(render);

// function render(){
//   //We calculate our container position by linear interpolation method
//   dx = li(dx,sx,0.07);
//   dy = li(dy,sy,0.07);
  
//   dx = Math.floor(dx * 100) / 100;
//   dy = Math.floor(dy * 100) / 100;
  
  
//   main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
 
  
  
//   window.requestAnimationFrame(render);
// }

// function li(a, b, n) {
//   return (1 - n) * a + n * b;
// }
const we = document.querySelectorAll(".we")
gsap.from(we , {
    y: 50,
    opacity: 0,
    stagger: .4,
    duration: 2,
    scrollTrigger: {
        trigger: ".we",
        // pin: true,   // pin the trigger element while active
        // markers: true,
        // start: "top top", // when the top of the trigger hits the top of the viewport
        // end: "+=500", // end after scrolling 500px beyond the start
        // scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
});


// document.querySelector('body').addEventListener('mousemove', eyeball);
// function eyeball() {
//     let eye = document.querySelectorAll('.eye')
//     eye.forEach((eye) => {
    //         let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 0.5);
    //         let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 0.5);
    //         let radian = Math.atan2(event.pageX - x, event.pageY - y);    
//         let rot = (radian * (8 / Math.PI) * -8) + 0;
//         eye.style.transform = "rotate("+ rot + "deg)";
//     })
// }
let eye = document.querySelectorAll('.eye')
let eyeSpace = document.querySelector('.eyespace')

window.onmousemove = () => {
    let x = event.clientX * 0 / window.innerHeight + "px";
    let y = event.clientY * 5 / window.innerHeight + "px";

    eye.forEach(eyeball => {
        eyeball.style.left = x
        eyeball.style.top = y
        eyeball.style.transform = "translate("+x+","+y+")"
    });
}

let anticipateEl = document.querySelectorAll('.anticipate')

let tl = gsap.timeline({repeat:-1})

tl
.from(anticipateEl,{y:-250, stagger:0.09, duration:1.5,ease: "expo.out",})
.to(anticipateEl,{y:250, stagger: -0.09, duration:1.5,ease: "expo.in",})

gsap.from(".hero-bounce-other" , {
    y: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".hero-bounce-other",
        // pin: true,   // pin the trigger element while active
        // markers: true,
        // start: "top top", // when the top of the trigger hits the top of the viewport
        // end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
});
gsap.from(".hero-bounce-other2" , {
    y: -50,
    duration: 2,
    scrollTrigger: {
        trigger: ".hero-bounce-other2",
        // pin: true,   // pin the trigger element while active
        // markers: true,
        // start: "top top", // when the top of the trigger hits the top of the viewport
        // end: "+=500", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      }
});

const alertBtns = document.querySelectorAll('.alert-btn')

alertBtns.forEach( alertBtn => 
    alertBtn.addEventListener('click', ()=> {
        alert("Please come back later, the pages for these links are still being developed, Thank you.")
    })
)