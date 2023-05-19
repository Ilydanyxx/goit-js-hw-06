const a = document.querySelector("input#name-input");

const b = document.querySelector("span#name-output");

a.addEventListener("input", (elem) => {
    if (elem.currentTarget.value === "") {
    b.textContent = "Anonymous";
} else {
    b.textContent = elem.currentTarget.value;
}
})
