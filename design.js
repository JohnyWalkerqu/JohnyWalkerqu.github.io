var sectionLanding = document.querySelector('.landing');
var sectionContact = document.querySelector('.input-form');
var header = document.querySelector('header');


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
var logoColor = document.querySelector('.logo');

console.log(logoColor);

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

// close navbar if menu-item is selected
$( ".nav-item-mobile" ).click(function() {
  // to get some time before section is reached
  setTimeout(function() {
    console.log('select detected');
    nav.classList.remove('nav-open');
    lineOne.classList.remove('line-cross');
    lineTwo.classList.remove('line-fade-out');
    lineThree.classList.remove('line-cross');
    link.classList.remove('fade-in');

    setTimeout(function(){
      console.log('Timeout fired');
      navMobile.classList.remove('nav-full-height');
      navMobileLogo.style.visibility = "visible";
      // navMobileScroll.style.backgroundColor = "white";
    }, 800);
  }, 500);
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
    // logoColor.classList.add('grey');
    // logoColor.classList.remove('white');
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
    // logoColor.classList.remove('grey');
    // logoColor.classList.add('white');
  }
})

// EASTER EGG - SWITCH BACKGROUND
var backgroundImage = document.querySelector('.landing-background-image'),
    sectionHome = document.getElementById('home'),
    card = document.querySelector('.card'),
    sectionContact = document.querySelector('.input-form');

$( ".switch-left" ).click(function() {
  console.log('switch clicked left');
  $( ".landing-background-settings" ).toggleClass( "switch-background-left" );
  $( ".logo" ).toggleClass( "grey lightGreen" );

  // iterate through each object with same class
  // $(".grey").each(function(i, obj) {
  //   $( this ).toggleClass( "border-dg color-dg");
  // })

})

$( ".switch-right" ).click(function() {
  // adds .bi-chevron-down-collapse on click
  // removes .btn-shadow on click
  console.log('switch clicked right');
  $( ".landing-background-settings" ).toggleClass( "default switch-background-right" );
})

  // backgroundImage.style.backgroundImage = "url(\'/bilder/pexels-veeterzy-39811.jpg\')";
  // card.style.backgroundColor = "#d2a873";
  // sectionContact.style.backgroundColor = "#d2a873";


// COOKIE BAR
/*
Cookie bar
    Initially everything should be toggled off.
    Clicking on "accept" should toggle all cookies on.

Clicking [cookie settings]
    Accept recommended settings
        ..should toggle all options.
        ...and closes modal.
    Toggling one option toggles that option on or off.
*/

// definition of the variables
let cookieAccept = document.getElementById('accept-cookie'),
    cookieDecline = document.getElementById('decline-cookie'),
    cookieSettings = document.getElementById('open-cookie-settings')
    cookieBox = document.querySelector('.cookie-bar');

cookieAccept.addEventListener('click', function() {
  console.log('Accept clicked');

  if (cookieBox.classList.contains('hidden')) {
    cookieBox.classList.remove('hidden');
    setTimeout(function() {
      cookieBox.classList.remove('visuallyhidden');
    }, 20);
  }
  else {
    cookieBox.classList.add('visuallyhidden');
    cookieBox.addEventListener('transitioned', function(e) {
      setTimeout(function() {
        cookieBox.classList.add('hidden');
      }, 1000);
    }, {
    capture: false,
    once: true,
    passive: false
  });
}
}, false);

cookieDecline.addEventListener('click', function() {
  console.log('Decline clicked');

  if (cookieBox.classList.contains('hidden')) {
    cookieBox.classList.remove('hidden');
    setTimeout(function() {
      cookieBox.classList.remove('visuallyhidden');
    }, 20);
  }
  else {
    cookieBox.classList.add('visuallyhidden');
    cookieBox.addEventListener('transitioned', function(e) {
      setTimeout(function() {
        cookieBox.classList.add('hidden');
      }, 1000);
    }, {
    capture: false,
    once: true,
    passive: false
  });
}
}, false);

