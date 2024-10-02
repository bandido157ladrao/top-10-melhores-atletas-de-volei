const url = 'https://raw.githubusercontent.com/bandido157ladrao/Api/refs/heads/main/vole.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()

    const jogadorName = dados.melhores_jogadores[0].name;
    const jogadorRank = dados.melhores_jogadores[0].rank;
    const jogadorCountry = dados.melhores_jogadores[0].country;

    console.log(dados.melhores_jogadores)

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('caixa-grafico__texto');

    paragrafo.innerHTML = `Em busca de saber quem são os melhores jogadores de vôlei do mundo, foi realizada uma série de pesquisas de diferentes fontes. Com auxílio do ChatGPT, foi possível estimar que o jogador mais destacado foi <span>${jogadorName}</span>, com o rank <span>${jogadorRank}</span> e representando o país <span>${jogadorCountry}</span>.`;


    const caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)
}

vizualizarInformacoes()