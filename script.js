let contagem = 0;
const display = document.getElementById('contador');
const botao = document.getElementById('btn-clique');

botao.addEventListener('click', () => {
    contagem++; // Incrementa o valor
    display.textContent = contagem; // Atualiza o texto na tela
});