const form = document.querySelector(".login-form")

function submited(event) {
    event.preventDefault()
    if (form[0].value.trim() === "" || form[1].value.trim() === "") {
        return;
        alert("всі поля повинні бути заповнені")
    } else {
        const object = {
        }
        object.email = form[0].value;
        object.password = form[1].value;
        console.log(object)
        form.reset()
    }
}
form.addEventListener("submit", submited);