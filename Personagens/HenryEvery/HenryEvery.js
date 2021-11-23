
var navio = 0

function checarSelecao (posNavio) {
    if(posNavio!="A" && posNavio!="B" && posNavio!="C"){
        alert("Seleção inválida.\n\nDigite A, B ou C.")
        selecionarPosicoes()
    }
    else {
        navio++;
        console.log("cheguei aqui")
        console.log(navio)
        selecionarPosicoes()
    }
}

function selecionarPosicoes(){

    if(navio == 0){
    console.log(navio)
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
        location.replace(url="../Fase2/Fase2HenryEvery.html")
     }
     else {
        alert(`\nSeleção pendente.\nClique em "SELECIONAR"`)
     }
}

// ---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---

var posPrimeiro = sessionStorage.posicaoPrimeiro
var posSegundo = sessionStorage.posicaoSegundo
var posTerceiro = sessionStorage.posicaoTerceiro

var img = document.createElement("IMG") // implementa a imagem correspondente ao posicionamento selecionado na fase 1
img.style.width = "250PX"
img.style.height = "250px"
document.getElementById("tabuleiro").appendChild(img)

if(posPrimeiro=="A"){
    if(posSegundo=="A"){
        if(posTerceiro=="A"){
            //AAA
            img.src="../../../Images/BatalhaNaval/AAA.png"
        }
        else if(posTerceiro=="B"){
            //AAB
            img.src="../../../Images/BatalhaNaval/AAB.png"
        }
        else{
            //AAC
            img.src="../../../Images/BatalhaNaval/AAC.png"
        }
    }
    else if(posSegundo=="B"){
        if(posTerceiro=="A"){
            //ABA
            img.src="../../../Images/BatalhaNaval/ABA.png"
        }
        else if(posTerceiro=="B"){
            //ABB
            img.src="../../../Images/BatalhaNaval/ABB.png"
        }
        else{
            //ABC
            img.src="../../../Images/BatalhaNaval/ABC.png"
        }
    }
    else{
        if(posTerceiro=="A"){
            //ACA
            img.src="../../../Images/BatalhaNaval/ACA.png"
        }
        else if(posTerceiro=="B"){
            //ACB
            img.src="../../../Images/BatalhaNaval/ACB.png"
        }
        else{
            //ACC
            img.src="../../../Images/BatalhaNaval/ACC.png"
        }
    }
}

else if(posPrimeiro=="B"){
    if(posSegundo=="A"){
        if(posTerceiro=="A"){
            //BAA
            img.src="../../../Images/BatalhaNaval/BAA.png"
        }
        else if(posTerceiro=="B"){
            //BAB
            img.src="../../../Images/BatalhaNaval/BAB.png"
        }
        else{
            //BAC
            img.src="../../../Images/BatalhaNaval/BAC.png"
        }
    }
    else if(posSegundo=="B"){
        if(posTerceiro=="A"){
            //BBA
            img.src="../../../Images/BatalhaNaval/BBA.png"
        }
        else if(posTerceiro=="B"){
            //BBB
            img.src="../../../Images/BatalhaNaval/BBB.png"
        }
        else{
            //BBC
            img.src="../../../Images/BatalhaNaval/BBC.png"
        }
    }
    else{
        if(posTerceiro=="A"){
            //BCA
            img.src="../../../Images/BatalhaNaval/BCA.png"
        }
        else if(posTerceiro=="B"){
            //BCB
            img.src="../../../Images/BatalhaNaval/BCB.png"
        }
        else{
            //BCC
            img.src="../../../Images/BatalhaNaval/BCC.png"
        }
    }
}

else {
    if(posSegundo=="A"){
        if(posTerceiro=="A"){
            //CAA
            img.src="../../../Images/BatalhaNaval/CAA.png"
        }
        else if(posTerceiro=="B"){
            //CAB
            img.src="../../../Images/BatalhaNaval/CAB.png"
        }
        else{
            //CAC
            img.src="../../../Images/BatalhaNaval/CAC.png"
        }
    }
    else if(posSegundo=="B"){
        if(posTerceiro=="A"){
            //CBA
            img.src="../../../Images/BatalhaNaval/CBA.png"
        }
        else if(posTerceiro=="B"){
            //CBB
            img.src="../../../Images/BatalhaNaval/CBB.png"
        }
        else{
            //CBC
            img.src="../../../Images/BatalhaNaval/CBC.png"
        }
    }
    else{
        if(posTerceiro=="A"){
            //CCA
            img.src="../../../Images/BatalhaNaval/CCA.png"
        }
        else if(posTerceiro=="B"){
            //CCB
            img.src="../../../Images/BatalhaNaval/CCB.png"
        }
        else{
            //CCC
            img.src="../../../Images/BatalhaNaval/CCC.png"
        }
    }
}

function henry2() {
    resposta = prompt("\n-Qual angulação proporcionará o maior alcançe?\n\nA. 30°\nB. 45°\nC. 60°\n").toUpperCase()

    if(resposta!="A" && resposta!="B" && resposta!="C"){
        alert('\nResposta inválida.\n\nDigite A, B ou C.\n')
    }
    else{
        if(resposta=="B"){
            alert("\nResposta correta!")
            location.replace(url="../Fase3/Fase3HenryEvery.html")
        }
        else {
            alert("\nOh! Não, resposta errada!")
            location.replace(url="../DerrotaHenryEvery.html")
        }
    }
}

function dica2() {
    alert('\nDica: ')
}