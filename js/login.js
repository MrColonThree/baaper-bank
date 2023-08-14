// Step-1: add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // Step-2: get the email address indide the email input field
  // Always remember to use .value to get the text from input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // Step-3: get password
  //3.a Set id on the html element
  //3.b Get the element
  //3.c get the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  console.log(email, password);
  // DANGER: Don't check verify password on the client sitde
  // Step-4: Verify email and password and check valid user or not
  if (email === "sontan@baap.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
