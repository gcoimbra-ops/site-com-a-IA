// Função para rolagem suave ao clicar nos botões
function scrollParaSection(selector) {
    const elemento = document.querySelector(selector);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' });
    }
}

// Lista de curiosidades para o gerador dinâmico
const curiosidadesCopa = [
    "A Copa de 2010 na África do Sul foi a primeira realizada no continente africano.",
    "O gol mais rápido da história das Copas foi marcado por Hakan Şükür, da Turquia, aos 11 segundos de jogo em 2002.",
    "A taça original da Copa, a Taça Jules Rimet, foi roubada no Brasil em 1983 e nunca foi recuperada.",
    "Em 1950, a final no Maracanã teve o maior público registrado da história das Copas: quase 200 mil pessoas.",
    "A maior goleada da história das Copas aconteceu em 1982, quando a Hungria venceu El Salvador por 10 a 1."
];

// Selecionando os elementos do HTML
const botaoCuriosidade = document.getElementById('btn-curiosidade');
const caixaCuriosidade = document.getElementById('caixa-curiosidade');

// Adicionando o evento de clique
botaoCuriosidade.addEventListener('click', () => {
    // Escolhe um índice aleatório do array de curiosidades
    const indiceAleatorio = Math.floor(Math.random() * curiosidadesCopa.length);
    
    // Atualiza o texto na tela com um efeito simples
    caixaCuriosidade.style.opacity = 0;
    
    setTimeout(() => {
        caixaCuriosidade.textContent = curiosidadesCopa[indiceAleatorio];
        caixaCuriosidade.style.opacity = 1;
        caixaCuriosidade.style.transition = "opacity 0.5s";
    }, 200);
});