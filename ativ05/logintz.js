function verifyBtnLogin() {

    let inputEmail = document.getElementById("email");
    let inputPassword = document.getElementById("password");
    let button = document.getElementById("btn");

    document.addEventListener('keyup', function() {
        if (inputEmail.value.length > 0 && inputPassword.value.length > 0) {
            button.disabled = false;
        }
    });
}

verifyBtnLogin();