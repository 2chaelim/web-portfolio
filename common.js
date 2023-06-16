// main_bg_ani
const main_bg = document.querySelector(".main_bg");
const hd = document.querySelector(".hd");
const sections = document.querySelector(".sections");
const main_typo = document.querySelector(".main_typo");

setTimeout(() => {
  main_bg.classList.add("hidden");
}, 4000);
setTimeout(() => {
  hd.classList.add("on");
}, 4500);
setTimeout(() => {
  sections.classList.add("on");
  main_typo.classList.add("on");
}, 5000);

// scroll event
const $sections = document.querySelectorAll(".sections > *");
// $sections 영역에서 mousewheel 이벤트가 발생하면
// 한 section의 높이만큼 이동
if (window.innerWidth > 600) {
  $sections.forEach((section) => {
    section.addEventListener("mousewheel", (e) => {
      e.preventDefault();
      const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
      const nextSection =
        delta < 0 ? section.nextElementSibling : section.previousElementSibling;
      if (nextSection) {
        const moveTop =
          window.pageYOffset + nextSection.getBoundingClientRect().top;
        window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });
      }
    });
  });
}

// color_picker
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

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// modal
const modal = document.getElementById("modal");
const modal_open = document.getElementById("open");
const modal_close = document.getElementById("modal_close");

modal_open.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});
modal_close.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});
