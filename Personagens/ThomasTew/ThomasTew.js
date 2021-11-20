if(!sessionStorage.totalPontos) // se ainda não tiver sessionStorage -> criar
{
    sessionStorage.totalPontos = 500
    setTimeout(() => { alert("\nVocê começará com " + Number(sessionStorage.totalPontos) + " pontos:\n\nCada dica consome 50 pontos.\nCada resposta errada consome 100 pontos.") }, 1000)
}
else // se já tiver sessionStorage
{
    if(Number(sessionStorage.totalPontos)<=0) // checar pontos - se Storage < 0 --> inicia novo jogo + 500 pontos
    {
        setTimeout(() => { alert("\nNovo jogo iniciado.") }, 1000)
        sessionStorage.totalPontos = 500
    }
    setTimeout(() => { alert("\nVocê está com " + pontos + " pontos:\n\nCada dica consome 50 pontos.\nCada resposta errada consome 100 pontos.") }, 1000) // se Storage > 0 --> jogo continua
}

var pontos = Number(sessionStorage.totalPontos) // só para não precisar escrever todo o storage muitas vezes


function checarPontos(pontos){
    if(pontos<=0){
        alert("Seus pontos zeraram.")
        location.replace(url="../DerrotaThomasTew.html")
    }
}

// ---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---

function thomas1() {
    
    resposta1 = prompt("-Mas de qual ilha esse poema está falando, afinal?").toLowerCase()
    
    if (resposta1.indexOf("pascoa") >= 0 || resposta1.indexOf("páscoa") >= 0)
    {
        alert("\nParabéns! Resposta correta!\n\nConcluído com: " + pontos +" pontos")
        location.replace(url="../Fase2/Fase2ThomasTew.html")
    }
    else
    {     
        pontos = pontos - 100
        alert("\nResposta errada -100 pontos.\n\nPontos atuais: "+pontos)
        checarPontos(pontos)
        sessionStorage.totalPontos = pontos
    }
}

var dicaUm = 0

function dica1() {
    if (dicaUm<=0)
    {
        pontos = pontos - 50
        alert('\nDica (1/3): "estranho poema"\n\n-50 pontos\nPontos atuais: '+ pontos)
        dicaUm++;
        sessionStorage.totalPontos = pontos // atualiza o storage
        checarPontos(pontos)
    }
    else if (dicaUm<=1)
    {
        pontos = pontos - 50
        alert('\nDica (2/3): "caçador de tesouros"\n\n-50 pontos\nPontos atuais: '+ pontos)
        dicaUm++;
        sessionStorage.totalPontos = pontos // atualiza o storage
        checarPontos(pontos)
    }
    else if (dicaUm<=2)
    {
        pontos = pontos - 50
        alert('\nDica (3/3): "indício"\n\n-50 pontos\nPontos atuais: '+ pontos)
        dicaUm++;
        sessionStorage.totalPontos = pontos // atualiza o storage
        checarPontos(pontos)
    }
    else 
    {
        alert('\nAcabaram as dicas\n\nPontos atuais: '+ pontos)
    }
}

// ---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---

function thomas2() {

    var valorX = prompt("\nQual o valor de X?")
    var valorY = prompt("\nQual o valor de Y?")
    var valorZ = prompt("\nQual o valor de Z?")

    if (valorX==7 && valorY==10 && valorZ==25)
    {
        alert("\nX - Correto\nY - Correto\nZ - Correto\n\nParabéns! Resposta correta!\n\nConcluído com: "+pontos+" pontos")
        location.replace(url="../Fase2/Fase2ThomasTew.html")
    }
    else
    {   
        if(valorX==7){
            valorX = "Correto"
        }
        else{
            valorX = "Incorreto"
        }
        if(valorY==10){
            valorY = "Correto"
        }
        else{
            valorY = "Incorreto"
        }
        if(valorZ==25){
            valorZ = "Correto"
        }
        else{
            valorZ = "Incorreto"
        }
        pontos = pontos - 100
        alert(`\nX - ${valorX}\nY - ${valorY}\nZ - ${valorZ}\n\nResposta errada -100 pontos.\n\nPontos atuais: ${pontos}`)
        sessionStorage.totalPontos = pontos
        checarPontos(pontos)
    }





    // else
    // {   
    //     pontos = pontos - 100
    //     alert("\nResposta errada -100 pontos.\n\nPontos atuais: "+pontos)
    //     sessionStorage.totalPontos = pontos
    //     checarPontos(pontos)
    // }
}

var dicaDois = 0

function dica2() {
    if (dicaDois==0)
    {
        pontos = pontos - 50
        alert('\nDica (1/3):  Y = 3 + X\n\n-50 pontos\nPontos atuais: '+ pontos)
        dicaDois++;
        sessionStorage.totalPontos = pontos
        checarPontos(pontos)
    }
    else if (dicaDois==1)
    {
        pontos = pontos - 50
        alert('\nDica (2/3):  Z - 3X = 4\n\n-50 pontos\nPontos atuais: '+ pontos)
        dicaDois++;
        sessionStorage.totalPontos = pontos
        checarPontos(pontos)
    }
    else if (dicaDois==2)
    {
        pontos = pontos - 50
        alert('\nDica (3/3):  Y = 10\n\n-50 pontos\nPontos atuais: '+ pontos)
        dicaDois++;
        sessionStorage.totalPontos = pontos
        checarPontos(pontos)
    }
    else 
    {
        alert('\nAcabaram as dicas.\n\nPontos atuais: '+ pontos)
    }
}

// ---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---