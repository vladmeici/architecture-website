import { createTimeLine } from './timeline.js'


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



$( document ).ready(function(){

  const scrollUpButton = document.getElementById("ScrollUpButton");
  scrollUpButton.addEventListener("click", () => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });

        });
        
  gsap.fromTo(".scroll-up-pin", { y: -16 }, { duration: 1, y: 10, ease: "circ", repeat: -1, yoyo: true })


  //   const links = gsap.utils.toArray(".menu-item");
  // const sections = gsap.utils.toArray("#main .section");

  // links.forEach((btn, index) => {
  //     btn.addEventListener("click", () => {
  //         gsap.to("#main", { duration: 1, scrollTo: { y: sections[index], autoKill: true, ease: "power2" } });

  //         for (let i = 0; i < 5; i++) {
  //             prev = links;
  //             if (prev[i].classList.contains("active")) {
  //                 prev[i].classList.remove("active");
  //             }
  //         }
  //         btn.classList.add("active");
  //     });
  // });

  // sections.forEach((section, i) => {
  //     ScrollTrigger.create({
  //       trigger: section,
  //       scroller: "#main",
  //       start: "top center",
  //       end: "bottom center",
  //       markers: true,
  //       onToggle: self => {
  //         if (self.isActive) {
  //           gsap.to(links[i], {scale: 1.3, color: "white"})
  //         } else {
  //           gsap.to(links[i], {scale: 1, color: "blue"})
  //         }
  //       }
  //     });
  // });


  //createTimeLine();




  gsap.fromTo("#DownloadIcon", { y: -8 }, { duration: 1, y: 8, ease: "circ.in", repeat: -1, yoyo: true })

  gsap.fromTo(".drop-pin", { y: -16 }, { duration: 0.8, y: 16, ease: "circ.in", repeat: -1, yoyo: true })


  gsap.fromTo(".process-col-1", { opacity: 0, x:-200 }, {
    x:0, opacity: 1, duration: 2,
    scrollTrigger: {
      trigger: ".process-col-1",
      toggleActions: 'restart pause restart pause'
    }
  });

  gsap.fromTo(".process-col-2", { opacity: 0, x:200 }, {
    x:0, opacity: 1, duration: 2,
    scrollTrigger: {
      trigger: ".process-col-2",
      toggleActions: 'restart pause restart pause'
    }
  });



  gsap.fromTo(".cloud1", { x: -500 }, {
    x: -200, duration: 4,
    scrollTrigger: {
      trigger: ".cloud1",
      toggleActions: 'restart pause restart pause'
    }
  });
  gsap.fromTo(".cloud2", { y: -200 }, {
    y: 0, duration: 4,
    scrollTrigger: {
      trigger: ".cloud2",
      toggleActions: 'restart pause restart pause'
    }
  });
  gsap.fromTo(".cloud3", { x: 500 }, {
    x: 400, duration: 4, scrollTrigger: {
      trigger: ".cloud3",
      toggleActions: 'restart pause restart pause'
    }
  });
  gsap.fromTo(".purpose-content", { opacity: 0 }, {
    opacity: 1, duration: 6, scrollTrigger: {
      trigger: ".purpose-content",
      toggleActions: 'restart pause restart pause'
    }
  });


});



