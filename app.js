const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const togglePassword = document.getElementById("togglePassword");

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    firstName.classList.add("error");
    const errorElement = document.getElementById("firstNameError");
    errorElement.textContent = "First Name cannot be empty";
  } else {
    firstName.classList.remove("error");
    const errorElement = document.getElementById("firstNameError");
    errorElement.textContent = "";
  }
  // Check last name

  if (lName === "") {
    lastName.classList.add("error");
    const errorElement = document.getElementById("lastNameError");
    errorElement.textContent = "Last Name cannot be empty";
  } else {
    lastName.classList.remove("error");
    const errorElement = document.getElementById("lastNameError");
    errorElement.textContent = "";
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    email.classList.add("error");
    const errorElement = document.getElementById("emailError");
    errorElement.textContent = "Looks like this is not an email";
  } else {
    email.classList.remove("error");
    const errorElement = document.getElementById("emailError");
    errorElement.textContent = "";
  }

  // Check password

  if (passwordVal === "") {
    password.classList.add("error");
    const errorElement = document.getElementById("passwordError");
    errorElement.textContent = "Password cannot be empty";
  } else {
    password.classList.remove("error");
    const errorElement = document.getElementById("passwordError");
    errorElement.textContent = "";
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

togglePassword.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // Toggle the eye icon (you can switch to a different icon or style it)
  togglePassword.textContent = type === "password" ? "\u{1F441}" : "\u{1F441}";
});
