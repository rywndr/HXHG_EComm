const form = document.querySelector("form");
const usernameInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const users = {
  rywndr: "kerenabiesz",
  miizzuu: "juju",
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the entered username and password match one of the stored accounts
  if (users[username] === password) {
    alert("Welcome " + username + "!");

    // Redirect to landingPage.html index.html in the root folder
    window.location.href = "/landingPage.html";
  } else {
    alert("Invalid email or password");
  }

  // Reset the form
  form.reset();
  usernameInput.focus();
});
