import "@/scss/auth.scss";

// Form Validation
const form = document.querySelector(".form-auth");
const requiredInputs = document.querySelectorAll(".js-input");

const inputLogin = document.querySelector(".form__login");
const inputPass = document.querySelector(".form__pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginVal = inputLogin.value;
  const passVal = inputPass.value;

  const emptyInputs = Array.from(requiredInputs).filter(
    (input) => input.value === ""
  );

  requiredInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
      input.nextElementSibling.textContent =
        "Пожалуйста, заполните поле верно!";
    } else {
      input.classList.remove("error");
      input.nextElementSibling.textContent = "";
    }
  });

  if (emptyInputs.length === 0) {
    form.submit();
    form.reset();
    alert("Please wait...");
  }
});
// Form Validation
