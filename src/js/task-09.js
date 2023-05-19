function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const a = document.querySelector("body");
const b = document.querySelector(".change-color");
b.addEventListener("click", () => {
  a.style.color = getRandomHexColor();
})