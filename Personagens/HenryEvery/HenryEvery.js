var navio = 0;

function checarSelecao(posNavio) {
  if (posNavio != "A" && posNavio != "B" && posNavio != "C") {
    alert("Seleção inválida.\n\nDigite A, B ou C.");
    selecionarPosicoes();
  } else {
    navio++;
    selecionarPosicoes();
  }
}
function selecionarPosicoes() {
  if (navio == 0) {
    var posPrimeiro = prompt(
      "Escolha uma posicao para o PRIMEIRO navio: "
    ).toUpperCase();
    sessionStorage.posicaoPrimeiro = posPrimeiro;
    checarSelecao(posPrimeiro);
  } else if (navio == 1) {
    var posSegundo = prompt(
      "Escolha uma posicao para o SEGUNDO navio: "
    ).toUpperCase();
    sessionStorage.posicaoSegundo = posSegundo;
    checarSelecao(posSegundo);
  } else if (navio == 2) {
    var posTerceiro = prompt(
      "Escolha uma posicao para o TERCEIRO navio: "
    ).toUpperCase();
    sessionStorage.posicaoTerceiro = posTerceiro;
    checarSelecao(posTerceiro);
  } else {
    alert(
      `\nSeleção efetuada:\n\nPrimeiro navio: ${sessionStorage.posicaoPrimeiro}\nSegundo navio: ${sessionStorage.posicaoSegundo}\nTerceiro navio: ${sessionStorage.posicaoTerceiro}\n\nClique em "CONCLUIR"`
    );
  }
}
function concluirSelecao() {
  if (navio == 3) {
    location.replace((url = "../Fase2/Fase2HenryEvery.html"));
  } else {
    alert(`\nSeleção pendente.\nClique em "SELECIONAR"`);
  }
}
//---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---fase2---
var posPrimeiro = sessionStorage.posicaoPrimeiro;
var posSegundo = sessionStorage.posicaoSegundo;
var posTerceiro = sessionStorage.posicaoTerceiro;
var img = document.createElement("IMG");
document.getElementById("tabuleiro").appendChild(img);
if (posPrimeiro == "A") {
  if (posSegundo == "A") {
    if (posTerceiro == "A") {
      img.src = "../../../Images/BatalhaNaval/AAA.png";
    } else if (posTerceiro == "B") {
      img.src = "../../../Images/BatalhaNaval/AAB.png";
    } else {
      img.src = "../../../Images/BatalhaNaval/AAC.png";
    }
  } else if (posSegundo == "B") {
    if (posTerceiro == "A") {
      img.src = "../../../Images/BatalhaNaval/ABA.png";
    } else if (posTerceiro == "B") {
      img.src = "../../../Images/BatalhaNaval/ABB.png";
    } else {
      img.src = "../../../Images/BatalhaNaval/ABC.png";
    }
  } else {
    if (posTerceiro == "A") {
      img.src = "../../../Images/BatalhaNaval/ACA.png";
    } else if (posTerceiro == "B") {
      img.src = "../../../Images/BatalhaNaval/ACB.png";
    } else {
      img.src = "../../../Images/BatalhaNaval/ACC.png";
    }
  }
} else if (posPrimeiro == "B") {
  if (posSegundo == "A") {
    if (posTerceiro == "A") {
      img.src = "../../../Images/BatalhaNaval/BAA.png";
    } else if (posTerceiro == "B") {
      img.src = "../../../Images/BatalhaNaval/BAB.png";
    } else {
      img.src = "../../../Images/BatalhaNaval/BAC.png";
    }
  } else if (posSegundo == "B") {
    if (posTerceiro == "A") {
      img.src = "../../../Images/BatalhaNaval/BBA.png";
    } else if (posTerceiro == "B") {
      img.src = "../../../Images/BatalhaNaval/BBB.png";
    } else {
      img.src = "../../../Images/BatalhaNaval/BBC.png";
    }
  } else {
    if (posTerceiro == "A") {
      img.src = "../../../Images/BatalhaNaval/BCA.png";
    } else if (posTerceiro == "B") {
      img.src = "../../../Images/BatalhaNaval/BCB.png";
    } else {
      img.src = "../../../Images/BatalhaNaval/BCC.png";
    }
  }
} else {
  if (posSegundo == "A") {
    if (posTerceiro == "A") {
      img.src = "../../../Images/BatalhaNaval/CAA.png";
    } else if (posTerceiro == "B") {
      img.src = "../../../Images/BatalhaNaval/CAB.png";
    } else {
      img.src = "../../../Images/BatalhaNaval/CAC.png";
    }
  } else if (posSegundo == "B") {
    if (posTerceiro == "A") {
      img.src = "../../../Images/BatalhaNaval/CBA.png";
    } else if (posTerceiro == "B") {
      img.src = "../../../Images/BatalhaNaval/CBB.png";
    } else {
      img.src = "../../../Images/BatalhaNaval/CBC.png";
    }
  } else {
    if (posTerceiro == "A") {
      img.src = "../../../Images/BatalhaNaval/CCA.png";
    } else if (posTerceiro == "B") {
      img.src = "../../../Images/BatalhaNaval/CCB.png";
    } else {
      img.src = "../../../Images/BatalhaNaval/CCC.png";
    }
  }
}
function henry2() {
  while (true) {
    resposta = prompt(
      "\n-Qual angulação proporcionará o maior alcance horizontal?\n\nA. 30°\nB. 45°\nC. 60°\n"
    ).toUpperCase();
    if (resposta != "A" && resposta != "B" && resposta != "C") {
      alert("\nResposta inválida.\n\nDigite A, B ou C.\n");
    } else {
      if (resposta == "B") {
        alert("\nResposta CORRETA!");
        location.replace((url = "../Fase3/Fase3HenryEvery.html"));
        break;
      } else {
        alert("\nResposta errada!");
        location.replace((url = "../DerrotaHenryEvery.html"));
        break;
      }
    }
  }
}
// ---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---fase3---
function atacar() {
  var acertos = 0;
  var ataques = [];
  var tabuleiroInimigo = Math.floor(Math.random() * 27) + 1;
  var msg = 'Digite uma coordenada para atacar, no modelo "número+letra".\n';
  alert(
    "\nVocê terá 10 ataques.\nCom pelo menos 5 acertos para vencer.\n\nExemplos de coordenadas válidas: 3D, 1E, 5A.\n\nCuidado para não colocar coordenadas repetidas!"
  );

  for (var i = 1; i <= 10; i++) {
    coordenada = prompt(msg).toUpperCase();
    if (
      coordenada != "1A" &&
      coordenada != "2A" &&
      coordenada != "3A" &&
      coordenada != "4A" &&
      coordenada != "5A" &&
      coordenada != "1B" &&
      coordenada != "2B" &&
      coordenada != "3B" &&
      coordenada != "4B" &&
      coordenada != "5B" &&
      coordenada != "1C" &&
      coordenada != "2C" &&
      coordenada != "3C" &&
      coordenada != "4C" &&
      coordenada != "5C" &&
      coordenada != "1D" &&
      coordenada != "2D" &&
      coordenada != "3D" &&
      coordenada != "4D" &&
      coordenada != "5D" &&
      coordenada != "1E" &&
      coordenada != "2E" &&
      coordenada != "3E" &&
      coordenada != "4E" &&
      coordenada != "5E"
    ) {
      alert("Coordenada inválida");
      i--;
    } else {
      if (tabuleiroInimigo == 1) {
        if (
          coordenada == "1A" ||
          coordenada == "2A" ||
          coordenada == "3A" ||
          coordenada == "4A" ||
          coordenada == "5A" ||
          coordenada == "5B" ||
          coordenada == "5C" ||
          coordenada == "4E" ||
          coordenada == "5E"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 2) {
        if (
          coordenada == "1A" ||
          coordenada == "2A" ||
          coordenada == "3A" ||
          coordenada == "4A" ||
          coordenada == "5A" ||
          coordenada == "5B" ||
          coordenada == "5C" ||
          coordenada == "2B" ||
          coordenada == "2C"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 3) {
        if (
          coordenada == "1A" ||
          coordenada == "2A" ||
          coordenada == "3A" ||
          coordenada == "4A" ||
          coordenada == "5A" ||
          coordenada == "5B" ||
          coordenada == "5C" ||
          coordenada == "2B" ||
          coordenada == "3B"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 4) {
        if (
          coordenada == "1A" ||
          coordenada == "2A" ||
          coordenada == "3A" ||
          coordenada == "4A" ||
          coordenada == "1B" ||
          coordenada == "1C" ||
          coordenada == "1D" ||
          coordenada == "4E" ||
          coordenada == "5E"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 5) {
        if (
          coordenada == "1A" ||
          coordenada == "2A" ||
          coordenada == "3A" ||
          coordenada == "4A" ||
          coordenada == "1B" ||
          coordenada == "1C" ||
          coordenada == "1D" ||
          coordenada == "2B" ||
          coordenada == "2C"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 6) {
        if (
          coordenada == "1A" ||
          coordenada == "2A" ||
          coordenada == "3A" ||
          coordenada == "4A" ||
          coordenada == "1B" ||
          coordenada == "1C" ||
          coordenada == "1D" ||
          coordenada == "2B" ||
          coordenada == "3C"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 7) {
        if (
          coordenada == "1A" ||
          coordenada == "2A" ||
          coordenada == "3A" ||
          coordenada == "4A" ||
          coordenada == "1E" ||
          coordenada == "2E" ||
          coordenada == "3E" ||
          coordenada == "4E" ||
          coordenada == "5E"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 8) {
        if (
          coordenada == "1A" ||
          coordenada == "2A" ||
          coordenada == "3A" ||
          coordenada == "4A" ||
          coordenada == "1E" ||
          coordenada == "2E" ||
          coordenada == "3E" ||
          coordenada == "2B" ||
          coordenada == "2C"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 9) {
        if (
          coordenada == "1A" ||
          coordenada == "2A" ||
          coordenada == "3A" ||
          coordenada == "4A" ||
          coordenada == "1E" ||
          coordenada == "2E" ||
          coordenada == "3E" ||
          coordenada == "2B" ||
          coordenada == "3B"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 10) {
        if (
          coordenada == "4A" ||
          coordenada == "4B" ||
          coordenada == "4C" ||
          coordenada == "4D" ||
          coordenada == "5A" ||
          coordenada == "5B" ||
          coordenada == "5C" ||
          coordenada == "4E" ||
          coordenada == "5E"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 11) {
        if (
          coordenada == "4A" ||
          coordenada == "4B" ||
          coordenada == "4C" ||
          coordenada == "4D" ||
          coordenada == "5A" ||
          coordenada == "5B" ||
          coordenada == "5C" ||
          coordenada == "2B" ||
          coordenada == "2C"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 12) {
        if (
          coordenada == "4A" ||
          coordenada == "4B" ||
          coordenada == "4C" ||
          coordenada == "4D" ||
          coordenada == "5A" ||
          coordenada == "5B" ||
          coordenada == "5C" ||
          coordenada == "2B" ||
          coordenada == "3B"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 13) {
        if (
          coordenada == "4A" ||
          coordenada == "4B" ||
          coordenada == "4C" ||
          coordenada == "4D" ||
          coordenada == "1B" ||
          coordenada == "1C" ||
          coordenada == "1D" ||
          coordenada == "4E" ||
          coordenada == "5E"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 14) {
        if (
          coordenada == "4A" ||
          coordenada == "4B" ||
          coordenada == "4C" ||
          coordenada == "4D" ||
          coordenada == "1B" ||
          coordenada == "1C" ||
          coordenada == "1D" ||
          coordenada == "2B" ||
          coordenada == "2C"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 15) {
        if (
          coordenada == "4A" ||
          coordenada == "4B" ||
          coordenada == "4C" ||
          coordenada == "4D" ||
          coordenada == "1B" ||
          coordenada == "1C" ||
          coordenada == "1D" ||
          coordenada == "2B" ||
          coordenada == "3B"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 16) {
        if (
          coordenada == "4A" ||
          coordenada == "4B" ||
          coordenada == "4C" ||
          coordenada == "4D" ||
          coordenada == "1E" ||
          coordenada == "2E" ||
          coordenada == "3E" ||
          coordenada == "4E" ||
          coordenada == "5E"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 17) {
        if (
          coordenada == "4A" ||
          coordenada == "4B" ||
          coordenada == "4C" ||
          coordenada == "4D" ||
          coordenada == "1E" ||
          coordenada == "2E" ||
          coordenada == "3E" ||
          coordenada == "2B" ||
          coordenada == "2C"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 18) {
        if (
          coordenada == "4A" ||
          coordenada == "4B" ||
          coordenada == "4C" ||
          coordenada == "4D" ||
          coordenada == "1E" ||
          coordenada == "2E" ||
          coordenada == "3E" ||
          coordenada == "2B" ||
          coordenada == "3B"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 19) {
        if (
          coordenada == "2D" ||
          coordenada == "3D" ||
          coordenada == "4D" ||
          coordenada == "5D" ||
          coordenada == "5A" ||
          coordenada == "5B" ||
          coordenada == "5C" ||
          coordenada == "4E" ||
          coordenada == "5E"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 20) {
        if (
          coordenada == "2D" ||
          coordenada == "3D" ||
          coordenada == "4D" ||
          coordenada == "5D" ||
          coordenada == "5A" ||
          coordenada == "5B" ||
          coordenada == "5C" ||
          coordenada == "2B" ||
          coordenada == "2C"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 21) {
        if (
          coordenada == "2D" ||
          coordenada == "3D" ||
          coordenada == "4D" ||
          coordenada == "5D" ||
          coordenada == "5A" ||
          coordenada == "5B" ||
          coordenada == "5C" ||
          coordenada == "2B" ||
          coordenada == "3B"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 22) {
        if (
          coordenada == "2D" ||
          coordenada == "3D" ||
          coordenada == "4D" ||
          coordenada == "5D" ||
          coordenada == "1B" ||
          coordenada == "1C" ||
          coordenada == "1D" ||
          coordenada == "4E" ||
          coordenada == "5E"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 23) {
        if (
          coordenada == "2D" ||
          coordenada == "3D" ||
          coordenada == "4D" ||
          coordenada == "5D" ||
          coordenada == "1B" ||
          coordenada == "1C" ||
          coordenada == "1D" ||
          coordenada == "2B" ||
          coordenada == "2C"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 24) {
        if (
          coordenada == "2D" ||
          coordenada == "3D" ||
          coordenada == "4D" ||
          coordenada == "5D" ||
          coordenada == "1B" ||
          coordenada == "1C" ||
          coordenada == "1D" ||
          coordenada == "2B" ||
          coordenada == "3B"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 25) {
        if (
          coordenada == "2D" ||
          coordenada == "3D" ||
          coordenada == "4D" ||
          coordenada == "5D" ||
          coordenada == "1E" ||
          coordenada == "2E" ||
          coordenada == "3E" ||
          coordenada == "4E" ||
          coordenada == "5E"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else if (tabuleiroInimigo == 26) {
        if (
          coordenada == "2D" ||
          coordenada == "3D" ||
          coordenada == "4D" ||
          coordenada == "5D" ||
          coordenada == "1E" ||
          coordenada == "2E" ||
          coordenada == "3E" ||
          coordenada == "2B" ||
          coordenada == "2C"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      } else {
        if (
          coordenada == "2D" ||
          coordenada == "3D" ||
          coordenada == "4D" ||
          coordenada == "5D" ||
          coordenada == "1E" ||
          coordenada == "2E" ||
          coordenada == "3E" ||
          coordenada == "2B" ||
          coordenada == "3B"
        ) {
          msg += i + " --- " + coordenada + " --- FOGO!\n";
          acertos++;
          ataques.push(coordenada);
        } else {
          msg += i + " --- " + coordenada + " --- água.\n";
          ataques.push(coordenada);
        }
      }
    }
  }
  alert(msg);
  if (new Set(ataques).size !== ataques.length) {
    alert(
      "\nOps, você atacou o mesmo lugar mais de uma vez... cuidado, tente novamente"
    );
  } else {
    if (acertos >= 5) {
      alert(
        "\nVITÓRIA !!!\n\nVocê conseguiu um total de: " + acertos + " acertos."
      );
      location.replace((url = "../VitoriaHenryEvery.html"));
    } else {
      alert("\nDerrota. Acertos insuficientes (" + acertos + ")");
      location.replace((url = "../DerrotaHenryEvery.html"));
    }
  }
}
