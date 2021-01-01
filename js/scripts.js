//HEADER PARTICLES

particlesJS("particles-js", {"particles":{"number":{"value":30,"density":{"enable":true,"value_area":800}},"color":{"value":"#2c2c2c"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.3,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":100,"random":true,"anim":{"enable":true,"speed":10,"size_min":40,"sync":false}},"line_linked":{"enable":false,"distance":200,"color":"#ffffff","opacity":1,"width":2},"move":{"enable":true,"speed":8,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});;




//STICKY NAVBAR

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// document.addEventListener ("scroll",
//   function () {
    
//   }, false
// );




//CONSTANTS TO REMOVE ABOUT HEADER (getRid2 is to reverse)

const aboutHeader = document.querySelector("#wrapper h2");
const getRid = function () {document.querySelector("#wrapper").removeChild(aboutHeader);}

const getRid2 = function () {article.removeChild(document.querySelector("#aboutArticle h2"));}

//CONSTANTS TO PREPEND ABOUT HEADER TO ABOUT ARTICLE (addHeader2 is to reverse)
const article = document.querySelector("#aboutArticle");
const addHeader = function () {article.insertBefore(aboutHeader, article.firstChild);}

const addHeader2 = function () {document.querySelector("#wrapper").insertBefore(document.querySelector("#aboutArticle h2"), document.querySelector("#wrapper").firstChild);}

//REMOVE ABOUT HEADER + PREPEND TO ABOUT ARTICLE AT >= 992PX
window.addEventListener ("resize",
  function () {
    if (window.innerWidth >= 992 || document.documentElement.clientWidth >= 992) {
      getRid ();
      addHeader ();
    }
    else {
      addHeader2 ();
    }
  }, false
);

window.addEventListener ("load",
  function () {
    if (window.innerWidth >= 992 || document.documentElement.clientWidth >= 992) {
      getRid ();
      addHeader ();
    }
  }, false
);