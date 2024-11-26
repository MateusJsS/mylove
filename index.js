window.onload = function() {
    var botaoNao = document.getElementById("nao");
    var botaoSim = document.getElementById("sim");

    // Adiciona o evento de clique no botão "Não"
    botaoNao.addEventListener("click", Fuja);

};

function Fuja() {
    var botaonao = document.getElementById("nao");
    var painel = document.querySelector(".painel");

    // Pegue as dimensões do painel
    var painelRect = painel.getBoundingClientRect();  // Pega as coordenadas do painel
    var painelLargura = painelRect.width;
    var painelAltura = painelRect.height;

    // Pegue as dimensões do botão "Não"
    var botaoLargura = botaonao.offsetWidth;
    var botaoAltura = botaonao.offsetHeight;

    // Limites para o movimento dentro da área do painel
    var maxX = painelLargura - botaoLargura;  // Não ultrapassar a largura do painel
    var maxY = painelAltura - botaoAltura;    // Não ultrapassar a altura do painel

    // Gera uma posição aleatória dentro desses limites
    var aleatoriox = Math.floor(Math.random() * maxX);  // Dentro da largura do painel
    var aleatorioy = Math.floor(Math.random(0,0) * maxY);  // Dentro da altura do painel

    // Mover o botão "Não" dentro do painel com uma transição suave
    botaonao.style.transition = "left 0.5s ease, top 0.5s ease"; // Transição suave
    botaonao.style.left = aleatoriox + "px";
    botaonao.style.top = aleatorioy + "px";
}