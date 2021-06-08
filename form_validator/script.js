const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//? function checkRequired
function checkRequired(arr) {
  arr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getCapital(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//? function checkLength
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getCapital(input)} must be ${min} characters`);
  } else if (input.value.length > max) {
    showError(
      input,
      `${getCapital(input)} should not exceed ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//? for capitalizing the first letter
function getCapital(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//? check password match
function checkPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords doesn't match");
  }
}

//todo validate email

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//todo adding show error function
function showError(input, message) {
  const parent = input.parentElement;
  parent.className = "form-control error";
  const small = parent.querySelector("small");
  small.innerHTML = message;
}

//tod adding success function

function showSuccess(input) {
  const parent = input.parentElement;
  parent.className = "form-control success";
}

//todo adding event listener

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 20);
  checkLength(password, 6, 20);
  checkEmail(email);
  checkPassword(password, password2);
});
