$(document).ready(function () {

    gsap.fromTo(".values-row-1", { x: -200, opacity: 0 }, {
        x: 0, opacity: 1, duration: 2,
        scrollTrigger: {
            trigger: ".values-row-1",
            toggleActions: 'restart pause restart pause'
        }
    });

    gsap.fromTo(".values-row-2", { x: 200, opacity: 0 }, {
        x: 0, opacity: 1, duration: 2,
        scrollTrigger: {
            trigger: ".values-row-2",
            toggleActions: 'restart pause restart pause'
        }
    });
});



