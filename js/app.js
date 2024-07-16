
 document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.zagolovok', {
        opacity: 1,
        duration: 3,
        x: 50,
        scrub: true
    })

    gsap.to('.zagolovok', {
        opacity: 0,
        duration: 3,
        scrollTrigger:{
            trigger: '.zagolovok',
            start: 'center',
            end: 600,
            scrub: true
        }
    })

    gsap.to('.info',{
        opacity: 0,
        duration: 3,
        scrollTrigger:{
            trigger: '.info',
            start: 'top',
            scrub: true
        }
        
    })
    gsap.to('.coffe', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.coffe',
            start: 'top',
            scrub: true
        }
        
    })
    gsap.to('.advantages', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.advantages',
            start: 'top',
            scrub: true
        }
        
    })
    gsap.to('.feedback', {
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: '.feedback',
            start: 'top',
            scrub: true
        }
        
    })
 });

