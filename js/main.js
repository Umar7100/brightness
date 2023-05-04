const menuBtn = document.querySelector(".burger__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
  menuBtn.classList.toggle("burger__btn--opened");
});
