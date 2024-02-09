$( document ).ready(function(){

    var pulse1 = document.getElementsByClassName("pulse1"),
        plusButton1 = document.getElementsByClassName("plus-button-1"),
        popout1 = document.getElementsByClassName("popout-1"),
        popout1Visible = false,
        pulse1Timeline = new TimelineMax({ repeat: -1, repeatDelay: 0.5 }),
        pulse2 = document.getElementsByClassName("pulse2"),
        plusButton2 = document.getElementsByClassName("plus-button-2"),
        popout2 = document.getElementsByClassName("popout-2"),
        popout2Visible = false,
        pulse2Timeline = new TimelineMax({ repeat: -1, repeatDelay: 0.5 }),
        pulse3 = document.getElementsByClassName("pulse3"),
        plusButton3 = document.getElementsByClassName("plus-button-3"),
        popout3 = document.getElementsByClassName("popout-3"),
        popout3Visible = false,
        pulse3Timeline = new TimelineMax({ repeat: -1, repeatDelay: 0.5 });

    pulse1Timeline.fromTo(pulse1, 1,
        { transformOrigin: "center center", autoAlpha: 1, scale: 1 },
        { transformOrigin: "center center", autoAlpha: 0, scale: 1.5, ease: Quad.easeInOut }
    );
    pulse2Timeline.fromTo(pulse2, 1,
        { transformOrigin: "center center", autoAlpha: 1, scale: 1 },
        { transformOrigin: "center center", autoAlpha: 0, scale: 2, ease: Quad.easeInOut }
    );
    pulse3Timeline.fromTo(pulse3, 1,
        { transformOrigin: "center center", autoAlpha: 1, scale: 1 },
        { transformOrigin: "center center", autoAlpha: 0, scale: 2, ease: Quad.easeInOut }
    );

    plusButton1[0].addEventListener('mouseenter', function () {
        pulse1Timeline.pause(1);
    });
    plusButton2[0].addEventListener('mouseenter', function () {
        pulse2Timeline.pause(1);
    });
    plusButton3[0].addEventListener('mouseenter', function () {
        pulse3Timeline.pause(1);
    });

    plusButton1[0].addEventListener('mouseleave', function () {
        if (!popout1Visible) {
            pulse1Timeline.play();
        }
    });
    plusButton2[0].addEventListener('mouseleave', function () {
        if (!popout2Visible) {
            pulse2Timeline.play();
        }
    });
    plusButton3[0].addEventListener('mouseleave', function () {
        if (!popout3Visible) {
            pulse3Timeline.play();
        }
    });

    plusButton1[0].addEventListener('click', function () {
        gsap.fromTo(popout1[0], { opacity: 0 }, { opacity: 1, duration: 1 });
        popout1Visible = true;
        pulse1Timeline.pause(1);
    });
    plusButton2[0].addEventListener('click', function () {
        gsap.fromTo(popout2[0], { opacity: 0 }, { opacity: 1, duration: 1 });
        popout2Visible = true;
        pulse2Timeline.pause(1);
    });
    plusButton3[0].addEventListener('click', function () {
        gsap.fromTo(popout3[0], { opacity: 0 }, { opacity: 1, duration: 1 });
        popout3Visible = true;
        pulse3Timeline.pause(1);
    });

    window.onclick = function (e) {

        if (popout1Visible) {

            if (!(e.target === plusButton1[0] || plusButton1[0].contains(e.target) || e.target === popout1[0] || popout1[0].contains(e.target)) &&
                !(e.target === plusButton2[0] || plusButton2[0].contains(e.target)) &&
                !(e.target === plusButton3[0] || plusButton3[0].contains(e.target)) &&
                !(popout2Visible && (e.target === popout2[0] || popout2[0].contains(e.target))) &&
                !(popout3Visible && (e.target === popout3[0] || popout3[0].contains(e.target)))) {


                gsap.fromTo(popout1[0], { opacity: 1 }, { opacity: 0, duration: 1 });
                popout1Visible = false;
                pulse1Timeline.play();
            }

        }

        if (popout2Visible) {

            if (!(e.target === plusButton2[0] || plusButton2[0].contains(e.target) || e.target === popout2[0] || popout2[0].contains(e.target)) &&
                !(e.target === plusButton1[0] || plusButton1[0].contains(e.target)) &&
                !(e.target === plusButton3[0] || plusButton3[0].contains(e.target)) &&
                !(popout1Visible && (e.target === popout1[0] || popout1[0].contains(e.target))) &&
                !(popout3Visible && (e.target === popout3[0] || popout3[0].contains(e.target)))) {


                gsap.fromTo(popout2[0], { opacity: 1 }, { opacity: 0, duration: 1 });
                popout2Visible = false;
                pulse2Timeline.play();
            }

        }

        if (popout3Visible) {

            if (!(e.target === plusButton3[0] || plusButton3[0].contains(e.target) || e.target === popout3[0] || popout3[0].contains(e.target)) &&
                !(e.target === plusButton1[0] || plusButton1[0].contains(e.target)) &&
                !(e.target === plusButton2[0] || plusButton2[0].contains(e.target)) &&
                !(popout1Visible && (e.target === popout1[0] || popout1[0].contains(e.target))) &&
                !(popout2Visible && (e.target === popout2[0] || popout2[0].contains(e.target)))) {

                gsap.fromTo(popout3[0], { opacity: 1 }, { opacity: 0, duration: 1 });
                popout3Visible = false;
                pulse3Timeline.play();
            }

        }

    }
});



