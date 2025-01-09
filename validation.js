

function validateSignUpInputCredentials() {
  let username = document.getElementById("signup-fullname").value;
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;
  let confirmpassword = document.getElementById("signup-confirm-password").value;

  let nameErr = emailErr = passwordErr = confirmPasswordErr = true;

  // Validate username
  if (username === "") {
      printError("nameErr", "Please enter your Name");
  } else {
      // Regular expression for username validation (allows letters and spaces)
      let regex = /^[A-Za-z\s]+$/;
      if (!regex.test(username)) {
          printError("nameErr", "Please enter a valid Name");
      } else {
          printError("nameErr", "");
          nameErr = false;
      }
  }

  // Validate email address
  if (email === "") {
      printError("emailErr", "Please enter your email address");
  } else {
      // Regular expression for basic email validation
      let emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
          printError("emailErr", "Please enter a valid email address");
      } else {
          printError("emailErr", "");
          emailErr = false;
      }
  }

  // Validate password
  if (password === "") {
      printError("passwordErr", "Please enter your password");
  } else {
      printError("passwordErr", "");
      passwordErr = false;
  }

  // Validate confirm password
  if (confirmpassword === "") {
      printError("confirmPasswordErr", "Please confirm your password");
  } else if (password !== confirmpassword) {
      printError("confirmPasswordErr", "Passwords do not match");
  } else {
      printError("confirmPasswordErr", "");
      confirmPasswordErr = false;
  }

  return !(nameErr || emailErr || passwordErr || confirmPasswordErr);
}
function validateLogInInputCredentials() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    let emailErr = passwordErr = true;

    // Validate email address
    if (email === "") {
        printError("emailErr", "Please enter your email address");
    } else {
        let emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate password
    if (password === "") {
        printError("passwordErr", "Please enter your password");
    } else {
        printError("passwordErr", "");
        passwordErr = false;
    }

    return !(emailErr || passwordErr);
}



