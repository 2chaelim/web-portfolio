const main_bg = document.querySelector(".main_bg");
const hd = document.querySelector(".hd");
const main = document.querySelector(".main");
const main_typo = document.querySelector(".main_typo");

setTimeout(() => {
  main_bg.classList.add("hidden");
}, 4000);
setTimeout(() => {
  main.classList.add("on");
}, 5000);
setTimeout(() => {
  hd.classList.add("on");
}, 4500);

let color_picker = document.getElementById("color_picker");
function changeTextColor() {
  const text_color1 = document.getElementById("text_color1");
  const text_color2 = document.getElementById("text_color2");
  const box_border = document.querySelector(".color_box li:nth-child(4)");

  text_color1.style.color = color_picker.value;
  text_color2.style.color = color_picker.value;
  box_border.style.backgroundColor = color_picker.value;
}
color_picker.addEventListener("input", changeTextColor);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

myModal.handleUpdate();
