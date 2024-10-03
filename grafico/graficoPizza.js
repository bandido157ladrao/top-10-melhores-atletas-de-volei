import { pegarCss } from "./comum.js";

async function criarGraficoPizza() {
    // URL para os dados dos melhores jogadores de vôlei do Paraná
    const url = 'https://raw.githubusercontent.com/bandido157ladrao/Api/refs/heads/main/jogadores_volei.json';
    
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Network response was not ok');
        const dados = await res.json();

        // Obtendo os jogadores e seus respectivos times
        const jogadores = Object.keys(dados.Jogadores); // Nomes dos jogadores
        const times = Object.values(dados.Jogadores); // Times correspondentes

        // Contando quantos jogadores por time
        const contagemPorTime = {};

        times.forEach(time => {
            contagemPorTime[time] = (contagemPorTime[time] || 0) + 1;
        });

        const timesUnicos = Object.keys(contagemPorTime);
        const contagemValores = Object.values(contagemPorTime);

        const data = [
            {
                labels: timesUnicos, // Times como labels
                values: contagemValores, // Contagem de jogadores por time
                type: 'pie',
                marker: {
                    colors: pegarCss('') // Certifique-se de que isso retorna um array de cores
                }
            }
        ];

        const layout = {
            plot_bgcolor: pegarCss('--verde'),
            paper_bgcolor: pegarCss('--sage'),
            title: {
                text: 'Distribuição dos Melhores Jogadores de Vôlei do Paraná por Time',
                font: {
                    color: pegarCss('--verde-musgo'),
                    family: pegarCss('--fonte-titulo'),
                    size: 50
                }
            }
        };

        const grafico = document.createElement('div');
        grafico.className = 'grafico';
        document.getElementById('caixa-grafico').appendChild(grafico);

        // Verificando se a biblioteca Plotly está carregada
        if (typeof Plotly === 'undefined') {
            console.error('Plotly não está carregado. Verifique a importação.');
            return;
        }

        Plotly.newPlot(grafico, data, layout);
    } catch (error) {
        console.error('Erro ao buscar ou plotar os dados:', error);
    }
}

criarGraficoPizza();
