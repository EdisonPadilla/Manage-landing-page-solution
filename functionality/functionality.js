"use strict";

const d = document;
const $menu_button = d.querySelector(".ham-btn");
const $ham_icon = d.querySelector(".ham-icon");
const $close_icon = d.querySelector(".close-icon");
const menu = d.querySelector(".nav-menu");
const $menu_background = d.querySelector(".menu-box-background");
const $testimonial_articles_box = d.querySelector(".testimonial-articles-box");
const $slider_buttons = d.querySelectorAll(".slider-btn");
const $slider_offset_value = 105;

console.log($menu_button);
console.log($ham_icon);
console.log($close_icon);
console.log(menu);
console.log($menu_background);
console.log($testimonial_articles_box);
console.log($slider_buttons);

$menu_button.addEventListener("click", () => {
  $ham_icon.classList.toggle("clicked");
  $close_icon.classList.toggle("clicked");
  menu.classList.toggle("clicked");
  $menu_background.classList.toggle("clicked");
});

$slider_buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let offsetValue = $slider_offset_value * index;
    Array.from($slider_buttons).map((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    $testimonial_articles_box.style.transform = `translateX(-${offsetValue}%)`;
  });
});

$slider_buttons[0].classList.add("selected");
