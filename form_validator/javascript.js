const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const pwd = document.getElementById("password");
const pwd2 = document.getElementById("password2");

// TOdo validate email

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Todo showError function

function showError(input, message) {
  const parent = input.parentElement;
  parent.className = "form-control error";
  const small = parent.querySelector("small");
  small.innerText = message;
}

//Todo ShowSuccess function

function showSuccess(input) {
  const parent = input.parentElement;
  parent.className = "form-control success";
}

//Todo adding event listeners

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "UserName Required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "email Required");
  } else if (!validateEmail(email.value)) {
    showError(email, "Not a valid email");
  } else {
    showSuccess(email);
  }

  if (pwd.value === "") {
    showError(pwd, "Password Required");
  } else {
    showSuccess(pwd);
  }

  if (pwd2.value === "") {
    showError(pwd2, "Password 2 Required");
  } else {
    showSuccess(pwd2);
  }
});
