gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



// function show() {

// }


var circle = document.querySelector("#menu");

circle.addEventListener("click", function(elem) {
    document.querySelector("#fullscreen-nav").style.left = "0%";

});

document.querySelector("#fullscreen-nav #nav #menu").addEventListener("click", function(dets) {
    document.querySelector("#fullscreen-nav").style.left = "-100vw";

});



gsap.from("#left>h1", {
    opacity: 0,
    duration: 3,
    onStart: function() {
        $('left>h1').textillate({ in: { effect: 'fadeInUp' } });

    }

});





// var t1 = gsap.timeline({
//     ScrollTrigger: {
//         trigger: ".purpe",
//         scroller: ".smooth-scroll",
//         scrub: true,
//         pin: true,
//         start: "top top",
//         end: "+=100%"
//     }
// });



// t1.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: })
//     .from(".line-3", { scalex: 0, transformorigin: "left center", ease: })
//     .from(".purple", { backgroundColor: "28a92b" }, 0);