// Acessa os elementos HTML que vamos usar
const contadorElemento = document.getElementById('contador');
const btnClique = document.getElementById('btn-clique');
const btnReset = document.getElementById('btn-reset');

// Inicializa a contagem em 0
let contagem = 0;

// Função para atualizar o texto do contador na página
function atualizarContador() {
    contadorElemento.textContent = contagem;
}

// Adiciona um "ouvinte de evento" para o botão de clique
btnClique.addEventListener('click', (1) => {
    contagem++; // Aumenta a contagem em 1
    atualizarContador();
});

// Adiciona um "ouvinte de evento" para o botão de zerar
btnReset.addEventListener('click', () => {
    contagem = 0; // Zera a contagem
    atualizarContador();
});