const url = 'https://raw.githubusercontent.com/bandido157ladrao/Api/refs/heads/main/Graficos';

async function visualizarInformacoes() {
    const res = await fetch(url);
    const dados = await res.json();

    const melhorJogador = dados.top_players_2023[0]; 
    const nomeJogador = melhorJogador.name; 
    const rankJogador = melhorJogador.rank; 
    const paisJogador = melhorJogador.country; 
    const posicaoJogador = melhorJogador.position;

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = `Você sabia que o melhor jogador de vôlei de 2023 foi ${nomeJogador}? Ele está em ${rankJogador}º lugar, representa ${paisJogador} e joga como ${posicaoJogador}.`;

    const caixa = document.getElementById('caixa-grafico');
    caixa.appendChild(paragrafo);
}

visualizarInformacoes();
