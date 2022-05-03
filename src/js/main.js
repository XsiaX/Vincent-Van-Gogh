// const animItems = document.querySelectorAll("._anim-items");

// if(animItems.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll(params){
//     for(let index = 0; index<animItems.length; index++){
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemoffset = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;

//       if(animItemHeight > window.innerHeight){
//         animItemPoint =  window.innerHeight - window.innerHeight / animStart;
//       }

//       if((scrollY > animItemoffset - animItemPoint) && scrollY < (animItemoffset + animItemHeight)){
//         animItem.classList.add('_active');
//       }else {
//         animItem.classList.remove('_active');

//       }
//     }
//   }

//   function offset(el){
//     const rect = el.getBoundingClientRect(),
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
//   }

//   setTimeout(() => {
//     animOnScroll();
//   }, 300);
// }

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
  function offset(el){
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
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