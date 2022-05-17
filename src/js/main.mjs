import "@/scss/style.scss";

console.log("Hellooooooo.......");
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;

      // Коэффициент, регулирующий момент старта анимации
      const animStart = 4;

      // Настройки момента старта анимации
      // (когда объект получает класс он анимируется)
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }

  // Функция позволяет корректно отобразить насколько
  // необходимый объект находится ниже самого верха страницы
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  animOnScroll();
}

// Custom Select
const selected = document.querySelector(".museum-group__selected");
const optionsContainer = document.querySelector(
  ".museum-group__options-container"
);

const optionsList = document.querySelectorAll(".museum-group__option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector(".museum-group__label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

// Валидация формы
const form = document.querySelector(".js-form"),
  formInputs = document.querySelectorAll(".js-input"),
  inputPhone = document.querySelector(".js-input-phone"),
  emptyImputs = Array.from(formInputs).filter((input) => input.value === ""),
  errorMessages = document.querySelectorAll(".errors");

const validatePhone = (phone) => {
  let re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  return re.test(String(phone));
};
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Таймер обратного отсчета
  let timer;
  let x = 30; // стартовое значение обратного отсчета
  function countdown() {
    document.querySelector(
      ".time"
    ).innerHTML = `Мы перезвоним Вам через ${x} секунд. <br/>Не покидайте страницу`;
    x--;
    if (x < 0) {
      clearTimeout(timer); // таймер остановится на нуле
    } else {
      timer = setTimeout(countdown, 1000);
    }
  }
  const phoneVal = inputPhone.value;

  formInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
      input.nextElementSibling.textContent = "Введите имя";
    } else {
      input.classList.remove("error");
      input.nextElementSibling.textContent = "";
    }
  });

  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add("error");
    inputPhone.nextElementSibling.textContent = "Введите верный телефон";
  } else {
    inputPhone.classList.remove("error");
    inputPhone.nextElementSibling.textContent = "";
    countdown();
    setTimeout(() => {
      form.submit();
      form.reset();
    }, 31000);
  }
});
