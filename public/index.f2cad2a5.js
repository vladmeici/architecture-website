window.onload=function(){document.getElementById("ScrollUpButton").addEventListener("click",(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})})),gsap.fromTo(".scroll-up-pin",{y:-16},{duration:1,y:10,ease:"circ",repeat:-1,yoyo:!0}),gsap.fromTo("#DownloadIcon",{y:-8},{duration:1,y:8,ease:"circ.in",repeat:-1,yoyo:!0}),gsap.fromTo(".drop-pin",{y:-16},{duration:.8,y:16,ease:"circ.in",repeat:-1,yoyo:!0}),gsap.fromTo(".row-1",{x:-200,opacity:0},{x:0,opacity:1,duration:2,scrollTrigger:{trigger:".row-1",toggleActions:"restart pause restart pause"}}),gsap.fromTo(".row-2",{x:200,opacity:0},{x:0,opacity:1,duration:2,scrollTrigger:{trigger:".row-2",toggleActions:"restart pause restart pause"}}),gsap.fromTo(".cloud1",{x:-500},{x:-200,duration:4,scrollTrigger:{trigger:".cloud1",toggleActions:"restart pause restart pause"}}),gsap.fromTo(".cloud2",{y:-200},{y:0,duration:4,scrollTrigger:{trigger:".cloud2",toggleActions:"restart pause restart pause"}}),gsap.fromTo(".cloud3",{x:500},{x:400,duration:4,scrollTrigger:{trigger:".cloud3",toggleActions:"restart pause restart pause"}}),gsap.fromTo(".purpose-content",{opacity:0},{opacity:1,duration:6,scrollTrigger:{trigger:".purpose-content",toggleActions:"restart pause restart pause"}}),ScrollTrigger.create({trigger:".trigger",pin:".pin",start:"top top",end:"bottom bottom"});let o=gsap.utils.toArray(".block");gsap.set(o,{opacity:0}),gsap.set(o[0],{opacity:1}),o.forEach(((r,t)=>{let e=gsap.timeline({scrollTrigger:{trigger:".trigger",start:()=>`top+=${t*window.innerHeight} top`,end:()=>`top+=${(t+2)*window.innerHeight} top`,markers:!1,scrub:!0}});t===o.length-1?e.to(r,{opacity:1}).to(r,{opacity:1}):e.to(r,{opacity:1,ease:"power4.out"}).to(r,{opacity:0,ease:"power4.in"})}))};
//# sourceMappingURL=index.f2cad2a5.js.map