// (function () {
//   "use strict";
//
//   var cookieName = 'tplCookieConsent'; // The cookie name
//   var cookieLifetime = 365; // Cookie expiry in days
//
//   /**
//    * Set a cookie
//    * @param cname - cookie name
//    * @param cvalue - cookie value
//    * @param exdays - expiry in days
//    */
//   var _setCookie = function (cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     var expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   };
//
//   /**
//    * Get a cookie
//    * @param cname - cookie name
//    * @returns string
//    */
//   var _getCookie = function (cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(';');
//     for (var i = 0; i < ca.length; i++) {
//       var c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   };
//
//   /**
//    * Should the cookie popup be shown?
//    */
//   var _shouldShowPopup = function () {
//     if (_getCookie(cookieName)) {
//       return false;
//     } else {
//       return true;
//     }
//   };
//
//   // Show the cookie popup on load if not previously accepted
//   if (_shouldShowPopup()) {
//     $('#cookieModal').modal('show');
//   }
//
//   // Modal dismiss btn - consent
//   $('#cookieModalConsent').on('click', function () {
//     _setCookie(cookieName, 1, cookieLifetime);
//   });
//
// })();


// SECTION: CONTENT
// CARDS > Prototype Cabin Turn effect
var cardPrototype = document.querySelector('.card-prototype');
var cardBody = document.querySelector('.card-body');
var cardText = document.querySelector('.card-text');
var cardHeaderZipperBlock = document.querySelector('.card__header-zipper');
var cardCamIcon = document.querySelector('.bi-camera');
var cardZipper = document.querySelector('.zipper-block');
var cardZipperClose = document.querySelector('.card__header-close');
// var cardTurned = document.querySelector('.card-turned');

cardCamIcon.addEventListener('click', () => {
  cardPrototype.style.backgroundColor = "transparent";
  cardBody.classList.add('overlay');
  console.log('overlay added');
  cardText.style.visibility = "hidden";
  cardText.style.display = "none";
  cardCamIcon.style.display = "none";
  console.log('cam icon display:none');
  cardBody.style.visibility = "hidden";
  console.log('cardBody visibility:hidden');

  // creates div element button
  var newDiv = document.createElement('div');
  // defines inner HTML of the div
  newDiv.innerHTML = '<div class=\"btn-card\"> \
                        <i class=\"bi bi-x\"></i> \
                      </div>';

  // creates div element image
  var newDivImage = document.createElement('div');
  // defines inner HTML of the div
  newDivImage.innerHTML = '<div \
                                class=\"image-cube-drawing-simple\"> \
                                <img id = \"image-card-turned\" \
                                  src=\"/bilder/Cube-draw-simple.png\" \
                                  alt=\"cube draw simple\"> \
                                </div>';

  // appends the new div to the existing parent node
  while (newDiv.firstChild) {
    cardPrototype.appendChild(newDiv.firstChild);
  }

  // appends the new div to the existing parent node
  while (newDivImage.firstChild) {
    cardPrototype.appendChild(newDivImage.firstChild);
  }

  // gets the btn element of the card
  var cardBtn = document.querySelector('.btn-card');
  // gets the image element of the card
  var image = document.querySelector('.image-cube-drawing-simple');

  // sets an event listener to the button
  cardBtn.addEventListener('click', () => {
    cardHeaderZipperBlock.style.alignItems = "flex-end";
    // removes the turned class styles
    cardHeaderZipperBlock.classList.remove('card-turned');
    // removes the button
    cardBtn.parentNode.removeChild(cardBtn);
    // removes the image
    image.parentNode.removeChild(image);
    // removes the overlay properties
    cardBody.classList.remove('overlay');
    // turns on visibility of card text
    cardText.style.visibility = "visible";
    cardText.style.display = "block";
    // turns on visibility of complete card body
    cardBody.style.visibility = "visible";
    // makes the zipper visible again
    cardCamIcon.style.display = "flex";
    // cardPrototype.style.backgroundColor = "var(--backgroundColorSecInput)";
  })
}
);

// Card - Button Cevron Turn effect
var cardButtonChevron = document.querySelector('.btn-card-footer');
var chevronTurn = document.querySelector('.bi-chevron-down');

$( ".btn-card-footer" ).click(function() {
  // adds .bi-chevron-down-collapse on click
  // removes .btn-shadow on click
  $( this ).toggleClass( "bi-chevron-down-collapse btn-shadow" );
})


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
