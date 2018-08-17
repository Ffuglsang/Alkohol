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

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

document.getElementById('screen').textContent = 'width: ' + w + 'px. Height: ' + h + 'px';

// var enableScript = document.querySelectorAll('.no-js');
// enableScript.forEach(function(el) {
//     el.classList.remove('no-js');
// });
// console.log(enableScript);

// Create array of .row classes and get their position
// relative to the top
Array.prototype.forEach.call(section, function(e) {
  sections[e.id] = e.offsetTop;
});




var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;


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

var mediaQ = window.matchMedia("(max-width: 767px)").matches;
// Update array on resize
window.onresize =  function(){
    var headerEl = document.getElementById('mainHeaderID');
    var logoEl = document.getElementById('logoID');
    var navEl = document.getElementById('mainNavID');
    mediaQ = window.matchMedia("(max-width: 767px)").matches;

    // var tmpHeaderHeight = document.getElementById('mainHeaderID').offsetHeight;

    Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
    });
    w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // console.log('hej');

    // if (scrollPosition > (headerHeight - navHeight) && !mediaQ) {
    //     navEl.style.width = w - logoEl.offsetWidth + "px";
    // }

    if (mediaQ) {
        navEl.removeAttribute('style');
    }
    navHeight = document.getElementById('mainNavID').offsetHeight;
    // console.log("mediaQ :" + mediaQ + "w :" + w)
}

// var headerHeight = document.getElementById('mainNavID').offsetHeight * 2;
var headerHeight = document.getElementById('mainHeaderID').offsetHeight;
// var navHeight = document.getElementById('mainNavID').clientHeight;
var navHeight = document.getElementById('mainNavID').offsetHeight;
// console.log(headerHeight);
function logNavHeight(){
    console.log(headerHeight);
}
// var headerHeight = 84;
// var minHeaderHeight = 0;

window.onscroll = function () {
    // var headerEl = document.getElementById('js-header');
    var headerEl = document.getElementById('mainHeaderID');
    var logoEl = document.getElementById('logoID');
    var navEl = document.getElementById('mainNavID');
    var navBarEl = document.getElementById('mainNavbarID');
    // var mediaQ = window.matchMedia("(max-width: 767px)").matches;

    
    // var screen = document.getElementById('scrollamount');
    scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    
    headerEl.style.willChange = "height";
    // var navBarPos = navBarEl.scrollTop || navBarEl.scrollTop || navBarEl.pageYOffset;
    // screen.textContent = scrollPosition + 'px';

    // console.log(navEl.offsetHeight - navEl.scrollTop);
    // console.log(navEl.scrollTop);
    if (scrollPosition < (headerHeight - navHeight) ) {
        // window.requestAnimationFrame(function(){
        //     // if(scrollPosition > navHeight) {
        //     //     headerEl.style.height = headerHeight - scrollPosition + "px";
        //     //     // logoEl.style.height = headerHeight - scrollPosition + "px";
        //     // }
        //     headerEl.style.height = headerHeight - scrollPosition + "px";
        //     // logoEl.style.height = headerHeight - scrollPosition + "px";
        // });
        headerEl.style.height = headerHeight - scrollPosition + "px";
        // navBarEl.style.top = navEl.offsetHeight + navEl.scrollTop + "px";
        // console.lof(navEl.offsetHeight + navEl.offsetTop);
        // logoEl.style.height = headerHeight - scrollPosition + "px";

        // Fix to help chrome calculate
        // headerEl.style.height = headerHeight - scrollPosition + "px";
        // navEl.removeAttribute('style');
        // logoEl.removeAttribute('style');
    } 
    
    


    if (scrollPosition > (headerHeight - navHeight) ) {
        headerEl.style.height = navHeight + "px";
        // logoEl.style.height = navHeight + "px";
        headerEl.style.willChange = "auto";
    }

    // Fix to help chrome calculate "width: auto;"
    if (scrollPosition > (headerHeight - navHeight + 100) ) {
        // if (!mediaQ) {
        //     logoEl.style.height = navHeight + "px";
        //     navEl.style.width = w - logoEl.offsetWidth + "px";
        // } 
        // navEl.style.width = w - logoEl.offsetWidth + "px";
        // logoEl.style.height = navHeight + "px";
    }
    
    scrollPosition += navHeight + 50;

    for (i in sections) {
        if (sections[i] <= scrollPosition) {
            // document.querySelector('.active').classList.remove('active');
            try {
                document.querySelector('.active').setAttribute('class', '');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            } catch(e) {
                console.log(e.message);
            }
            // document.querySelector('a[href*=' + i + ']').classList.remove('active');
        }
    }
    scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
}


function navtoggle() {
    // var x = document.querySelector('body');
    var x = document.body;
    var mediaQ = window.matchMedia("(max-width: 767px)").matches;
    // var overlay = document.getElementsByCla;

    if (!mediaQ) {
        return false;
    }

    if (x.className === "") {
        x.className += "toggle-menu";
    } else {
        x.className = "";
    }
}



// function toggleMenu() {
//     var menu = document.body;
//     menu.classList.toggle('toggle-menu');
// }

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


  