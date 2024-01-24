var tl = gsap.timeline()

tl.from("#nav", {
    opacity: 0,
    delay: 0.3
})

tl.from ("#nav h2, #nav h3, #nav h4", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3
})

tl.from ("#left h1", {
    x:-300,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

tl.from ("#left h1 span img", {
    opacity: 0,
    stagger: 0.3,
    duration: 0.5
})

tl.from ("#left-content h4", {
    x:-300,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})

tl.from ("#right img", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5
})


gsap.from ("#page2 .box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger : {
        trigger: "#page2 .box",
        scroller: "body",
        start: "top 80%",
    }
})