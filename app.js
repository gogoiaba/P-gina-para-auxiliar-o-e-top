// Função para ajustar o placeholder
const meuInput = document.querySelector('.input__input');
meuInput.addEventListener('focus', function() {
    this.placeholder = '';
});
meuInput.addEventListener('blur', function() {
    this.placeholder = 'Digite a última palavra dita';
});

// Array para armazenar as palavras
const palavras = [];

// Escuta a tecla Enter no campo de entrada
document.getElementById("palavra-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionar(); // Chama a função de adicionar ao pressionar Enter
    }
});

// Função para adicionar uma palavra à lista
function adicionar() {
    const inputElement = document.getElementById("palavra-input");
    const palavra = inputElement.value.trim();

    if (!palavra) {
        alert("Nenhuma palavra digitada!");
        return;
    }

    if (palavras.includes(palavra.toLowerCase())) {
        alert("Esta palavra já foi dita");
        return;
    }

    palavras.push(palavra.toLowerCase());
    renderPalavras();

    setTimeout(() => {
        document.querySelectorAll('.palavra__escrita').forEach(el => el.classList.add('show'));
    }, 10);

    inputElement.value = "";
}

// Função para renderizar as palavras na lista
// Função para renderizar as palavras na lista
function renderPalavras() {
    const listaPalavras = document.getElementById("lista-palavras");
    listaPalavras.innerHTML = '';

    palavras.forEach((palavra) => {
        const palavraElement = document.createElement('span');
        palavraElement.textContent = palavra;
        palavraElement.classList.add('palavra__escrita');
        palavraElement.onclick = () => excluirPalavra(palavra); // Passa a palavra para a função
        listaPalavras.appendChild(palavraElement);
    });
}

// Função para excluir uma palavra da lista
function excluirPalavra(palavraParaExcluir) {
    const index = palavras.indexOf(palavraParaExcluir);
    if (index > -1) {
        // Remove a palavra do array
        palavras.splice(index, 1);

        // Remove a palavra do DOM
        const palavraElements = Array.from(document.querySelectorAll('.palavra__escrita'));
        const palavraElement = palavraElements.find(el => el.textContent === palavraParaExcluir);
        if (palavraElement) {
            palavraElement.style.transition = "opacity 0.3s ease, transform 0.3s ease";
            palavraElement.style.opacity = "0";
            palavraElement.style.transform = "scale(0.8)";

            // Remove o elemento do DOM após a animação
            setTimeout(() => {
                palavraElement.remove();
            }, 300);
        }
    }
}
