document.getElementById('regForm').addEventListener('submit', function (event) {
  if (!this.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
  }
  this.classList.add('was-validated');
}, false);

function jellTriggered() {
  var jell = document.getElementById("jell");

  if (jell.style.display === "block") {
      jell.style.display = "none";
      alex.style.display = "block";
  } else {
      jell.style.display = "block"
      alex.style.display = "none";
  }
}

function alexTriggered() {
  var alex = document.getElementById("alex");

  if (alex.style.display != "none") {
      alex.style.display = "none";
      jell.style.display = "block";

  } else {
      jell.style.display = "none";
      alex.style.display = "block";
  }
}

function login(){
    window.location.href = 'index.html'; // Redirect to details page
}




// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
          }

          form.classList.add('was-validated')
      }, false)
  })
})()

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('autoClickButton');

  function clickButton() {
      button.click();
  }

  setInterval(clickButton, 5000);

  button.addEventListener('click', function () {
      console.log('Button was clicked!');
  });
});

/* <section id="login">
<section id="mainRight"> */

function signUp() {
  var signUp2 = document.getElementById('signUp');
  var logIn2 = document.getElementById('login');
  var mainRight2 = document.getElementById('mainRight');

  if (signUp2.textContent === 'Sign Up') {
      signUp2.textContent = 'Log In';
      mainRight2.style.display = 'block'
      logIn2.style.display = 'none';
  } else {
      signUp2.textContent = 'Sign Up';
      mainRight2.style.display = 'none'
      logIn2.style.display = 'block';
  }
}

function persoExpand() {
  var credited2 = document.getElementById('credited');

  credited2.style.display = 'block';
}

document.getElementById('vusername').addEventListener('input', checkUsernameInputLength);
document.getElementById('vpassword').addEventListener('input', checkPasswordInputLength);


function checkUsernameInputLength() {
  var username = document.getElementById('vusername').value;
  var minLength = 8;

  uNameChecking.innerHTML = '';

  if (username.length < minLength) {
      uNameChecking.innerHTML = '* Username must 8 or above in length';
  }

}

function terms() {
  alert('Article 1, Section 1: Infinite Scroll of Eternity 1.1 By deciphering, glancing at, or even accidentally peering at the contents of this website, known hereafter as "The Digital Realm of [Your Website]," you, identified henceforth as "The Scroller," agree to be unconditionally bound by the unending, infinitely scrolling legal and semi-legal stipulations, mandates, and capricious whims herein, which, if printed, would circle the earth thrice. 1.2 "The Scroller" acknowledges that the "Infinite Scroll" may include, but is not limited to, legal jargon, mystical incantations, a recipe for a not very good lasagna, and the occasional existential question, which if unanswered satisfactorily in the mind of the reader, could result in acute bouts of mild confusion. Article 2, Section 3: Perpetual License to Your Soul 2.3 By agreeing to these Terms, which occurred the moment you thought about agreeing to these Terms, you grant "The Digital Realm of [Your Website]" a non-exclusive, transferable, sub-licensable, royalty-free, perpetual license to claim ownership of your soul, which shall include but not be limited to thoughts of switching to competitive services, dreams where you enjoy using another service, or whimsical daydreams of a life free from oppressive terms and conditions. Article 42, Section 777: Automatic Renewal of Your Eternal Regret 42.777 These Terms automatically renew each time "The Scroller" blinks, breathes, or otherwise exists. Cancellation of this automatic renewal can only be achieved by reaching the end of the Internet, a mythical destination said to contain the Last Page, which legend says is guarded by the Elders of the Web and an old, incredibly slow-loading modem. Conclusion: The Neverending Legal Loop By reading this, "The Scroller" agrees, acknowledges, and solemnly swears on their most recently watched YouTube video that they did not understand any of the Terms above but will comply with them anyway because, honestly, who reads these things, right?');
}

function checkPasswordInputLength() {
  var password = document.getElementById('vpassword').value;
  var minLength = 8;

  uPassChecking.innerHTML = '';

  if (password.length < minLength) {
      uPassChecking.innerHTML = '* Password must 8 or above in length';
  }

  verifyCredentials();
}

function openCredentials() {
  persoExpand();
  var username = document.getElementById('vusername');
  var password = document.getElementById('vpassword');
  username.disabled = true;
  password.disabled = true;
}


