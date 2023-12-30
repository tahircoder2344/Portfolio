function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
init();

var crsr = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 20 + "px";
  crsr.style.top = dets.y + 20 + "px";
});

crsr.addEventListener("mouseleave", function () {
  document.style.backgroundImage = "none";
});
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: false,
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -150,
  },
  "anim"
);

tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);

tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: false,
    start: "top -120%",
    end: "top -130%",
    scrub: 3,
  },
});
tl2.to(".main", {
  backgroundColor: "#fff",
});
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: false,
    start: "top -310%",
    end: "top -350%",
    scrub: 3,
  },
});
tl3.to(".main", {
  backgroundColor: "#0F0d0d",
});

var boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    var att = elem.getAttribute("data-image");
    crsr.style.width = "470px";
    crsr.style.height = "370px";
    crsr.style.borderRadius = "0px";
    crsr.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    crsr.style.width = "20px";
    crsr.style.height = "20px";
    crsr.style.borderRadius = "50%";
    crsr.style.backgroundImage = "none";
  });
});
var h4 = document.querySelectorAll("#nav h4");
var purple = document.querySelector("#purple");
var nav = document.querySelector("#nav");
h4.forEach(function (elem) {
  // elem.addEventListener('mouseenter',function(){
  //   purple.style.display = 'block';
  //   purple.style.opacity = '1';
  // // })
  // elem.addEventListener('mouseleave',function(){
  //   purple.style.display = 'none';
  //   purple.style.opacity = '0';
  // })
});
var index = document.getElementById("index");
var about = document.getElementById("about");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");
index.addEventListener("click", function () {
  window.location.href = "index.html";
});
about.addEventListener("mouseenter", function () {
  purple.style.display = "block";
  purple.style.opacity = "1";
  purple.innerHTML = `<h1>About</h1><p>Exploring the realms of coding and web development is an invigorating journey that I find immensely compelling.It's a domain where intricate lines of code materialize into dynamic websites, applications, and systems that power our digital world. The ability to shape user experiences through intuitive interfaces, seamless functionalities, and robust architectures is what drives my fascination. The creative freedom within coding allows me to sculpt ideas into tangible entities, breathing life into concepts and transforming them into functional, user-centric solutions. Embracing the ever-evolving landscape of web technologies, I find a profound joy in unraveling the intricacies of programming languages, mastering frameworks, and leveraging these tools to craft innovative digital experiences</p>`;
});
about.addEventListener("mouseleave", function () {
  purple.style.display = "none";
  purple.style.opacity = "0";
  purple.innerHTML = "";
});
contact.addEventListener("mouseenter", function () {
  purple.style.display = "block";
  purple.style.opacity = "1";
  purple.innerHTML = `<h1>Contact</h1><span>Email: hmtahirhassan@gmail.com</span><br>
  <span>Phone: 0337 8619 867 </span>`;
});
contact.addEventListener("mouseleave", function () {
  purple.style.display = "none";
  purple.style.opacity = "0";
  purple.innerHTML = "";
});
projects.addEventListener("click", function () {
  window.location.href = "projects.html";
});
var circle = document.getElementById("circle");
circle.addEventListener("mouseenter", function () {
  main.style.backgroundImage = "url(media/profile.png)";
});
circle.addEventListener("mouseleave", function () {
  main.style.backgroundImage = "";
});
// JavaScript function to show the popup automatically after a delay
function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Show the popup automatically after 3 seconds (adjust the delay as needed)
setTimeout(openPopup, 2000);
