var sectionLanding = document.querySelector('.landing');
var sectionContact = document.querySelector('.input-form');
var header = document.querySelector('header');

// DISABLE RIGHT CLICK
// (function(w) {
//   var arr = ['contextmenu', 'copy', 'cut', 'paste',
//              'beforeunload', 'beforeprint'];
//   console.log(arr);
//   for (var i = 0, x; x = arr[i]; i++) {
//     console.log(x + ' #' + i);
//     if (w['on' + x])w['on' + x] = null;
//       console.log('true for: ' + w + w['on' + x]);
//       w.addEventListener(x, function(e) {
//         console.log('addEventListener' + '\n ,w: ' + w + '\n,e: ' + e);
//         e.preventDefault()}, true);
//         // e.stopPropagation()}, true);
//     };
//
//   for (var j = 0, f; f = w.frames[j]; j++) {
//     console.log(j);
//     console.log('f variable: ' + f);
//     try {
//       arguments.callee(f)}
//
//     catch(e){}
//   }
// })
// (window);
//
// function handleCancel(evt) {
//   evt.preventDefault()
//   console.log('touchcancel.');;
//   var touches = evt.changedTouches;
//
//   for (var i = 0; i < touches.length; i++);
//     var idx = ongoingTouchIndexById(touches[i].identifier);
//     ongoingTouches.splice(idx, 1);
// }


// NAV BAR
var menuBtnTest = document.querySelector('.btn-element');
var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var navDesktop = document.querySelector('.nav-desktop');
var navMobile = document.querySelector('.nav-mobile');
var navMobileLogo = document.querySelector('.nav-mobile-logo');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
// menuBtnTest.addEventListener('click', () => {
//   menuBtnTest.classList.add('move-btn');
// });

menuBtn.addEventListener('click', () => {
    var navMobileScroll = document.querySelector('.nav--scroll-mobile');
    nav.classList.add('nav-full-height');
    // navMobile.classList.toggle('nav-full-height');
    navMobileLogo.style.visibility = "hidden";
    // navMobileScroll.style.backgroundColor = "transparent";
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');

    if (nav.classList.contains('nav-open')) {
      console.log('Nav-Mobile is open');
    }
    else {
      console.log('Nav-Mobile is closed');
      // function to remove class after the menu-bar is completely closed
      setTimeout(function(){
        console.log('Timeout fired');
        navMobile.classList.remove('nav-full-height');
        navMobileLogo.style.visibility = "visible";
        // navMobileScroll.style.backgroundColor = "white";

      }, 800);
    }
})

// get the current window height with: window.innerHeight
// calculate for desktop
var windowHeight = window.innerHeight,
    navBarDesktopHeight = navDesktop.offsetHeight,
    windowNavDesktopOffset = windowHeight - navBarDesktopHeight,

// calculate for mobile
    navBarMobileHeight = navDesktop.offsetHeight,
    windowNavMobileOffset = windowHeight - navBarMobileHeight;

document.addEventListener('scroll', function() {
  var scrollPosition = pageYOffset;

  // checks if the page is scrolled down
  // fires .scroll-effect to add a transition-effect
  // for a smooth background-color change

  // if (scrollPosition > 1 && scrollPosition < 20) {
  //   console.log(scrollPosition);
  //   navMobile.classList.toggle('scroll-effect');
  // }

  // if (scrollPosition > windowNavDesktopOffset) {
  //   console.log(scrollPosition + 'scrollPosition > windowNavDesktop');
  //   navDesktop.classList.add('scroll-effect');
  //   navDesktop.classList.add('nav--scroll-desktop');
  //   navMobile.classList.add('nav--scroll-mobile');
  // }

  if (scrollPosition > 50) {
    console.log(scrollPosition + 'scrollPosition > windowNavDesktop');
    navDesktop.classList.add('nav--scroll-desktop');
    navMobile.classList.add('nav--scroll-mobile');
  }

  // if (scrollPosition > 50 && scrollPosition < 51) {
  //   navDesktop.classList.add('scroll-effect');
  //   console.log('class .scroll-effect removed at scrollPosition: ' + scrollPosition);
  // }

  // removes the background-color if the frame reaches the top level again
  else {
    console.log('class removed: nav--scroll-desktop');
    navDesktop.classList.remove('nav--scroll-desktop');
    navMobile.classList.remove('nav--scroll-mobile');
  }
})


