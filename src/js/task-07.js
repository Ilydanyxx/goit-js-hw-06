const a = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
a.addEventListener("input", () => {
    span.style.fontSize = `${a.value}px`
})