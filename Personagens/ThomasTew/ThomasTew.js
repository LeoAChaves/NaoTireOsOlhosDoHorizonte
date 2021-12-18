if (!sessionStorage.totalPontos) {
  sessionStorage.totalPontos = 500;
  setTimeout(() => {
    alert(
      "\nVocê começará com " +
        Number(sessionStorage.totalPontos) +
        " pontos:\n\nCada dica consome 50 pontos.\nCada resposta errada consome 100 pontos."
    );
  }, 1000);
} else {
  if (Number(sessionStorage.totalPontos) <= 0) {
    setTimeout(() => {
      alert("\nNovo jogo iniciado.");
    }, 1000);
    sessionStorage.totalPontos = 500;
  }
  setTimeout(() => {
    alert(
      "\nVocê está com " +
        pontos +
        " pontos:\n\nCada dica consome 50 pontos.\nCada resposta errada consome 100 pontos."
    );
  }, 1000);
}
var pontos = Number(sessionStorage.totalPontos);
function checarPontos(pontos) {
  if (pontos <= 0) {
    alert("Seus pontos zeraram.");
    location.replace((url = "../DerrotaThomasTew.html"));
  }
}
// ---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---fase1---
function thomas1() {
  resposta1 = prompt(
    "-Mas de qual ilha esse poema está falando, afinal?"
  ).toLowerCase();
  if (resposta1.indexOf("pascoa") >= 0 || resposta1.indexOf("páscoa") >= 0) {
    alert(
      "\nParabéns! Resposta correta!\n\nFase concluída com: " +
        pontos +
        " pontos"
    );
    location.replace((url = "../Fase2/Fase2ThomasTew.html"));
  } else {
    pontos -= 100;
    alert("\nResposta errada -100 pontos.\n\nPontos atuais: " + pontos);
    sessionStorage.totalPontos = pontos;
    checarPontos(pontos);
  }
}
var dicaUm = 3;
function dica1() {
  if (dicaUm == 3) {
    pontos -= 50;
    alert(
      '\nDica (1/3): \n\n"Com essa tua magia"\n"Parece um paraíso"\n\n-50 pontos\nPontos atuais: ' +
        pontos
    );
    dicaUm--;
    sessionStorage.totalPontos = pontos;
    checarPontos(pontos);
  } else if (dicaUm == 2) {
    pontos -= 50;
    alert(
      "\nDica (2/3): Já abrigou uma civilização muito próspera, mas que, porém sucumbiu ao isolamento e desgaste do solo.\n\n-50 pontos\nPontos atuais: " +
        pontos
    );
    dicaUm--;
    sessionStorage.totalPontos = pontos;
    checarPontos(pontos);
  } else if (dicaUm == 1) {
    pontos -= 50;
    alert(
      "\nDica (3/3): Conhecida no mundo todo por suas enormes estátuas de pedra.\n\n-50 pontos\nPontos atuais: " +
        pontos
    );
    dicaUm--;
    sessionStorage.totalPontos = pontos;
    checarPontos(pontos);
  } else {
    alert("\nAcabaram as dicas\n\nPontos atuais: " + pontos);
  }
}
// ---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---
function thomas2() {
  var valorX = prompt("\nQual o valor de X?");
  var valorY = prompt("\nQual o valor de Y?");
  var valorZ = prompt("\nQual o valor de Z?");

  if (valorX == 7 && valorY == 10 && valorZ == 25) {
    alert(
      "\nX - Correto\nY - Correto\nZ - Correto\n\nParabéns! Resposta correta!\n\nFase concluída com: " +
        pontos +
        " pontos"
    );
    location.replace((url = "../Fase3/Fase3ThomasTew.html"));
  } else {
    if (valorX == 7) {
      valorX = "Correto";
    } else {
      valorX = "Incorreto";
    }
    if (valorY == 10) {
      valorY = "Correto";
    } else {
      valorY = "Incorreto";
    }
    if (valorZ == 25) {
      valorZ = "Correto";
    } else {
      valorZ = "Incorreto";
    }
    pontos -= 100;
    alert(
      `\nX - ${valorX}\nY - ${valorY}\nZ - ${valorZ}\n\nResposta errada -100 pontos.\n\nPontos atuais: ${pontos}`
    );
    sessionStorage.totalPontos = pontos;
    checarPontos(pontos);
  }
}
var dicaDois = 3;
function dica2() {
  if (dicaDois == 3) {
    pontos -= 50;
    alert("\nDica (1/3):  Z - Y = 15\n\n-50 pontos\nPontos atuais: " + pontos);
    dicaDois--;
    sessionStorage.totalPontos = pontos;
    checarPontos(pontos);
  } else if (dicaDois == 2) {
    pontos -= 50;
    alert("\nDica (2/3):  X + Y = 17\n\n-50 pontos\nPontos atuais: " + pontos);
    dicaDois--;
    sessionStorage.totalPontos = pontos;
    checarPontos(pontos);
  } else if (dicaDois == 1) {
    pontos -= 50;
    alert("\nDica (3/3):  Y = 10\n\n-50 pontos\nPontos atuais: " + pontos);
    dicaDois--;
    sessionStorage.totalPontos = pontos;
    checarPontos(pontos);
  } else {
    alert("\nAcabaram as dicas.\n\nPontos atuais: " + pontos);
  }
}
// ---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---
function cavar() {
  alert(
    "\nSão 10 locais possíveis para serem escavados.\n\nCada tentativa que falhar, serão descontados 25 pontos.\nAche o tesouro, antes que seus pontos acabem!"
  );
  var tesouro = Math.floor(Math.random() * 10) + 1;
  var msg = "";
  for (var i = 1; i <= 10; i++) {
    var escavar = parseInt(
      prompt(
        "\nDigite um número de 1 à 10 para cavar.\nPontos restantes: " +
          sessionStorage.totalPontos +
          "\n\n" +
          msg
      )
    );
    if (escavar < 1 || escavar > 10 || isNaN(escavar)) {
      alert("\nNúmero inválido");
      i--;
    } else {
      if (escavar == tesouro) {
        alert(
          "\nTesouro encontrado! VITÓRIA!!\n\nPontuação final: " +
            sessionStorage.totalPontos +
            " pontos."
        );
        location.replace((url = "../VitoriaThomasTew.html"));
        sessionStorage.totalPontos = 500;
        break;
      } else {
        msg += `Tentativa ${i}: cavou o ponto ${escavar} --- sem tesouro\n`;
        sessionStorage.totalPontos -= 25;
        if (sessionStorage.totalPontos <= 0) {
          alert("Seus pontos zeraram.");
          location.replace((url = "../DerrotaThomasTew.html"));
          break;
        }
      }
    }
  }
}
