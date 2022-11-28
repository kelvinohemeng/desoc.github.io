let textState1 = document.querySelector('.name_text1');
let textState2 = document.querySelector('.name_text2')
let textState3 = document.querySelector('.name_text3')
let textState4 = document.querySelector('.name_text4')

// timeline animation

const tl1 = gsap.timeline({paused: true,})
tl1.from('.the_image1', {
    x:100,
    y:100,
    opacity:0,
    rotation: -10,
    duration:1,
    ease: Expo.easeOut,
    transformOrigin: 'top center',
    skewType: "simple",
    skewX: -10,
})
const tl2 = gsap.timeline({paused: true,})
tl2.from('.the_image2', {
    x:50,
    y:50,
    opacity:0,
    rotation: -10,
    duration:1,
    ease: Expo.easeOut,
    transformOrigin: 'top center',
    skewType: "simple",
    skewX: -10,
})
const tl3 = gsap.timeline({paused: true,})
tl3.from('.the_image3', {
    x:50,
    y:50,
    opacity:0,
    rotation: -10,
    duration:1,
    ease: Expo.easeOut,
    transformOrigin: 'top center',
    skewType: "simple",
    skewX: -10,
})
const tl4 = gsap.timeline({paused: true,})
tl4.from('.the_image4', {
    x:50,
    y:50,
    opacity:0,
    rotation: -10,
    duration:1,
    ease: Expo.easeOut,
    transformOrigin: 'top center',
    skewType: "simple",
    skewX: -10,
})

// Hover event listeners

textState1.addEventListener('mouseenter', ()=>{
    tl1.play()
    tl1.delay(0.5).restart(true)
})
textState1.addEventListener('mouseleave', ()=>{
    tl1.reverse()
})

textState2.addEventListener('mouseenter', ()=>{
    tl2.play()
    tl2.delay(0.5).restart(true)
})
textState2.addEventListener('mouseleave', ()=>{
    tl2.reverse()
})

textState3.addEventListener('mouseenter', ()=>{
    tl3.play()
    tl3.delay(0.5).restart(true)
})
textState3.addEventListener('mouseleave', ()=>{
    tl3.reverse()
})

textState4.addEventListener('mouseenter', ()=>{
    tl4.play()
    tl4.delay(0.5).restart(true)
})
textState4.addEventListener('mouseleave', ()=>{
    tl4.reverse()
})

// break
// repeat the code above 3x to excute all animation



