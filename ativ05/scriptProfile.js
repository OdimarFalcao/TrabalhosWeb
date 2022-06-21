const textareaValue = document.querySelector('#textarea');
const contador = document.querySelector('#contador');
const buttonPost = document.querySelector('#buttonPost');
const contadorMax = 140;
const fechar = document.getElementById('fechar');
const popuptzeet = document.getElementById('tzeet');
const modal = document.getElementById('modal');

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