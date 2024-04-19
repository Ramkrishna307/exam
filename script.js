function validatePassword() {
  const password = document.getElementById("password").value;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const symbolRegex = /[^A-Za-z0-9]/;
  
  const invalidPara = document.getElementById("invalid");
  const validPara = document.getElementById("valid");
  if (password === "") {
    invalidPara.innerText = "Please enter a password!";
    validPara.innerText = "";
  } else if (
    password.length >= 8 &&
    password.length <= 50 &&
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    digitRegex.test(password) &&
    symbolRegex.test(password)
  ) {
    validPara.innerText = "Congratulations! Password is valid!";
    invalidPara.innerText = "";
  } else {
    invalidPara.innerText =
      "!Passsword length must between (8-50) and contains one uppercase letter, one lowercase letter, one digit and one symbol.";
    validPara.innerText = "";
  }
}
