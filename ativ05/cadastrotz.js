const val1 = document.querySelector("#positivo");
const val2 = document.querySelector("#negativo");
const btn = document.querySelector(".btn");

val1.addEventListener("change", () => {
    if (val1.checked) {
        btn.removeAttribute("disabled");
    }
});

val2.addEventListener("change", () => {
    if (val2.checked) {
        btn.setAttribute("disabled", "");
    }
});


const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function criaOption(value) {
    let option = document.createElement("option");
    option.setAttribute("value", value);
    option.innerHTML = value;
    return option;
}

const mesSelect = document.querySelector(".mes");
meses.forEach((eachMes) => {
    mesSelect.appendChild(criaOption(eachMes));
})

mesSelect.addEventListener("change", (whichMes) => {
    adicionaDia(whichMes.target.value);
})

function contador(inicial, final) {
    let listaDias = [];
    for (let i = inicial; i <= final; i++) {
        listaDias.push(i);
    }
    return listaDias;
}

function adicionaDia(mesValue) {
    const diasSelect = document.querySelector(".dias");
    if (mesValue === "Fevereiro") {
        while (diasSelect.lastChild && diasSelect.childElementCount != 1) {
            diasSelect.removeChild(diasSelect.lastChild);
        }
        let listaDias = contador(1, 29);
        listaDias.forEach((eachDia) => {
            diasSelect.appendChild(criaOption(eachDia));
        })
    } else if (
        mesValue === "Abril" ||
        mesValue === "Junho" ||
        mesValue === "Setembro" ||
        mesValue === "Novembro"
    ) {
        while (diasSelect.lastChild && diasSelect.childElementCount != 1) {
            diasSelect.removeChild(diasSelect.lastChild);
        }
        let listaDias = contador(1, 30);
        listaDias.forEach((eachDia) => {
            diasSelect.appendChild(criaOption(eachDia));
        })
    } else {
        while (diasSelect.lastChild && diasSelect.childElementCount != 1) {
            diasSelect.removeChild(diasSelect.lastChild);
        }
        let listaDias = contador(1, 31);
        listaDias.forEach((eachDia) => {
            diasSelect.appendChild(criaOption(eachDia));
        })
    }

    diasSelect.addEventListener("change", (whichDia) => {
        adicionaAno(whichDia.target.value, mesValue);
    })
}

function adicionaAno(diaValue, mesValue) {
    data = new Date().getFullYear()
    let listaAno = contador(1990, data);
    const anosSelect = document.querySelector(".anos");
    if (diaValue == 29 && mesValue === "Fevereiro") {
        let listaAnoFinal = [];
        listaAno.forEach((eachAno) => {
            if (eachAno % 4 == 0 && eachAno % 100 != 0) {
                listaAnoFinal.push(eachAno);
            }
        })
        while (anosSelect.lastChild && anosSelect.childElementCount != 1) {
            anosSelect.removeChild(anosSelect.lastChild);
        }
        listaAnoFinal.forEach((eachAno) => {
            anosSelect.appendChild(criaOption(eachAno));
        })
    } else {
        while (anosSelect.lastChild && anosSelect.childElementCount != 1) {
            anosSelect.removeChild(anosSelect.lastChild);
        }
        listaAno.forEach((eachAno) => {
            anosSelect.appendChild(criaOption(eachAno));
        })
    }
}