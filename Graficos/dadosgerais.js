const url = 'https://raw.githubusercontent.com/bandido157ladrao/Api/refs/heads/main/Graficos'

async function  vizualizarInformaçoes() {
    const res = await fetch(url)
    const dados = await res.json()
    
    console.log(dados [rank])
}

vizualizarInformaçoes()