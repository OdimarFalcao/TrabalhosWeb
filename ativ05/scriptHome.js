const textareaValue = document.querySelector('#textarea');
const contador = document.querySelector('#contador');
const buttonPost = document.querySelector('#buttonPost');
const contadorMax = 140;

const textareaValuemd = document.querySelector('#textareamd');
const contadormd = document.querySelector('#contadormd');
const buttonPostmd = document.querySelector('#buttonPostmd');
const contadorMaxmd = 140;

const fechar = document.getElementById('fechar');
const popuptzeet = document.getElementById('tzeet');
const modal = document.getElementById('modal');

textareaValuemd.addEventListener('keyup', (e) => {
    let contadorAtual = contadorMax - e.target.value.length;
    contadormd.innerHTML = contadorAtual;
    if (contadorAtual == contadorMax) {
        contadormd.innerHTML = ""
    }
    VerificacaoCor(contadorAtual)
})

textareaValuemd.onkeyup = function() {
    console.log("oi");

    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
}

function VerificacaoCor(contadorAtual) {
    if (contadorAtual <= 40 && contadorAtual > 0) {
        contadormd.style.color = "rgb(255,200,0)"
        buttonPostmd.removeAttribute("disabled")
    } else if (contadorAtual == 0) {
        contadormd.style.color = "rgb(255,0,0)"
        buttonPostmd.removeAttribute("disabled")
    } else if (contadorAtual < 0) {
        contadormd.style.color = "rgb(255,0,0)"
        buttonPostmd.setAttribute("disabled", true)
    } else if (contadorAtual > 40) {
        contadormd.style.color = "black"
        buttonPostmd.removeAttribute("disabled")
    }
}

// modal

textareaValue.addEventListener('keyup', (e) => {
    let contadorAtual = contadorMax - e.target.value.length;
    contador.innerHTML = contadorAtual;
    if (contadorAtual == contadorMax) {
        contador.innerHTML = ""
    }
    VerificacaoCor(contadorAtual)
})

function VerificacaoCor(contadorAtual) {
    if (contadorAtual <= 40 && contadorAtual > 0) {
        contador.style.color = "rgb(255,200,0)"
        buttonPost.removeAttribute("disabled")
    } else if (contadorAtual == 0) {
        contador.style.color = "rgb(255,0,0)"
        buttonPost.removeAttribute("disabled")
    } else if (contadorAtual < 0) {
        contador.style.color = "rgb(255,0,0)"
        buttonPost.setAttribute("disabled", true)
    } else if (contadorAtual > 40) {
        contador.style.color = "black"
        buttonPost.removeAttribute("disabled")
    }
}

textareaValue.onkeyup = function() {
    console.log("oi");

    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
}

popuptzeet.onclick = function() {
    modal.style.display = "block";
}

fechar.onclick = function() {
    modal.style.display = "none";
}