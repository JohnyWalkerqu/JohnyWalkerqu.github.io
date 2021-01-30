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
