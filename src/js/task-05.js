const input = document.querySelector("input#name-input");

const output = document.querySelector("span#name-output");

input.addEventListener("input", (elem) => {
    if (elem.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
} else {
    output.textContent = elem.currentTarget.value;
}
})
