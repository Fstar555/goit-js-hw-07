const loginForm = document.querySelector(".login-form");
const emailIntput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

const form = (event) => {
  event.preventDefault();

  const emailValue = emailIntput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
  } else {
    console.log(
      `Email:${emailValue}
            Password:${passwordValue}`,
      loginForm(reset)
    );
  }
};

loginForm.addEventListener("submit", form);
