
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

//---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---

var posPrimeiro = sessionStorage.posicaoPrimeiro
var posSegundo = sessionStorage.posicaoSegundo
var posTerceiro = sessionStorage.posicaoTerceiro

var img = document.createElement("IMG") // 
img.style.width = "250PX"
img.style.height = "250px"
document.getElementById("tabuleiro").appendChild(img)

if(posPrimeiro=="A"){
    if(posSegundo=="A"){
        if(posTerceiro=="A"){
            //AAA
            img.src="../../../Images/BatalhaNaval/AAAred.png"
        }
        else if(posTerceiro=="B"){
            //AAB
            img.src="../../../Images/BatalhaNaval/AABred.png"
        }
        else{
            //AAC
            img.src="../../../Images/BatalhaNaval/AACred.png"
        }
    }
    else if(posSegundo=="B"){
        if(posTerceiro=="A"){
            //ABA
            img.src="../../../Images/BatalhaNaval/ABAred.png"
        }
        else if(posTerceiro=="B"){
            //ABB
            img.src="../../../Images/BatalhaNaval/ABBred.png"
        }
        else{
            //ABC
            img.src="../../../Images/BatalhaNaval/ABCred.png"
        }
    }
    else{
        if(posTerceiro=="A"){
            //ACA
            img.src="../../../Images/BatalhaNaval/ACAred.png"
        }
        else if(posTerceiro=="B"){
            //ACB
            img.src="../../../Images/BatalhaNaval/ACBred.png"
        }
        else{
            //ACC
            img.src="../../../Images/BatalhaNaval/ACCred.png"
        }
    }
}

else if(posPrimeiro=="B"){
    if(posSegundo=="A"){
        if(posTerceiro=="A"){
            //BAA
            img.src="../../../Images/BatalhaNaval/BAAred.png"
        }
        else if(posTerceiro=="B"){
            //BAB
            img.src="../../../Images/BatalhaNaval/BABred.png"
        }
        else{
            //BAC
            img.src="../../../Images/BatalhaNaval/BACred.png"
        }
    }
    else if(posSegundo=="B"){
        if(posTerceiro=="A"){
            //BBA
            img.src="../../../Images/BatalhaNaval/BBAred.png"
        }
        else if(posTerceiro=="B"){
            //BBB
            img.src="../../../Images/BatalhaNaval/BBBred.png"
        }
        else{
            //BBC
            img.src="../../../Images/BatalhaNaval/BBCred.png"
        }
    }
    else{
        if(posTerceiro=="A"){
            //BCA
            img.src="../../../Images/BatalhaNaval/BCAred.png"
        }
        else if(posTerceiro=="B"){
            //BCB
            img.src="../../../Images/BatalhaNaval/BCBred.png"
        }
        else{
            //BCC
            img.src="../../../Images/BatalhaNaval/BCCred.png"
        }
    }
}

else {
    if(posSegundo=="A"){
        if(posTerceiro=="A"){
            //CAA
            img.src="../../../Images/BatalhaNaval/CAAred.png"
        }
        else if(posTerceiro=="B"){
            //CAB
            img.src="../../../Images/BatalhaNaval/CABred.png"
        }
        else{
            //CAC
            img.src="../../../Images/BatalhaNaval/CACred.png"
        }
    }
    else if(posSegundo=="B"){
        if(posTerceiro=="A"){
            //CBA
            img.src="../../../Images/BatalhaNaval/CBAred.png"
        }
        else if(posTerceiro=="B"){
            //CBB
            img.src="../../../Images/BatalhaNaval/CBBred.png"
        }
        else{
            //CBC
            img.src="../../../Images/BatalhaNaval/CBCred.png"
        }
    }
    else{
        if(posTerceiro=="A"){
            //CCA
            img.src="../../../Images/BatalhaNaval/CCAred.png"
        }
        else if(posTerceiro=="B"){
            //CCB
            img.src="../../../Images/BatalhaNaval/CCBred.png"
        }
        else{
            //CCC
            img.src="../../../Images/BatalhaNaval/CCCred.png"
        }
    }
}

function edward2() {
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
            location.replace(url="../DerrotaEdwardTeach.html")
        }
    }
}

function dica2() {
    alert('\nDica: ')
}