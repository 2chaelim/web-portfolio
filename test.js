const modal = document.getElementById("modal");
const open_modal = document.getElementById("open");
const close_modal = document.getElementById("close");

open_modal.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

close_modal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});
