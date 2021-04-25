function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm() {
 
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  var regno = document.contactForm.regno.value;



  var nameErr = emailErr = mobileErr = regerr = true;

  // Validate name
  if(name == "") {
      printError("nameErr", "Please enter your name");
  } else {
      var regex = /^[a-zA-Z\s]+$/;
      if(regex.test(name) === false) {
          printError("nameErr", "Please enter a valid name");
      } else {
          printError("nameErr", "");
          nameErr = false;
      }
  }

      if(regno == "") {
      printError("regerr", "Please enter your Reg number");
  } else {
      var regex = /^[0-9]{2}[A-Z]{3}[0-9]{4}$/;
      if(regex.test(regno) === false) {
          printError("regerr", "Please enter a valid Reg no");
      } else {
          printError("regerr", "");
          regerr = false;
      }
  }

  if(email == "") {
      printError("emailErr", "Please enter your email address");
  } else {

      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email) === false) {
          printError("emailErr", "Please enter a valid email address");
      } else{
          printError("emailErr", "");
          emailErr = false;
      }
  }

  if(mobile == "") {
      printError("mobileErr", "Please enter your mobile number");
  } else {
      var regex = /^[1-9]\d{9}$/;
      if(regex.test(mobile) === false) {
          printError("mobileErr", "Please enter a valid 10 digit mobile number");
      } else{
          printError("mobileErr", "");
          mobileErr = false;
      }
  }
  if((nameErr || emailErr || mobileErr || regerr) == true) {
     return false;
  } else {
      
      var dataPreview = "You've entered the following details: \n" +
                        "Full Name: " + name + "\n" +
                        "Email Address: " + email + "\n" +
                        "Mobile Number: " + mobile + "\n" +
                        "Registration Number: "+regno+"\n"
      }

  alert(dataPreview);
  }
