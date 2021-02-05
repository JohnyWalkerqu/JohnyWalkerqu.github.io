var sectionLanding = document.querySelector('.landing');
var sectionContact = document.querySelector('.input-form');


// NAV BAR
var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var navDesktop = document.querySelector('.nav-desktop')
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})

// show navbar on page scroll
// calculate for mobile
// var windowHeight = window.innerHeight,
//     navBarHeight = nav.offsetHeight,
//     windowNavOffset = windowHeight-navBarHeight;
//
// // calculate for desktop
var windowHeight = window.innerHeight,
    navBarDesktopHeight = navDesktop.offsetHeight,
    windowNavDesktopOffset = windowHeight - navBarDesktopHeight;

// document.addEventListener('scroll', function(e) {
//   var scrollPosition = pageYOffset;
//
//   if (scrollPosition > windowNavOffset) {
//     console.log('current scroll position' + scrollPosition);
//     console.log('current window nav offset' + windowNavOffset);
//     // adds the class .nav--scroll to the nav-element
//     // menuBtn.classList.add('nav--scroll');
//   }
//   if (scrollPosition > windowNavDesktopOffset) {
//     console.log('navBarDesktopHeight is' + navBarDesktopHeight);
//     console.log('current scroll position' + scrollPosition);
//     console.log('current window nav offset' + windowNavOffset);
//     // console.log('scroll for desktop');
//     // navDesktop.classList.add('nav--scroll-desktop');
//   }
//    else {
//     // nav.classList.remove('nav--scroll');
//     // navDesktop.classList.remove('nav--scroll-desktop');
//   }
// });

document.addEventListener('scroll', function() {
  var scrollPosition = pageYOffset;

  if (scrollPosition > 50) {
    console.log('class added: nav--scroll-desktop');
    navDesktop.classList.add('nav--scroll-desktop');
  }
  else {
    console.log('class removed: nav--scroll-desktop');
    navDesktop.classList.remove('nav--scroll-desktop');
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



addEventListener = function () {



  var form = getElementById('contact-form');

  // Submit form with id function.
  function submit_by_id() {
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;

    if (validation()) {// Calling validation function
      form.submit(); //form submission
      alert(" firstname : " + firstname +
            " n surname : " + surname +
            " n Email : " + email +
            " n Form Id : " + form.getAttribute("id") + "nn Form Submitted Successfully......");
    }
  }

  // Name and Email validation
  function validation() {
    var firstname = document.getElementById('firstname').value;
    var surname = document.getElementById('surname').value;
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

  form.onclick = function() {
    alert('hello');
    console.log('hello');
  }
};
