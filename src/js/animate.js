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
    console.log(element.dataset.image)
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

