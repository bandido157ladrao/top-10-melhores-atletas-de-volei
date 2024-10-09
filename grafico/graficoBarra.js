async function criarGraficoBarra() {
    
    const url = "https://raw.githubusercontent.com/bandido157ladrao/Api/refs/heads/main/grafico.json";
    const res = await fetch(url);
    const dados = await res.json();
    
    const jogadores = Object.keys(dados); 
    const notas = Object.values(dados);    

    const data = [
        {
            x: jogadores, 
            y: notas,     
            type: "bar"  
        }
    ];

    const grafico = document.createElement("div");
    grafico.className = "grafico";
    document.getElementById("caixa-grafico").appendChild(grafico);
    
    Plotly.newPlot(grafico, data); 
}

criarGraficoBarra();
