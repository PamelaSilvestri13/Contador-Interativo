let contador = 0;

const numero = document.getElementById("numero");

const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");
const btnZerar = document.getElementById("btnZerar");

function atualizarTela() {
    numero.textContent = contador;

    if (contador < 0) {
        numero.style.color = "red";
    } else if (contador > 0) {
        numero.style.color = "green";
    } else {
        numero.style.color = "black";
    }
}

// Incrementar
btnMais.addEventListener("click", function () {
    contador++;
    atualizarTela();
});

// Decrementar
btnMenos.addEventListener("click", function () {
    contador--;
    atualizarTela();
});

// Zerar
btnZerar.addEventListener("click", function () {
    contador = 0;
    atualizarTela();
});