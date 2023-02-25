import { createTimeLine } from './modules/timeline.js'

window.onload = function () {
  createTimeLine();


  ScrollTrigger.create({
    trigger: ".trigger",
    pin: ".pin",
    start: 'top top',
    end: 'bottom bottom',
  });

  let headings = gsap.utils.toArray(".block");
  gsap.set(headings, { opacity: 0 })
  gsap.set(headings[0], { opacity: 1 })

  headings.forEach((heading, i) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger",
        start: () => `top+=${i * window.innerHeight} top`,
        end: () => `top+=${(i + 2) * window.innerHeight} top`,
        markers: true,
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

} 
