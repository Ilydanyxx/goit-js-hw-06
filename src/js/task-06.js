const a = document.querySelector("input#validation-input")
const length = a.getAttribute("data-length")
a.addEventListener("blur", value => {
    const b = value.currentTarget.value;
    const c = b.split("")
    if (c.length == length) {
        a.classList = "valid"
    } else {
        a.classList = "invalid"
    }
})
