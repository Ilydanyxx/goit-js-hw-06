const button = document.querySelector("button");
const a = document.querySelector('input[type="email"]')
const b = document.querySelector('input[type="password"]')
function submited(event) {
    event.preventDefault()
    if (a.value === "" || b.value === "") {
        alert("всі поля повинні бути заповнені")
    } else {
        const object = {
        }
        object.email = a.value;
        object.password = b.value;
        console.log(object)
        document.querySelector(".login-form").reset()
    }
}
button.addEventListener("click", submited);