// document.getElementById("meio-transporte").selectedIndex = -1;
const selectTipoViagem = document.getElementById("tipo-viagem");
var contadorViagens = 0;
const saldoMax = 20000;
const saldoElement = document.getElementById("saldo");
saldoElement.innerHTML = saldoMax;

function changeSelectValueTransporte(valorSelect) {
    if (valorSelect == "Avião") {
        while (selectTipoViagem.firstChild) {
            selectTipoViagem.removeChild(selectTipoViagem.firstChild)
        }

        var option1 = document.createElement("option");
        option1.setAttribute("value", "Internacional");
        option1.setAttribute("label", "Internacional");

        var option2 = document.createElement("option");
        option2.setAttribute("value", "Nacional");
        option2.setAttribute("label", "Nacional");

        selectTipoViagem.appendChild(option1);
        selectTipoViagem.appendChild(option2);

    } else if (valorSelect == "Ônibus") {
        while (selectTipoViagem.firstChild) {
            selectTipoViagem.removeChild(selectTipoViagem.firstChild)
        }

        var option1 = document.createElement("option");
        option1.setAttribute("value", "Interestadual");
        option1.setAttribute("label", "Interestadual");

        var option2 = document.createElement("option");
        option2.setAttribute("value", "Intermunicipal");
        option2.setAttribute("label", "Intermunicipal");

        var option3 = document.createElement("option");
        option3.setAttribute("value", "Municipal");
        option3.setAttribute("label", "Municipal");

        selectTipoViagem.appendChild(option1);
        selectTipoViagem.appendChild(option2);
        selectTipoViagem.appendChild(option3);
    }
}

function verificaIdaVolta(idaVoltar, valor) {
    if (idaVoltar) {
        return valor * 2;
    } else {
        return valor;
    }
}

function bloqueiaButton() {
    let button = document.getElementById("button-enviar");
    button.disabled = true;
}

function verificarSaldo(valorViagem) {
    var saldo = Number(saldoElement.innerHTML);
    if (saldo < valorViagem) {
        bloqueiaButton();
        alert('Saldo insuficiente!');
        return false;
    } else {
        saldoElement.innerHTML = saldo - Number(valorViagem);
        return true;
    }
}

function adicionaTr(transporte, viagem, idaVolta, valor) {
    var table = document.getElementById("table-historico");
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = transporte;
    var td2 = document.createElement("td");
    td2.innerHTML = viagem;
    var td3 = document.createElement("td");
    if (idaVolta) {
        td3.innerHTML = 'Sim';
    } else {
        td3.innerHTML = 'Não';
    }
    var td4 = document.createElement("td");
    td4.innerHTML = valor;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);
}

function criaTotalSaldo(saldoAtual, totalViagens) {
    var div = document.getElementById("div-total-viagens");
    while (div.firstChild) {
        div.removeChild(div.firstChild)
    }

    var h1 = document.createElement("h3");
    h1.innerHTML = "Total de Viagens: ";
    var h2 = document.createElement("h3");
    h2.setAttribute("id", "total-viagens");
    var h3 = document.createElement("h3");
    h3.innerHTML = " - ";
    var h4 = document.createElement("h3");
    h4.setAttribute("id", "total-saldo");
    var h5 = document.createElement("h3");
    h5.innerHTML = " pontos gastos";

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(h5);

    var qntdViagens = document.getElementById("total-viagens");
    qntdViagens.innerHTML = totalViagens;

    var saldoTotal = document.getElementById("total-saldo");
    saldoTotal.innerHTML = saldoMax - saldoAtual;
}

function enviarForm() {
    contadorViagens++;
    const transporte = document.getElementById("meio-transporte");
    const viagem = document.getElementById("tipo-viagem");
    const idaVolta = document.getElementById("ida-volta");

    let valorViagem = 0;
    switch (viagem.value) {
        case "Internacional":
            valorViagem = verificaIdaVolta(idaVolta.checked, 5000);
            break;
        case "Nacional":
            valorViagem = verificaIdaVolta(idaVolta.checked, 500);
            break;
        case "Interestadual":
            valorViagem = verificaIdaVolta(idaVolta.checked, 150);
            break;
        case "Intermunicipal":
            valorViagem = verificaIdaVolta(idaVolta.checked, 50);
            break;
        case "Municipal":
            valorViagem = verificaIdaVolta(idaVolta.checked, 25);
            break;
        default:
            break;
    }

    if (verificarSaldo(valorViagem)) {
        adicionaTr(transporte.value, viagem.value, idaVolta.checked, valorViagem)
    }

    criaTotalSaldo(Number(saldoElement.innerHTML), contadorViagens);
    return false;
}