
$( document ).ready(function(){
    ScrollTrigger.create({
        trigger: ".trigger",
        pin: ".pin",
        start: 'top top',
        end: 'bottom bottom',
      });
    
      let headings = gsap.utils.toArray(".plan");
      let steps = gsap.utils.toArray(".plan-step");
      gsap.set(headings, { opacity: 0 })
      gsap.set(headings[0], { opacity: 1 })
      gsap.set(steps, { opacity: 0 })
      gsap.set(steps[0], { opacity: 1 })
    
      headings.forEach((heading, i) => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".trigger",
            start: () => `top+=${i * window.innerHeight} top`,
            end: () => `top+=${(i + 2) * window.innerHeight} top`,
            markers: false,
            scrub: true
          }
        });


    
        if (i === headings.length - 1) {
          tl.to(heading, { opacity: 1 })
            .to(heading, { opacity: 1 })
        } else {
          tl.to(heading, { opacity: 1, ease: "power4.out" })
            .to(heading, { opacity: 0, ease: "power4.in" })
        }

      });

      steps.forEach((step, i) => {
        let tl2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".trigger",
            start: () => `top+=${i * window.innerHeight} top`,
            end: () => `top+=${(i + 1) * window.innerHeight} top`,
            markers: false,
            scrub: true
          }
        });


    
        if (i === steps.length - 1) {
            tl2.to(step, { opacity: 1 })
            .to(step, { opacity: 1 })
        } else {
            tl2.to(step, { opacity: 1 })
            .to(step, { opacity: 0 })
        }

      });
});