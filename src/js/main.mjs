import "@/scss/style.scss";
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
  inputName = document.querySelector(".js-input-name"),
  emptyImputs = Array.from(formInputs).filter((input) => input.value === ""),
  errorMessages = document.querySelectorAll(".errors");

const validatePhone = (phone) => {
  let re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  return re.test(String(phone));
};

const validateName = (name) => {
  let reg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
  return reg.test(String(name));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Таймер обратного отсчета
  let timer;
  let x = 5; // стартовое значение обратного отсчета
  function countdown() {
    document.querySelector(
      ".time"
    ).innerHTML = `Мы перезвоним Вам через ${x} секунд. <br/>Не покидайте страницу`;
    x--;
    if (x < 0) {
      clearTimeout(timer); // таймер остановится на нуле
      alert("Мы Вам уже звоним..");
    } else {
      timer = setTimeout(countdown, 1000);
    }
  }
  const phoneVal = inputPhone.value;
  const nameVal = inputName.value;

  formInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("error");
      input.nextElementSibling.textContent = "Введите имя";
    } else {
      input.classList.remove("error");
      input.nextElementSibling.textContent = "";
    }
  });

  if (!validateName(nameVal)) {
    inputName.classList.add("error");
    inputName.nextElementSibling.textContent = "Введите верное имя";
  }

  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add("error");
    inputPhone.nextElementSibling.textContent = "Введите верный телефон";
  }

  if (validateName(nameVal) && validatePhone(phoneVal)) {
    inputName.classList.remove("error");
    inputName.nextElementSibling.textContent = "";
    inputPhone.classList.remove("error");
    inputPhone.nextElementSibling.textContent = "";
    countdown();
    setTimeout(() => {
      form.submit();
      form.reset();
    }, 6000);
  }
});

//Анимированный курсор
document.addEventListener("DOMContentLoaded", () => {
  const followCursor = () => {
    // объявляем функцию followCursor
    const el = document.querySelector(".follow-cursor"); // ищем элемент, который будет следовать за курсором

    window.addEventListener("mousemove", (e) => {
      const target = e.target; // определяем, где находится курсор
      if (!target) return;

      if (target.closest("a")) {
        // если курсор наведён на ссылку
        el.classList.add("follow-cursor_active"); // элементу добавляем активный класс
      } else {
        el.classList.remove("follow-cursor_active"); // удаляем активный класс
      }

      el.style.left = e.pageX + "px"; // задаём элементу позиционирование слева
      el.style.top = e.pageY + "px"; // задаём элементу позиционирование сверху
    });
  };

  followCursor();
});
