
var navio = 0 // navios posicionados = 0

function checarSelecao (posNavio) {
    if(posNavio!="A" && posNavio!="B" && posNavio!="C"){ //avalia seleção "A", "B" ou "C"
        alert("Seleção inválida.\n\nDigite A, B ou C.")
        selecionarPosicoes()
    }
    else {
        navio++; // seleção válida -> próximo navio
        selecionarPosicoes()
    }
}

function selecionarPosicoes(){

    if(navio == 0){
    var posPrimeiro = prompt("Escolha uma posicao para o PRIMEIRO navio: ").toUpperCase()
    sessionStorage.posicaoPrimeiro = posPrimeiro // salvarei em storage, pq utilizarei nas próximas fases
    checarSelecao(posPrimeiro)
    }

    else if (navio == 1){
    var posSegundo = prompt("Escolha uma posicao para o SEGUNDO navio: ").toUpperCase()
    sessionStorage.posicaoSegundo = posSegundo // salvarei em storage, pq utilizarei nas próximas fases
    checarSelecao(posSegundo)
    }

    else if (navio == 2){
    var posTerceiro = prompt("Escolha uma posicao para o TERCEIRO navio: ").toUpperCase()
    sessionStorage.posicaoTerceiro = posTerceiro // salvarei em storage, pq utilizarei nas próximas fases
    checarSelecao(posTerceiro)
    }
    else{
        alert(`\nSeleção efetuada:\n\nPrimeiro navio: ${sessionStorage.posicaoPrimeiro}\nSegundo navio: ${sessionStorage.posicaoSegundo}\nTerceiro navio: ${sessionStorage.posicaoTerceiro}\n\nClique em "CONCLUIR"`)
    }
}

function concluirSelecao() { 
     if (navio == 3 ){
        location.replace(url="../Fase2/Fase2HenryEvery.html") // se a seleção dos 3 navios foi feita -> próxima fase
     }
     else {
        alert(`\nSeleção pendente.\nClique em "SELECIONAR"`)
     }
}

//---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---

var posPrimeiro = sessionStorage.posicaoPrimeiro // recuperando storage para gerar a imagem
var posSegundo = sessionStorage.posicaoSegundo // recuperando storage para gerar a imagem
var posTerceiro = sessionStorage.posicaoTerceiro // recuperando storage para gerar a imagem

var img = document.createElement("IMG") 

document.getElementById("tabuleiro").appendChild(img)   // implementa a imagem correspondente ao posicionamento selecionado na fase 1