// SEARCHBAR
// add search bar functions
// JavaScript code
function search_content() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('animals');

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";
		}
	}
}

// SECTION: CONTENT
// CARDS > Prototype Cabin Turn effect
var cardPrototype = document.querySelector('.card-prototype');
var cardHeaderZipperBlock = document.querySelector('.card__header-zipper');
var cardZipper = document.querySelector('.zipper-block');
var cardZipperClose = document.querySelector('.card__header-close');
// var cardTurned = document.querySelector('.card-turned');

cardZipper.addEventListener('click', () => {
  console.log('cardZipper clicked');
  cardZipper.style.display = "none";
  cardHeaderZipperBlock.style.gridArea = "1/1/5/7";
  cardHeaderZipperBlock.classList.add('card-turned');

  // creates new div element
  var newDiv = document.createElement('div');
  // defines inner HTML of the div
  newDiv.innerHTML = '<div class=\"btn-card\"> \
                        X \
                      </div>';

  cardHeaderZipperBlock.style.display = "flex";
  cardHeaderZipperBlock.style.justifyContent = "flex-start";
  cardHeaderZipperBlock.style.alignItems = "flex-start";
  // appends the new div to the existing parent node
  while (newDiv.firstChild) {
    cardHeaderZipperBlock.appendChild(newDiv.firstChild);
  }

  // gets the btn element of the card
  var cardBtn = document.querySelector('.btn-card');

  // sets an event listener to the button
  cardBtn.addEventListener('click', () => {
    cardHeaderZipperBlock.style.alignItems = "flex-end";
    // removes the turned class styles
    cardHeaderZipperBlock.classList.remove('card-turned');
    // removes the button
    cardBtn.parentNode.removeChild(cardBtn);
    // turns it back to the original place
    cardHeaderZipperBlock.style.gridArea = "1/6/1/7";
    // makes the zipper visible again
    cardZipper.style.display = "flex";
  })
}
);


// RUNNING MINUTES
// const year = new Date().getFullYear();
// const month = new Date().getMonth();
// const choosenDate = new Date(2021, 05, 21).getTime();
// console.log('choosenDate: ' + choosenDate);
//
// let countup = setInterval(function() {
//   const today = new Date().getTime();
//   const diff = choosenDate - today;
//
//   let days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((diff % (1000 * 60)) / 1000);
//
//   console.log('Today: ' + today + '/ Diff: ' + diff);
//   document.getElementById("countup").innerHTML =
//     "<div class=\"days\"> \
//     <div class=\"c-number\">" + days + ' : '+ "</div></div> \
//     <div class=\"hours\"> \
//     <div class=\"c-number\">" + hours + ' : '+ "</div></div> \
//     <div class=\"minutes\"> \
//     <div class=\"c-number\">" + minutes + ' : '+ "</div></div> \
//     <div class=\"seconds\"> \
//     <div class=\"c-number\">" + seconds + "</div></div> \
//     <div class=\"left\"></div>\
//     </div>";
//
// }, 1000);


// CONTACT FORM
var form = document.getElementById('contact-form');
var submit = document.getElementById('submit');

submit.addEventListener('click', () => {
  // Submit form with id function.
  function submit_by_id() {
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("surname").value;
    var adress = document.getElementById("adress").value;
    var email = document.getElementById("email").value;
    console.log(firstname);
    console.log(surname);
    console.log(adress);
    console.log(email);
    if (validation()) {// Calling validation function
      form.submit(); //form submission
      alert(" firstname : " + firstname +
            " n surname : " + surname +
            " n zip-code : " + adress +
            " n Email : " + email +
            " n Form Id : " + form.getAttribute("id") + "nn Form Submitted Successfully......");
    }
  }

  // Name and Email validation
  function validation() {
    var firstname = document.getElementById('firstname').value;
    var surname = document.getElementById('surname').value;
    var email = document.getElementById('adress').value;
    var email = document.getElementById('email').value;
    // var marketing = document.getElementById('marketing').value;
    var emailReg = mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (firstname === ''  || surname === '' || email === '') {
      alert('Please fill all fields!');
      return false;
    }
    else if (!(email).match(emailReg)) {
      alert('Invalid Email!');
      return false;
    }
    else {
      return true;
    }
  }
});
