async function criarGraficoPizza() {
    
    const url = 'https://raw.githubusercontent.com/bandido157ladrao/Api/refs/heads/main/parana.json'
    const res = await fetch(url)
    const dados = await res.json()

}