var dicaDois = 0

function dica2() {
    if (dicaDois==0)
    {
        pontos = pontos - 50
        alert('\nDica (1/3):  Y = 3 + X\n\n-50 pontos\nPontos atuais: '+ pontos)
        dicaDois++;
        checarPontos(pontos)
    }
    else if (dicaDois==1)
    {
        pontos = pontos - 50
        alert('\nDica (2/3):  Z - 3X = 4\n\n-50 pontos\nPontos atuais: '+ pontos)
        dicaDois++;
        checarPontos(pontos)
    }
    else if (dicaDois==2)
    {
        pontos = pontos - 50
        alert('\nDica (3/3):  Y = 10\n\n-50 pontos\nPontos atuais: '+ pontos)
        dicaDois++;
        checarPontos(pontos)
    }
    else 
    {
        alert('\nAcabaram as dicas.\n\nPontos atuais: '+ pontos)
    }
}

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
        pontos = pontos - 100
        alert("\nResposta errada -100 pontos.\n\nPontos atuais: "+pontos)
        checarPontos(pontos)
    }
}