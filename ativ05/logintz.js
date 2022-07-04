function verifyBtnLogin() {

    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById("password");
    let button = document.getElementById("btn");

    document.addEventListener('keyup', function() {
        console.log(inputEmail.value.length)
        console.log(inputPassword.value.length)
        if (inputEmail.value.length > 0 && inputPassword.value.length > 0) {
            button.removeAttribute("disabled")

        } else {
            button.setAttribute("disabled", "disabled")
        }
    });
}

verifyBtnLogin();