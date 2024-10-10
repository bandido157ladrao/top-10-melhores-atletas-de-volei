import { pegarCss } from "./comum";

async function criarGraficoPizza() {
    
    const url = 'https://raw.githubusercontent.com/bandido157ladrao/Api/refs/heads/main/jogadores_volei.json';
    
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Network response was not ok');
        const dados = await res.json();

        const jogadores = Object.keys(dados.Jogadores); 
        const times = Object.values(dados.Jogadores); 

        const contagemPorTime = {};

        times.forEach(time => {
            contagemPorTime[time] = (contagemPorTime[time] || 0) + 1;
        });

        const timesUnicos = Object.keys(contagemPorTime);
        const contagemValores = Object.values(contagemPorTime);

        const data = [
            {
                labels: timesUnicos, 
                values: contagemValores, 
                type: 'pie',
                marker: {
                    colors: pegarCss('') 
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
