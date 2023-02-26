import { createTimeLine } from './modules/timeline.js'


// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);

// let sections = gsap.utils.toArray(".snap-section");

// function goToSection(panel) {
//   gsap.to(window, {
//     scrollTo: {y: panel, autoKill: false, ease: "Power1.easeInOut"},
//     duration: 0.5
//   });
// }



// sections.forEach((eachPanel, i) => {
//   // const mainAnim = gsap.timeline({ paused: true });

//   ScrollTrigger.create({
//     trigger: eachPanel,
//     onEnter: () => goToSection(eachPanel),
//     duration: 0.2
//   });

//   ScrollTrigger.create({
//     trigger: eachPanel,
//     start: "bottom bottom",
//     onEnterBack: () => goToSection(eachPanel),
//     duration: 0.2
//   });
// });


window.onload = function () {
  createTimeLine();

  gsap.fromTo(".cloud1", {x: -500},{x: -200, duration: 4,
    scrollTrigger: {
      trigger: ".cloud1",
      toggleActions: 'restart pause restart pause'
    }
  });
  gsap.fromTo(".cloud2", {y: -200},{y: 0, duration: 4,
    scrollTrigger: {
      trigger: ".cloud2",
      toggleActions: 'restart pause restart pause'
    }
  });
  gsap.fromTo(".cloud3", {x: 500},{x: 400, duration: 4,scrollTrigger: {
    trigger: ".cloud3",
    toggleActions: 'restart pause restart pause'
  }});
  gsap.fromTo(".purpose-content", {opacity: 0},{opacity: 1, duration: 6,scrollTrigger: {
    trigger: ".purpose-content",
    toggleActions: 'restart pause restart pause'
  }});





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

} 
