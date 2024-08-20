// Acertando o input
const meuInput = document.querySelector('.input__input');
meuInput.addEventListener('focus', function() {
    this.placeholder = '';
});
meuInput.addEventListener('blur', function() {
    this.placeholder = 'Digite a última palavra dita';
});

// começando a funcionalidade da lista
let palavras = [];

function adicionar() {
    let palavra = document.getElementById("palavra-input");

    if (palavra.value == "") {
        alert("Nenhuma palavra digitada!");
        return;
    }

    if (palavras.includes(palavra.value)) {
        alert("Esta palavra já foi dita");
        return;
    }

    palavras.push(palavra.value);

    let novaPalavra = document.createElement("span");
    novaPalavra.classList.add("palavra__escrita");
    novaPalavra.textContent = palavra.value;

    let lista = document.getElementById("lista-palavras");
    lista.appendChild(novaPalavra);

    palavra.value = "";
}

function limpar() {
    palavras = [];
    document.getElementById("lista-palavras").innerHTML = "";
}