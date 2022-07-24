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


document.addEventListener('DOMContentLoaded', () => {

  const followCursor = () => { // объявляем функцию followCursor
    const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

    window.addEventListener('mousemove', e => { // при движении курсора
      const target = e.target // определяем, где находится курсор
      if (!target) return

      if (target.closest('a')) { // если курсор наведён на ссылку
        el.classList.add('follow-cursor_active') // элементу добавляем активный класс
      } else { // иначе
        el.classList.remove('follow-cursor_active') // удаляем активный класс
      }

      el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
      el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
    })
  }

  followCursor() // вызываем функцию followCursor

})