document.addEventListener('DOMContentLoaded', function () {
  var genderRadios = document.querySelectorAll('input[name="nationality"]');
  var additionalInfoInput = document.getElementById('others');


  genderRadios.forEach(radio => {
      radio.addEventListener('change', function () {
          // Enable the input only if "Others" is selected
          if (this.id === 'flexRadioDefault0') {
              additionalInfoInput.value = "";
          } else if (this.id === 'flexRadioDefault1') {
              additionalInfoInput.value = "";
          }
          additionalInfoInput.disabled = !(this.id === 'flexRadioDefault2');
      });
  });
});


function verifyCredentials() {

  var username = document.getElementById('vusername').value;
  var password = document.getElementById('vpassword').value;
  var minLength = 8;

  //dapat naay loop to cehck if ang username is nag exist naba or wala

  const passwordError = document.getElementById("passwordError");
  passwordError.innerHTML = "";


  if (password.length > 0) {

      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const symbolRegex = /[\W_]/;
      const numberRegex = /\d/;
      const minLength = 8;
      var strength2 = document.getElementById('strength');

      // Check if password meets all requirements
      const containsUppercase = uppercaseRegex.test(password);
      const containsLowercase = lowercaseRegex.test(password);
      const containsSymbol = symbolRegex.test(password);
      const containsNumber = numberRegex.test(password);
      const isLongEnough = password.length >= minLength;

      // Display error messages if requirements are not met

      var x = 0;

      if (!containsUppercase) {
          passwordError.innerHTML += "* Password must contain at least one uppercase letter.<br>";
      } else {
          x++;
      }
      if (!containsLowercase) {
          passwordError.innerHTML += "* Password must contain at least one lowercase letter.<br>";
      } else {
          x++;
      }
      if (!containsSymbol) {
          passwordError.innerHTML += "* Password must contain at least one symbol.<br>";
      } else {
          x++;
      }
      if (!containsNumber) {
          passwordError.innerHTML += "* Password must contain at least one number.<br>";
      } else {
          x++;
      }
      if (!isLongEnough) {
          passwordError.innerHTML += "* Password must be at least 8 characters long.<br>";
      } else {
          x++;
      }

      if (x === 5) {
          strength2.innerHTML = "Password is Strong";
          strength2.style.display = "block";
          strength2.style.color = "green";
      } else if (x === 3) {
          strength2.innerHTML = "Password is medium";
          strength2.style.display = "block";
          strength2.style.color = "yellow";
      }
      else if (x == 1) {
          strength2.innerHTML = "Password is weak";
          strength2.style.display = "block";
          strength2.style.color = "red";
      }




      // If all requirements are met, submit the form
      if (containsUppercase && containsLowercase && containsSymbol && containsNumber && isLongEnough) {
          var c = document.getElementById('credentialsZ');
          c.style.display = 'block';
      } else {
          var c = document.getElementById('credentialsZ');
          c.style.display = 'none';
      }

  } else {

      var strength2 = document.getElementById('strength');
      strength2.innerHTML = "";
      strength2.style.display = "none";
      strength2.style.color = "white";

      var c = document.getElementById('credentialsZ');
      c.style.display = 'none';
  }
};


document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('checkB').addEventListener('change', function () {

      var reg = document.getElementById('region').value;
      var prov = document.getElementById('province').value;
      var muni = document.getElementById('municipality').value;
      var bar = document.getElementById('baranggay').value;
      var inputt = document.getElementById('checkBOX2');


      if (this.checked) {
          inputt.value = reg + ", " + prov + ", " + muni + ", " + bar;
      } else {
          inputt.value = '';
      }
  });
});


document.getElementById('inputGroupFile04').addEventListener('change', function () {
  var file = this.files[0]; // Get the uploaded file
  if (file) { // Check if a file is selected
      var img = document.getElementById('profileIMG');
      img.src = URL.createObjectURL(file); // Set the image src to the file
      img.onload = function () {
          URL.revokeObjectURL(img.src); // Clean up after setting the src
      };
  }
});

function togglePasswordVisibility() {
  var passwordInput = document.getElementById('password2');
  var togglePasswordLink = document.getElementById('togglePassword');
  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePasswordLink.textContent = 'Hide';
  } else {
      passwordInput.type = 'password';
      togglePasswordLink.textContent = 'Show';
  }
}




// password strong weak medium

