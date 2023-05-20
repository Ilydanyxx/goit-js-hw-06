const input = document.querySelector("input#validation-input")
const length = Number(input.getAttribute("data-length"))
input.addEventListener("blur", value => {
    const values = value.currentTarget.value;
    
    if (values.length === length) {
        input.classList = "valid"
    } else {
        input.classList = "invalid"
    }
    
})