// achar a imagem correspondente à cada posicionamento
if(posPrimeiro=="A"){  // A _ _
    if(posSegundo=="A"){ // A A _
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
    else if(posSegundo=="B"){ // A B _
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
        if(posTerceiro=="A"){ // A C _
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

else if(posPrimeiro=="B"){ // B _ _
    if(posSegundo=="A"){ // B A _
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
    else if(posSegundo=="B"){ // B B _
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
        if(posTerceiro=="A"){ // B C _
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

else { // C _ _
    if(posSegundo=="A"){ // C A _
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
    else if(posSegundo=="B"){ // C B _
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
        if(posTerceiro=="A"){ // C C _
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

    while(true) { // enquanto a passoa não responder "a" "b" ou "c"

        resposta = prompt("\n-Qual angulação proporcionará o maior alcance horizontal?\n\nA. 30°\nB. 45°\nC. 60°\n").toUpperCase()

        if(resposta!="A" && resposta!="B" && resposta!="C"){
            alert('\nResposta inválida.\n\nDigite A, B ou C.\n')
        }
        else{
            if(resposta=="B"){
                alert("\nResposta CORRETA!")
                location.replace(url="../Fase3/Fase3HenryEvery.html")
                break // resposta válida e correta -> quebra loop -> próxima fase
            }
            else {
                alert("\nResposta errada!")
                location.replace(url="../DerrotaHenryEvery.html")
                break // resposta válida e incorreta -> quebra loop -> pág. derrota
            }
        }
    }
}

// ---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---

function atacar () {

    var acertos = 0 

    var ataques = [] //array que armazenará os ataques

    var tabuleiroInimigo = Math.floor(Math.random() * 27) + 1 // número aleatório de 1 à 27 - corresponde aos possíveis 27 tabuleiros de AAA á CCC

    alert("\nVocê terá 10 ataques.\nCom pelo menos 5 acertos para vencer.\n\nExemplos de coordenadas válidas: 3D, 1E, 5A.\n\nCuidado para não colocar coordenadas repetidas!")
    
    var msg = 'Digite uma coordenada para atacar, no modelo "número+letra".\n'

    for(var i=1; i<=10; i++){ // 10 ataques posíveis
        
        coordenada = prompt(msg).toUpperCase() // validando coordenada

        if(coordenada!="1A"&&coordenada!="2A"&&coordenada!="3A"&&coordenada!="4A"&&coordenada!="5A"&&coordenada!="1B"&&coordenada!="2B"&&coordenada!="3B"&&coordenada!="4B"&&coordenada!="5B"&&coordenada!="1C"&&coordenada!="2C"&&coordenada!="3C"&&coordenada!="4C"&&coordenada!="5C"&&coordenada!="1D"&&coordenada!="2D"&&coordenada!="3D"&&coordenada!="4D"&&coordenada!="5D"&&coordenada!="1E"&&coordenada!="2E"&&coordenada!="3E"&&coordenada!="4E"&&coordenada!="5E"){
            alert("Coordenada inválida")
            i--; // desconsidera ataque
        }
        //coordenada válida -> avaliar Fogo ou Água
        else{
            if(tabuleiroInimigo==1){ //AAA

                if(coordenada=="1A"||coordenada=="2A"||coordenada=="3A"||coordenada=="4A"||coordenada=="5A"||coordenada=="5B"||coordenada=="5C"||coordenada=="4E"||coordenada=="5E"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos++
                    ataques.push(coordenada) // adiciona coordenda à array
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada) // adiciona coordenada à array
                } 
            }
            else if(tabuleiroInimigo==2){ //AAB

                if(coordenada=="1A"||coordenada=="2A"||coordenada=="3A"||coordenada=="4A"||coordenada=="5A"||coordenada=="5B"||coordenada=="5C"||coordenada=="2B"||coordenada=="2C"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada) // adiciona coordenada à array
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada) // adiciona coordenada à array
                }
            }
            else if(tabuleiroInimigo==3){ //AAC

                if(coordenada=="1A"||coordenada=="2A"||coordenada=="3A"||coordenada=="4A"||coordenada=="5A"||coordenada=="5B"||coordenada=="5C"||coordenada=="2B"||coordenada=="3B"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }  
            }
            else if(tabuleiroInimigo==4){ //ABA

                if(coordenada=="1A"||coordenada=="2A"||coordenada=="3A"||coordenada=="4A"||coordenada=="1B"||coordenada=="1C"||coordenada=="1D"||coordenada=="4E"||coordenada=="5E"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }  

            }
            else if(tabuleiroInimigo==5){ //ABB

                if(coordenada=="1A"||coordenada=="2A"||coordenada=="3A"||coordenada=="4A"||coordenada=="1B"||coordenada=="1C"||coordenada=="1D"||coordenada=="2B"||coordenada=="2C"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==6){ //ABC

                if(coordenada=="1A"||coordenada=="2A"||coordenada=="3A"||coordenada=="4A"||coordenada=="1B"||coordenada=="1C"||coordenada=="1D"||coordenada=="2B"||coordenada=="3C"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==7){ //ACA

                if(coordenada=="1A"||coordenada=="2A"||coordenada=="3A"||coordenada=="4A"||coordenada=="1E"||coordenada=="2E"||coordenada=="3E"||coordenada=="4E"||coordenada=="5E"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==8){ //ACB

                if(coordenada=="1A"||coordenada=="2A"||coordenada=="3A"||coordenada=="4A"||coordenada=="1E"||coordenada=="2E"||coordenada=="3E"||coordenada=="2B"||coordenada=="2C"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==9){ //ACC

                if(coordenada=="1A"||coordenada=="2A"||coordenada=="3A"||coordenada=="4A"||coordenada=="1E"||coordenada=="2E"||coordenada=="3E"||coordenada=="2B"||coordenada=="3B"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==10){ //BAA

                if(coordenada=="4A"||coordenada=="4B"||coordenada=="4C"||coordenada=="4D"||coordenada=="5A"||coordenada=="5B"||coordenada=="5C"||coordenada=="4E"||coordenada=="5E"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==11){ //BAB

                if(coordenada=="4A"||coordenada=="4B"||coordenada=="4C"||coordenada=="4D"||coordenada=="5A"||coordenada=="5B"||coordenada=="5C"||coordenada=="2B"||coordenada=="2C"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==12){ //BAC

                if(coordenada=="4A"||coordenada=="4B"||coordenada=="4C"||coordenada=="4D"||coordenada=="5A"||coordenada=="5B"||coordenada=="5C"||coordenada=="2B"||coordenada=="3B"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==13){ //BBA

                if(coordenada=="4A"||coordenada=="4B"||coordenada=="4C"||coordenada=="4D"||coordenada=="1B"||coordenada=="1C"||coordenada=="1D"||coordenada=="4E"||coordenada=="5E"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==14){ //BBB

                if(coordenada=="4A"||coordenada=="4B"||coordenada=="4C"||coordenada=="4D"||coordenada=="1B"||coordenada=="1C"||coordenada=="1D"||coordenada=="2B"||coordenada=="2C"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==15){ //BBC

                if(coordenada=="4A"||coordenada=="4B"||coordenada=="4C"||coordenada=="4D"||coordenada=="1B"||coordenada=="1C"||coordenada=="1D"||coordenada=="2B"||coordenada=="3B"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==16){ //BCA

                if(coordenada=="4A"||coordenada=="4B"||coordenada=="4C"||coordenada=="4D"||coordenada=="1E"||coordenada=="2E"||coordenada=="3E"||coordenada=="4E"||coordenada=="5E"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==17){ //BCB

                if(coordenada=="4A"||coordenada=="4B"||coordenada=="4C"||coordenada=="4D"||coordenada=="1E"||coordenada=="2E"||coordenada=="3E"||coordenada=="2B"||coordenada=="2C"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==18){ //BCC

                if(coordenada=="4A"||coordenada=="4B"||coordenada=="4C"||coordenada=="4D"||coordenada=="1E"||coordenada=="2E"||coordenada=="3E"||coordenada=="2B"||coordenada=="3B"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==19){ //CAA

                if(coordenada=="2D"||coordenada=="3D"||coordenada=="4D"||coordenada=="5D"||coordenada=="5A"||coordenada=="5B"||coordenada=="5C"||coordenada=="4E"||coordenada=="5E"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==20){ //CAB

                if(coordenada=="2D"||coordenada=="3D"||coordenada=="4D"||coordenada=="5D"||coordenada=="5A"||coordenada=="5B"||coordenada=="5C"||coordenada=="2B"||coordenada=="2C"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==21){ //CAC

                if(coordenada=="2D"||coordenada=="3D"||coordenada=="4D"||coordenada=="5D"||coordenada=="5A"||coordenada=="5B"||coordenada=="5C"||coordenada=="2B"||coordenada=="3B"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==22){ //CBA

                if(coordenada=="2D"||coordenada=="3D"||coordenada=="4D"||coordenada=="5D"||coordenada=="1B"||coordenada=="1C"||coordenada=="1D"||coordenada=="4E"||coordenada=="5E"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==23){ //CBB

                if(coordenada=="2D"||coordenada=="3D"||coordenada=="4D"||coordenada=="5D"||coordenada=="1B"||coordenada=="1C"||coordenada=="1D"||coordenada=="2B"||coordenada=="2C"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==24){ //CBC

                if(coordenada=="2D"||coordenada=="3D"||coordenada=="4D"||coordenada=="5D"||coordenada=="1B"||coordenada=="1C"||coordenada=="1D"||coordenada=="2B"||coordenada=="3B"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==25){ //CCA

                if(coordenada=="2D"||coordenada=="3D"||coordenada=="4D"||coordenada=="5D"||coordenada=="1E"||coordenada=="2E"||coordenada=="3E"||coordenada=="4E"||coordenada=="5E"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else if(tabuleiroInimigo==26){ //CCB

                if(coordenada=="2D"||coordenada=="3D"||coordenada=="4D"||coordenada=="5D"||coordenada=="1E"||coordenada=="2E"||coordenada=="3E"||coordenada=="2B"||coordenada=="2C"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
            else{ //CCC

                if(coordenada=="2D"||coordenada=="3D"||coordenada=="4D"||coordenada=="5D"||coordenada=="1E"||coordenada=="2E"||coordenada=="3E"||coordenada=="2B"||coordenada=="3B"){
                    msg += i + " --- " + coordenada + " --- FOGO!\n"
                    acertos ++
                    ataques.push(coordenada)
                }
                else{
                    msg += i + " --- " + coordenada + " --- água.\n"
                    ataques.push(coordenada)
                }
                
            }
        }
    }
    
    alert(msg) // à cada ataque, mostra a msg com todos os ataques, com "água" ou "fogo"

    if((new Set(ataques)).size !== ataques.length){ // checar se tem coordenadas repetidas (trapaceiros poderiam colocar a mesma coodenada que deu "FOGO" várias vezes, propositalmente)
        alert("\nOps, você atacou o mesmo lugar mais de uma vez... cuidado, tente novamente") // sendo gentil, para quem não trapaceou, e repediu coordenada sem querer
    }
    else{
        if(acertos>=5){
            alert('\nVITÓRIA !!!\n\nVocê conseguiu um total de: '+acertos+' acertos.')
            location.replace(url="../VitoriaHenryEvery.html")
        }
        else{
            alert("\nDerrota. Acertos insuficientes ("+acertos+")")
            location.replace(url="../DerrotaHenryEvery.html")
        }
    }
}