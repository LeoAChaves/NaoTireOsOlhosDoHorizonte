
var navio = 0

function checarSelecao (posNavio) {
    if(posNavio!="A" && posNavio!="B" && posNavio!="C"){
        alert("Seleção inválida.\n\nDigite A, B ou C.")
        selecionarPosicoes()
    }
    else {
        navio++;
        selecionarPosicoes()
    }
}

function selecionarPosicoes(){

    if(navio == 0){
    var posPrimeiro = prompt("Escolha uma posicao para o PRIMEIRO navio: ").toUpperCase()
    sessionStorage.posicaoPrimeiro = posPrimeiro
    checarSelecao(posPrimeiro)
    }

    else if (navio == 1){
    var posSegundo = prompt("Escolha uma posicao para o SEGUNDO navio: ").toUpperCase()
    sessionStorage.posicaoSegundo = posSegundo
    checarSelecao(posSegundo)
    }

    else if (navio == 2){
    var posTerceiro = prompt("Escolha uma posicao para o TERCEIRO navio: ").toUpperCase()
    sessionStorage.posicaoTerceiro = posTerceiro
    checarSelecao(posTerceiro)
    }
    else{
        alert(`\nSeleção efetuada:\n\nPrimeiro navio: ${sessionStorage.posicaoPrimeiro}\nSegundo navio: ${sessionStorage.posicaoSegundo}\nTerceiro navio: ${sessionStorage.posicaoTerceiro}\n\nClique em "CONCLUIR"`)
    }
}

function concluirSelecao() {
     if (navio == 3 ){
        location.replace(url="../Fase2/Fase2EdwardTeach.html")
     }
     else {
        alert(`\nSeleção pendente.\nClique em "SELECIONAR"`)
     }
}