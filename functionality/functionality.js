"use strict";

const d = document;
const menu_button = d.querySelector(".ham-btn");
const ham_icon = d.querySelector(".ham-icon");
const close_icon = d.querySelector(".close-icon");
const menu = d.querySelector(".nav-menu");
const menu_background = d.querySelector(".menu-box-background");

console.log(menu_button);
console.log(ham_icon);
console.log(close_icon);
console.log(menu);
console.log(menu_background);

menu_button.addEventListener("click", () => {
  ham_icon.classList.toggle("clicked");
  close_icon.classList.toggle("clicked");
  menu.classList.toggle("clicked");
  menu_background.classList.toggle("clicked");
});
