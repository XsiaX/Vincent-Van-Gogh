"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/main.mjs":
/*!*********************!*\
  !*** ./js/main.mjs ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/style.scss */ "./scss/style.scss");

var animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  var animOnScroll = function animOnScroll() {
    for (var i = 0; i < animItems.length; i++) {
      var animItem = animItems[i];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top; // Коэффициент, регулирующий момент старта анимации

      var animStart = 4; // Настройки момента старта анимации
      // (когда объект получает класс он анимируется)

      var animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }; // Функция позволяет корректно отобразить насколько
  // необходимый объект находится ниже самого верха страницы


  var offset = function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  window.addEventListener("scroll", animOnScroll);
  animOnScroll();
} // Custom Select


var selected = document.querySelector(".museum-group__selected");
var optionsContainer = document.querySelector(".museum-group__options-container");
var optionsList = document.querySelectorAll(".museum-group__option");
selected.addEventListener("click", function () {
  optionsContainer.classList.toggle("active");
});
optionsList.forEach(function (o) {
  o.addEventListener("click", function () {
    selected.innerHTML = o.querySelector(".museum-group__label").innerHTML;
    optionsContainer.classList.remove("active");
  });
}); // Валидация формы

var form = document.querySelector(".js-form"),
    formInputs = document.querySelectorAll(".js-input"),
    inputPhone = document.querySelector(".js-input-phone"),
    inputName = document.querySelector(".js-input-name"),
    emptyImputs = Array.from(formInputs).filter(function (input) {
  return input.value === "";
}),
    errorMessages = document.querySelectorAll(".errors");

var validatePhone = function validatePhone(phone) {
  var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  return re.test(String(phone));
};

var validateName = function validateName(name) {
  var reg = /^['A-Za-z\u0410-\u044F][ '\x2DA-Za-z\u0410-\u044F]+['A-Za-z\u0410-\u044F]?$/;
  return reg.test(String(name));
};

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Таймер обратного отсчета

  var timer;
  var x = 5; // стартовое значение обратного отсчета

  function countdown() {
    document.querySelector(".time").innerHTML = "\u041C\u044B \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0412\u0430\u043C \u0447\u0435\u0440\u0435\u0437 ".concat(x, " \u0441\u0435\u043A\u0443\u043D\u0434. <br/>\u041D\u0435 \u043F\u043E\u043A\u0438\u0434\u0430\u0439\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443");
    x--;

    if (x < 0) {
      clearTimeout(timer); // таймер остановится на нуле

      alert("Мы Вам уже звоним..");
    } else {
      timer = setTimeout(countdown, 1000);
    }
  }

  var phoneVal = inputPhone.value;
  var nameVal = inputName.value;
  formInputs.forEach(function (input) {
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
    setTimeout(function () {
      form.submit();
      form.reset();
    }, 6000);
  }
}); //Анимированный курсор

document.addEventListener("DOMContentLoaded", function () {
  var followCursor = function followCursor() {
    // объявляем функцию followCursor
    var el = document.querySelector(".follow-cursor"); // ищем элемент, который будет следовать за курсором

    window.addEventListener("mousemove", function (e) {
      var target = e.target; // определяем, где находится курсор

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_exec__("../node_modules/@babel/polyfill/lib/index.js"), __webpack_exec__("./js/main.mjs")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map