function pegarCss(variavel){
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const configuraEixo = {
    color: pegarCss('--violeta'),
    size: 16,
    family: pegarCss('--fonte-texto')
}
export{pegarCss, configuraEixo}