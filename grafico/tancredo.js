import { pegarCSS } from "./comum.js";

async function graficosVolei() {
    const url = 'https://raw.githubusercontent.com/bandido157ladrao/Api/refs/heads/main/tancredo.json';
    const res = await fetch(url);
    const dados = await res.json();

    const jogadores = dados.slice(1).map(jogo => jogo[1]); 
    const times = dados.slice(1).map(jogo => jogo[2]); 

    const contagemJogadores = jogadores.reduce((acc, jogador) => {
        acc[jogador] = (acc[jogador] || 0) + 1;
        return acc;
    }, {});

    const valoresJogadores = Object.values(contagemJogadores);
    const etiquetaJogadores = Object.keys(contagemJogadores);

    const contagemTimes = times.reduce((acc, time) => {
        acc[time] = (acc[time] || 0) + 1;
        return acc;
    }, {});

    const valoresTimes = Object.values(contagemTimes);
    const etiquetaTimes = Object.keys(contagemTimes);

    const dataJogadores = [
        {
            values: valoresJogadores,
            labels: etiquetaJogadores,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];

    const layoutJogadores = {
        title: 'Jogadores Favoritos',
        plot_bgcolor: pegarCSS('--cinza'),
        paper_bgcolor: pegarCSS('--laranja')
    };

    const graficoJogadores = document.createElement('div');
    graficoJogadores.className = 'grafico-jogadores';
    document.getElementById('caixa-grafico').appendChild(graficoJogadores);
    Plotly.newPlot(graficoJogadores, dataJogadores, layoutJogadores);

    const dataTimes = [
        {
            values: valoresTimes,
            labels: etiquetaTimes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];

    const layoutTimes = {
        title: 'Times Favoritos',
        plot_bgcolor: pegarCSS('--cinza'),
        paper_bgcolor: pegarCSS('--laranja')
    };

    const graficoTimes = document.createElement('div');
    graficoTimes.className = 'grafico-times';
    document.getElementById('caixa-grafico').appendChild(graficoTimes);
    Plotly.newPlot(graficoTimes, dataTimes, layoutTimes);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');
    paragrafo.innerHTML = 'Essa análise mostra os jogadores e times favoritos com base nas respostas dos participantes da pesquisa.';
    document.getElementById('caixa-grafico').appendChild(paragrafo);
}

graficosVolei();
