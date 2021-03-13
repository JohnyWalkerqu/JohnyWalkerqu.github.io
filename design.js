var body = document.querySelector('body');
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
    }
    else {
      // function to remove class after the menu-bar is completely closed
      setTimeout(function(){
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
    nav.classList.remove('nav-open');
    lineOne.classList.remove('line-cross');
    lineTwo.classList.remove('line-fade-out');
    lineThree.classList.remove('line-cross');
    link.classList.remove('fade-in');

    setTimeout(function(){
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
  //   navMobile.classList.toggle('scroll-effect');
  // }

  // if (scrollPosition > windowNavDesktopOffset) {
  //   navDesktop.classList.add('scroll-effect');
  //   navDesktop.classList.add('nav--scroll-desktop');
  //   navMobile.classList.add('nav--scroll-mobile');
  // }

  if (scrollPosition > 50) {
    navDesktop.classList.add('nav--scroll-desktop');
    navMobile.classList.add('nav--scroll-mobile');
    // logoColor.classList.add('grey');
    // logoColor.classList.remove('white');
  }

  // if (scrollPosition > 50 && scrollPosition < 51) {
  //   navDesktop.classList.add('scroll-effect');
  // }

  // removes the background-color if the frame reaches the top level again
  else {
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
// let cookieAccept = document.getElementById('accept-cookie'),
//     cookieDecline = document.getElementById('decline-cookie'),
//     cookieSettings = document.getElementById('open-cookie-settings')
//     cookieBox = document.querySelector('.cookie-bar');
//
// cookieAccept.addEventListener('click', function() {
//
//   if (cookieBox.classList.contains('hidden')) {
//     cookieBox.classList.remove('hidden');
//     setTimeout(function() {
//       cookieBox.classList.remove('visuallyhidden');
//     }, 20);
//   }
//   else {
//     cookieBox.classList.add('visuallyhidden');
//     cookieBox.addEventListener('transitioned', function(e) {
//       setTimeout(function() {
//         cookieBox.classList.add('hidden');
//       }, 1000);
//     }, {
//     capture: false,
//     once: true,
//     passive: false
//   });
// }
// }, false);
//
// cookieDecline.addEventListener('click', function() {
//
//   if (cookieBox.classList.contains('hidden')) {
//     cookieBox.classList.remove('hidden');
//     setTimeout(function() {
//       cookieBox.classList.remove('visuallyhidden');
//     }, 20);
//   }
//   else {
//     cookieBox.classList.add('visuallyhidden');
//     cookieBox.addEventListener('transitioned', function(e) {
//       setTimeout(function() {
//         cookieBox.classList.add('hidden');
//       }, 1000);
//     }, {
//     capture: false,
//     once: true,
//     passive: false
//   });
// }
// }, false);



// Google Analytics script
// var scriptOne = document.createElement('script').async;
// var scriptTwo = document.createElement('script');
// var head = document.getElementsByTagName('head')[0]
//
// scriptOne.type = 'text/javascript';
// scriptOne.src = 'https://www.googletagmanager.com/gtag/js?id=G-LMLBK5YKV0"';
//
// scriptTwo.innerHTML = 'window.dataLayer = window.dataLayer || []; \
//                        function gtag(){dataLayer.push(arguments);} \
//                        gtag(\'js\', new Date()); \
//                        gtag(\'config\', \'G-LMLBK5YKV0\')'
//
// cookieValue = document.cookie.match(/(;)?cookiebar=([^;]*);?/)[2];
// console.log(cookieValue);
// if (cookieValue == 'CookieAllowed') {
//   console.log('cookies appended');
//   head.appendChild(scriptOne);
//   head.appendChil(scriptTwo);
// }

// Global site tag (gtag.js) - Google Analytics
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-LMLBK5YKV0"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//
//   gtag('config', 'G-LMLBK5YKV0');
// </script>
// -------------------------------

// (function () {
//   "use strict";
//
//   var gtagTrackInfo = 'gtagExpTime'; // The cookie name
//   var cookieLifetime = 60; // Cookie expiry in days
//
//    /**
//     * Set a cookie
//     * @param cname - cookie name
//     * @param cvalue - cookie value
//     * @param exdays - expiry in days
//     */
//    var _setCookie = function (cname, cvalue, exdays) {
//      var d = new Date();
//      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//      var expires = "expires=" + d.toUTCString();
//      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//    };
//
//    // set Google Analytics script
//    var scriptOne = document.createElement('script').async;
//    scriptOne.type = 'text/javascript';
//    scriptOne.src = 'https://www.googletagmanager.com/gtag/js?id=G-LMLBK5YKV0"';
//
//    var head = document.getElementsByTagName('head')[0]
//    head.appendChild(script);
//
//    /**
//     * Get a cookie
//     * @param cname - cookie name
//     * @returns string
//     */
//    var _getCookie = function (cname) {
//      var name = cname + "=";
//      var ca = document.cookie.split(';');
//      for (var i = 0; i < ca.length; i++) {
//        var c = ca[i];
//        while (c.charAt(0) == ' ') {
//          c = c.substring(1);
//        }
//        if (c.indexOf(name) == 0) {
//          return c.substring(name.length, c.length);
//        }
//      }
//      return "";
//    };
//
//    /**
//     * Should the cookie popup be shown?
//     */
//    var _shouldShowPopup = function () {
//      if (_getCookie(cookieName)) {
//        return false;
//      } else {
//        return true;
//      }
//    };
//
//    // Show the cookie popup on load if not previously accepted
//    if (_shouldShowPopup()) {
//      // $('#cookieModal').modal('show');
//      $('cookie-bar').modal('show');
//    }
//
//    // Modal dismiss btn - consent
//    $('#cookieModalConsent').on('click', function () {
//      _setCookie(cookieName, 1, cookieLifetime);
//    });
//
// })();


// SECTION: CONTENT
// CARDS > Prototype Cabin Turn effect
var cardPrototypeOne = document.getElementById('card-prototype');
var cardPrototype = document.querySelector('.card-prototype');
var cardBody = document.querySelector('.card-body');
var cardHeaderZipperBlock = document.querySelector('.card__header-zipper');
var cardCamIcon = document.querySelector('.bi-camera');
var cardZipper = document.querySelector('.zipper-block');
var cardZipperClose = document.querySelector('.card__header-close');
var accordionElements = document.getElementById('accordionExample');
// var cardTurned = document.querySelector('.card-turned');

cardCamIcon.addEventListener('click', () => {
  cardPrototype.style.backgroundColor = "#fff";
  cardPrototype.style.height = "500px";
  cardPrototype.classList.add('justy-align');
  cardBody.classList.add('overlay');
  cardCamIcon.style.display = "none";
  accordionElements.style.display = "none";
  // cardBody.style.visibility = "hidden";

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
                                  src=\"/content/images/Cube-draw-simple.png\" \
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
    // turns on visibility of complete card body
    cardBody.style.visibility = "visible";
    // makes the zipper visible again
    cardCamIcon.style.display = "flex";
    cardPrototype.style.height = "auto";
    cardPrototype.classList.remove('justy-align');
    accordionElements.style.display = "block";

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

  var firstname = document.getElementById("firstname").value;
  var surname = document.getElementById("surname").value;
  var adress = document.getElementById("adress").value;
  var email = document.getElementById("email").value;
  var option = document.getElementById("marketing").value;
  var comment = document.getElementById("comment").value;

  if (validation()) {// Calling validation function
    form.submit(); //form submission

    alert(" firstname : " + firstname +
          " n surname : " + surname +
          " n zip-code : " + adress +
          " n Email : " + email +
          " n Form Id : " + form.getAttribute("id") + "nn Form Submitted Successfully......");
  }

  // Name and Email validation
  function validation() {
    console.log('validation reached');
    var firstname = document.getElementById('firstname').value;
    var surname = document.getElementById('surname').value;
    var adress = document.getElementById('adress').value;
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
      // console.log('trigger modal');
      var contactInfo = document.getElementById('insert-contact-info');
      contactInfo.innerHTML = "<p>Vorname: " + firstname + "</p> \
                              <p>Nachname: " + surname + "</p> \
                              <p>Postleitzahl: " + adress + "</p> \
                              <p>Email: " + email + "</p> \
                              <p>Auswahl: " + marketing + "</p> \
                              <p>Kommentar: " + comment + "</p>";

      $('#modal').modal('toggle');
      return true;

        // <div class="alert alert-success" role="alert">
        // This is a success alert—check it out!
        // </div>
    }
  }
});

// COPY Button
$(document).on('click', '#copy', function() {

  alert('Eingegebene Inhalte wurden kopiert.')
  var range = document.createRange();

  range.selectNode(document.getElementById("insert-contact-info"));

  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect
});

// COPY MODE ON
$(document).on('click', '#copy-mode-on', function() {
  alert('copy mode activated');
  body.style.webkitUserSelect = "auto";
  body.style.mozUserSelect = "auto";
  body.style.msUserSelect = "auto";
  body.style.oUserSelect = "auto";
  body.style.userSelect = "auto";

});
