function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const color = document.querySelector(".change-color");
color.addEventListener("click", () => {
  body.style.color = getRandomHexColor();
  document.querySelector(".color").textContent = `${body.style.color}`
})