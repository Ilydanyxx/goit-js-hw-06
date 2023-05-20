const size = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
size.addEventListener("input", () => {
    span.style.fontSize = `${size.value}px`
})