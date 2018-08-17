// (function() {
//     'use strict';
  
//     var section = document.querySelectorAll(".row");
//     var sections = {};
//     var i = 0;
  
//     Array.prototype.forEach.call(section, function(e) {
//       sections[e.id] = e.offsetTop;
//     });
  
//     window.onscroll = function() {
//       var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
//       for (i in sections) {
//         if (sections[i] <= scrollPosition) {
//           document.querySelector('.active').setAttribute('class', ' ');
//           document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
//         }
//       }
//     };
//   })();

var section = document.querySelectorAll(".row");
var sections = {};
var i = 0;

// Create array of .row classes and get their position
// relative to the top
Array.prototype.forEach.call(section, function(e) {
  sections[e.id] = e.offsetTop;
});

// window.addEventListener('resize', resize);

// function resize(){
//     Array.prototype.forEach.call(section, function(e) {
//         sections[e.id] = e.offsetTop;
//     });
// }

// window.addEventListener('resize', function(){
//     Array.prototype.forEach.call(section, function(e) {
//         sections[e.id] = e.offsetTop;
//     });
// });

// Update array on resize
window.onresize =  function(){
    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });
    // console.log('hej');
}

// var headerHeight = document.getElementById('mainNavID').offsetHeight * 2;
var headerHeight = document.getElementById('mainNavID').clientHeight * 2;
// console.log(headerHeight);
function logNavHeight(){
    console.log(document.getElementById('mainNavID').offsetHeight);
}
// var headerHeight = 84;
// var minHeaderHeight = 0;

window.onscroll = function () {
    // var headerEl = document.getElementById('js-header');
    var headerEl = document.getElementsByClassName('main-header')[0];
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    // var screen = document.getElementById('scrollamount');
    
    // screen.textContent = scrollPosition + 'px';
    // if (scrollPosition > headerHeight) {
    //     headerEl.classList.add("smaller");
    // } else {
    //     headerEl.classList.remove("smaller");
    // }

    if (scrollPosition < (headerHeight / 2) ) {
        headerEl.style.height = headerHeight - scrollPosition + "px";
    } else if (scrollPosition < headerHeight) {
        headerEl.style.height = headerHeight / 2 + "px";
    }
    
    scrollPosition += headerHeight / 2;

    for (i in sections) {
        if (sections[i] <= scrollPosition) {
            document.querySelector('.active').setAttribute('class', ' ');
            document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
        }
    }
}

function navtoggle() {
    // var x = document.querySelector('body');
    var x = document.body;
    var y = window.matchMedia("(max-width: 767px)")
    // var overlay = document.getElementsByCla;

    if (!y.matches) {
        return false;
    }

    if (x.className === "") {
        x.className += "body";
    } else {
        x.className = "";
    }

    // if (overlay.className === "overlay") {
    //     overlay.className += " active";
    // } else {
    //     x.className = "overlay";
    // }

}

// window.onscroll = function () {
//     var headerEl = document.getElementsByClassName('main-header')[0];
//     var headerHeight = 100;
//     var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    
    
//     // if (scrollPosition > headerHeight) {
//     //     headerEl.classList.add("smaller");
//     // } else {
//     //     headerEl.classList.remove("smaller");
//     // }

//     if (scrollPosition < (headerHeight / 2) ) {
//         headerEl.style.height = headerHeight - scrollPosition + "px";
//     } 
// }


  