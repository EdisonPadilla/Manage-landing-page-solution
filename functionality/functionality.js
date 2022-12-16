"use strict";

const d = document;
const $menu_button = d.querySelector(".ham-btn");
const $ham_icon = d.querySelector(".ham-icon");
const $close_icon = d.querySelector(".close-icon");
const menu = d.querySelector(".nav-menu");
const $menu_background = d.querySelector(".menu-box-background");
const $testimonial_articles_box = d.querySelector(".testimonial-articles-box");
const $slider_back_button = d.querySelector(".back-btn");
const $slider_advanced_button = d.querySelector(".advanced-btn");
const $slider_buttons = d.querySelectorAll(".slider-btn");
const $slider_offset_value = 104;
const $email = d.querySelector(".input-updates");
const $go_button = d.querySelector(".footer-form .go-btn");
const $error_message = d.querySelector(".footer-form .error-msg");
let windowWidth = d.documentElement.clientWidth;

function validateMail(email) {
  let pattern =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return pattern.test(email) ? true : false;
}

$menu_button.addEventListener("click", () => {
  $ham_icon.classList.toggle("clicked");
  $close_icon.classList.toggle("clicked");

  menu.classList.toggle("clicked");
  $menu_background.classList.toggle("clicked");
});

$slider_buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    let offsetValue = $slider_offset_value * index;
    $testimonial_articles_box.style.transform = `translateX(-${offsetValue}%)`;

    Array.from($slider_buttons).map((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

if (windowWidth >= 1024) {
  console.info("The window is equal to or greater than 1024px");

  let offsetValueDesktop = 0;
  let testimonialBoxWidth = $testimonial_articles_box.scrollWidth;
  let displacementLimitValue = testimonialBoxWidth - windowWidth + 36;
  // console.log("Displacement limit Value: ", displacementLimitValue);

  $slider_back_button.addEventListener("click", () => {
    offsetValueDesktop += 20;

    if (offsetValueDesktop <= displacementLimitValue) {
      $testimonial_articles_box.style.transform = `translateX(-${offsetValueDesktop}px)`;
    } else {
      $testimonial_articles_box.style.transform = `translateX(-${displacementLimitValue}px)`;
      offsetValueDesktop = displacementLimitValue;
    }
  });

  $slider_advanced_button.addEventListener("click", () => {
    offsetValueDesktop -= 20;

    if (offsetValueDesktop >= 0) {
      $testimonial_articles_box.style.transform = `translateX(-${offsetValueDesktop}px)`;
    } else {
      $testimonial_articles_box.style.transform = `translateX(0px)`;
      offsetValueDesktop = 0;
    }
  });
}

$go_button.addEventListener("click", (e) => {
  console.log("valor de email: ", $email.value);
  console.log(validateMail($email.value));
  if (validateMail($email.value)) {
    $error_message.classList.remove("show");
    $email.classList.remove("error");
  } else {
    $error_message.classList.add("show");
    $email.classList.add("error");
  }
  e.preventDefault();
});

$slider_buttons[0].classList.add("selected");
$email.value = "";
