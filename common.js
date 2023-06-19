// main_bg_ani
const main_bg = document.querySelector(".main_bg");
const hd = document.querySelector(".hd");
const sections = document.querySelector(".sections");
const typo_ani = document.getElementById("text_color2");
const main_typo = document.querySelector(".main_con");

setTimeout(() => {
  main_bg.classList.add("hidden");
}, 4000);
setTimeout(() => {
  hd.classList.add("on");
}, 4500);
setTimeout(() => {
  sections.classList.add("on");
}, 5500);
setTimeout(() => {
  main_typo.classList.add("on");
}, 5500);
setTimeout(() => {
  typo_ani.classList.add("on");
}, 6000);

// scroll event
const $sections = document.querySelectorAll(".sections > *");
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

// gotop
let gotop = document.querySelector(".gotop");

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight * 0.5) {
    gotop.classList.add("on");
  } else {
    gotop.classList.remove("on");
  }
});

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
const modal_open = document.querySelectorAll(".open");
const modal_close = document.querySelectorAll(".close");
let scrollPosition = 0;

modal_open.forEach((button) => {
  button.addEventListener("click", () => {
    const modal_id = button.id.replace("open", "modal");
    const modal = document.getElementById(modal_id);
    scrollPosition = window.scrollY;
    modal.style.display = "block";
    document.body.style.cssText = `overflow: hidden; position : fixed; top : -${window.scrollY}px;`;
  });
});

modal_close.forEach((button) => {
  button.addEventListener("click", () => {
    const modal_id = button.id.replace("close", "modal");
    const modal = document.getElementById(modal_id);
    document.body.style.cssText = "";
    window.scrollTo(0, scrollPosition);
    modal.style.display = "none";
  });
});

// 주석
