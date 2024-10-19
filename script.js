var crsr = document.querySelector("#cursor");
var bluri = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
crsr.style.left = dets.x + "px";
crsr.style.top = dets.y + "px";
bluri.style.left = dets.x + "px";
bluri.style.top = dets.y + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
});
elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
});
});

gsap.to("#nav", {
backgroundColor: "#000",
duration: 0.5,
height: "110px",
scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
},
});

gsap.to("#main", {
backgroundColor: "#000",
scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
},
});

gsap.from("#about-us img,#about-us-in", {
y: 90,
opacity: 0,
duration: 1,
scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
},
});
gsap.from(".card", {
scale: 0.8,
  // opacity:0,
duration: 1,
stagger: 0.1,
scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
},
});
gsap.from("#Colon1", {
y: -70,
x: -70,
scrollTrigger: {
    trigger: "#Colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
},
});
gsap.from("#Colon2", {
y: 70,
x: 70,
scrollTrigger: {
    trigger: "#Colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
},
});
gsap.from("#page4 h1", {
y: 50,
scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
},
});
