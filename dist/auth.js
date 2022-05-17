"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["auth"],{

/***/ "./scss/auth.scss":
/*!************************!*\
  !*** ./scss/auth.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./js/auth.mjs":
/*!*********************!*\
  !*** ./js/auth.mjs ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_auth_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/scss/auth.scss */ "./scss/auth.scss");
 // Form Validation

var form = document.querySelector(".form-auth");
var requiredInputs = document.querySelectorAll(".js-input");
var inputLogin = document.querySelector(".form__login");
var inputPass = document.querySelector(".form__pass");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var loginVal = inputLogin.value;
  var passVal = inputPass.value;
  var emptyInputs = Array.from(requiredInputs).filter(function (input) {
    return input.value === "";
  });
  requiredInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
      input.nextElementSibling.textContent = "Пожалуйста, заполните поле верно!";
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
}); // Form Validation

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_babel_polyfill_lib_index_js"], () => (__webpack_exec__("../node_modules/@babel/polyfill/lib/index.js"), __webpack_exec__("./js/auth.mjs")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=auth.js.map