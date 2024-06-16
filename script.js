
var t1 = gsap.timeline()


t1.from("#nav h3",{
    y: -50, // move 50px in the Y direction
    opacity: 0, // start from 0 opacity
    duration: 1, // 1 second
    delay: 0.4, // delay the start of the animation by 0.4 seconds
    stagger: 0.3 // h3 elements will animate one after the other
})

t1.from( "#main h1", {
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.3

})

tl.from("#main img", {
    x: 100,
    opacity: 0,
    rotate: 45,
    duration: 0.8,
});