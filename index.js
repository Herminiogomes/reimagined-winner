var setaDireita = window.document.getElementById("seta-direita")
var Samanta = window.document.getElementById("Samanta")

var Bruna = window.document.getElementById("Bruna")

var Leonardo = window.document.getElementById("Leonardo")

var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Samanta.style = "display:none"
    Leonardo.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda() {
    Samanta.style = "display:flex"
    Leonardo.style = "display:none"
    setaDireita.style = "display:flex; margi-top:55px"
    setaEsquerda.style = "display:none; margin-top:55px"
}



